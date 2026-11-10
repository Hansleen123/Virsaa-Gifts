import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { readFileSync } from 'fs';

// Load .env.local for credentials (never commit secrets directly)
function loadEnv() {
  const envPath = new URL('../.env.local', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
  if (fs.existsSync(envPath)) {
    const lines = readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim();
    }
  }
}
loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pwgfknmywdvycshimesg.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const BUCKET_NAME = 'product-images';

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('ERROR: SUPABASE_SERVICE_ROLE_KEY not set in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

async function ensureBucket() {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  if (error) {
    console.error('Error listing buckets:', error);
    return;
  }
  const exists = buckets.some(b => b.name === BUCKET_NAME);
  if (!exists) {
    console.log(`Creating bucket '${BUCKET_NAME}'...`);
    const { error: createErr } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 10485760,
      allowedMimeTypes: ['image/webp', 'image/jpeg', 'image/png', 'image/svg+xml']
    });
    if (createErr) {
      console.error('Error creating bucket:', createErr);
    } else {
      console.log(`Bucket '${BUCKET_NAME}' created successfully.`);
    }
  } else {
    console.log(`Bucket '${BUCKET_NAME}' exists and is ready.`);
  }
}

async function uploadAllImages() {
  await ensureBucket();

  const imgBaseDir = path.join(process.cwd(), 'EcoGift_Full_Images');
  if (!fs.existsSync(imgBaseDir)) {
    console.error('EcoGift_Full_Images directory not found!');
    return;
  }

  const skuFolders = fs.readdirSync(imgBaseDir).filter(f => {
    const full = path.join(imgBaseDir, f);
    return fs.statSync(full).isDirectory();
  });

  const uploadQueue = [];

  for (const folder of skuFolders) {
    const folderPath = path.join(imgBaseDir, folder);
    const files = fs.readdirSync(folderPath).filter(f => f.match(/\.(webp|jpg|jpeg|png|svg)$/i));
    for (const file of files) {
      uploadQueue.push({
        folder: folder.toLowerCase(),
        filename: file,
        fullPath: path.join(folderPath, file),
        storagePath: `${folder.toLowerCase()}/${file}`
      });
    }
  }

  console.log(`Found ${uploadQueue.length} images across ${skuFolders.length} product SKU folders to upload.`);

  const CONCURRENCY = 3;
  let completed = 0;
  let failed = 0;
  const startTime = Date.now();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function uploadItem(item) {
    const fileBuffer = fs.readFileSync(item.fullPath);
    const ext = path.extname(item.filename).toLowerCase();
    let mimeType = 'image/webp';
    if (ext === '.png') mimeType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
    else if (ext === '.svg') mimeType = 'image/svg+xml';

    let attempts = 0;
    const maxAttempts = 4;

    while (attempts < maxAttempts) {
      attempts++;
      try {
        const { error } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(item.storagePath, fileBuffer, {
            contentType: mimeType,
            upsert: true,
          });

        if (!error) {
          completed++;
          return true;
        }

        const msg = error.message || '';
        if (
          msg.includes('Too many connections') ||
          msg.includes('rate limit') ||
          msg.includes('fetch failed') ||
          msg.includes('503') ||
          msg.includes('504')
        ) {
          // Exponential backoff when Supabase database pool is crowded
          const waitTime = attempts * 1200 + Math.floor(Math.random() * 400);
          await sleep(waitTime);
          continue;
        }

        console.error(`Failed ${item.storagePath}:`, msg);
        failed++;
        return false;
      } catch (err) {
        if (attempts < maxAttempts) {
          await sleep(attempts * 1200);
          continue;
        }
        console.error(`Exception on ${item.storagePath}:`, err.message);
        failed++;
        return false;
      }
    }

    console.error(`Gave up on ${item.storagePath} after ${maxAttempts} attempts.`);
    failed++;
    return false;
  }

  async function worker(items) {
    for (const item of items) {
      await uploadItem(item);
      await sleep(35); // small throttle to prevent connection spikes

      if ((completed + failed) % 50 === 0 || completed + failed === uploadQueue.length) {
        const percent = (((completed + failed) / uploadQueue.length) * 100).toFixed(1);
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`Progress: ${completed + failed}/${uploadQueue.length} (${percent}%) - Uploaded: ${completed}, Failed: ${failed} [${elapsed}s]`);
      }
    }
  }

  // Partition queue into chunks for concurrency
  const chunks = Array.from({ length: CONCURRENCY }, () => []);
  uploadQueue.forEach((item, idx) => {
    chunks[idx % CONCURRENCY].push(item);
  });

  await Promise.all(chunks.map(chunk => worker(chunk)));

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n========================================`);
  console.log(`Upload Complete in ${totalTime}s`);
  console.log(`Total Uploaded: ${completed}`);
  console.log(`Total Failed: ${failed}`);
  console.log(`========================================\n`);
}

uploadAllImages().catch(console.error);
