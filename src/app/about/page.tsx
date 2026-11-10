'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EnquiryModal from '../../components/EnquiryModal';
import { 
  Leaf, 
  Users, 
  PenTool, 
  Heart, 
  ChevronDown, 
  Sparkles,
  Globe2,
  Compass,
  Lightbulb,
  Eye,
  Target,
  Quote
} from 'lucide-react';

const values = [
  {
    icon: PenTool,
    title: 'Personalized',
    text: 'Laser engraving, brass insignia plaques and plantable seed-paper cards crafted around your brand identity.',
  },
  {
    icon: Leaf,
    title: 'Radically Sustainable',
    text: 'Cork, seed paper, reclaimed timber, bamboo and preserved botanicals engineered to reduce carbon and eliminate plastic.',
  },
  {
    icon: Users,
    title: 'Artisan Co-ops',
    text: 'Direct livelihood and dignified wages across certified craft clusters in Saharanpur, Rajasthan, Nilgiris & Assam.',
  },
  {
    icon: Heart,
    title: 'Heirloom Emotion',
    text: 'Objects sculpted to live proudly on executive desks for years, continually telling your story.',
  },
];

const journey = [
  { 
    year: '2020', 
    title: 'The Seed is Planted', 
    text: 'Virsaa begins in a modest wood atelier with one core premise: corporate gifting should be kinder to our planet.' 
  },
  { 
    year: '2022', 
    title: 'Pan-India Artisan Network', 
    text: 'Established direct trade partnerships with master woodturners, cork harvesters and brass metalworkers.' 
  },
  { 
    year: '2024', 
    title: 'Zero-Plastic Packaging Line', 
    text: 'Introduced 100% plantable seed-paper gift packaging — transforming every box into wildflowers.' 
  },
  { 
    year: '2026', 
    title: 'Next-Gen Conscious Gifting', 
    text: 'Over 1.2 lakh curated hampers delivered to discerning brands, tech innovators, and design-led studios.' 
  },
];

const steps = [
  {
    step: '01',
    title: 'Select & Customize',
    desc: 'Pick curated keepsakes and share your branding requirements for custom digital 3D renders.',
  },
  {
    step: '02',
    title: 'Handcrafted Sample',
    desc: 'Approve physical prototypes with laser etching, brass plaques, and plantable seed-paper inserts.',
  },
  {
    step: '03',
    title: 'Pan-India Delivery',
    desc: 'Safe, premium plastic-free boxed dispatch straight to client suites and executive teams.',
  },
];

const faqs = [
  {
    q: 'What is the typical minimum order quantity (MOQ)?',
    a: 'Most bespoke collections start at 20–50 units. We offer tiered commercial discounts for corporate campaigns of 100+ units.',
  },
  {
    q: 'How are company logos and branding integrated?',
    a: 'We offer precision laser etching, brushed brass plaques, debossed cork inlays, and plantable seed-paper story cards. A complimentary 3D digital proof is provided prior to production.',
  },
  {
    q: 'What are your standard turnaround times?',
    a: 'Ready-to-ship curations dispatch within 3–5 business days. Custom crafted hampers with bespoke branding typically take 7–14 days with pan-India secure logistics.',
  },
  {
    q: 'What sustainable materials do you specialize in?',
    a: 'We strictly avoid single-use plastics and low-density foam. Our collections utilize sustainably harvested tree bark cork, reclaimed timber, bamboo, natural coir, and zero-maintenance preserved moss.',
  },
  {
    q: 'Do you manage complete hamper packaging and direct dispatch?',
    a: 'Yes. We manage the end-to-end experience: custom kraft presentation boxes, botanical wax seals, individualized note cards, and multi-address door-to-door delivery.',
  },
];

export default function AboutPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col selection:bg-[#C88B56]/30 selection:text-[#12211B] relative">
      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow pt-32 sm:pt-40">
        {/* ===================================================================== */}
        {/* 1. HERO SECTION */}
        {/* ===================================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F332B]/10 border border-[#1F332B]/20 text-[#1F332B] text-xs uppercase tracking-widest font-semibold font-sans"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C88B56]" />
                <span>The Virsaa Story</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1F332B] leading-[1.1]"
              >
                Gifting with Purpose. <br />
                <span className="italic text-gold-gradient font-normal">Rooted in Heritage.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-stone-600 text-base sm:text-lg leading-relaxed font-sans max-w-xl"
              >
                We bring together authentic Indian craftsmanship, renewable botanicals, and conscious design to create sustainable corporate keepsakes that tell enduring stories.
              </motion.p>
            </div>

            {/* Right: Dual Layered Framed Artwork */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative">
              {/* Frame 1 */}
              <div className="frame-luxury-gold relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl transform translate-y-6 animate-float-slow">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E4B58A]/30">
                  <Image
                    src="/material/image copy 5.png"
                    alt="Reclaimed Wood Handcrafting"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12211B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#E4B58A] font-bold">Natural Timber</span>
                    <p className="text-xs font-serif-luxury">Reclaimed & Aged Wood</p>
                  </div>
                </div>
              </div>

              {/* Frame 2 */}
              <div className="frame-gallery relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl transform -translate-y-4 animate-float-reverse">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#C88B56]/30">
                  <Image
                    src="/material/image copy 6.png"
                    alt="Indian Heritage Craftsmanship"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#E4B58A] font-bold">Artisan Hands</span>
                    <p className="text-xs font-serif-luxury">Handmade in Rajasthan</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 2. A NOTE FROM THE FOUNDER — HANSLEEN KAUR */}
        {/* ===================================================================== */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-[#12211B] border border-[#C88B56]/40 shadow-2xl overflow-hidden relative text-white">
            {/* Ambient subtle glow background */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C88B56]/15 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2E4B3F]/35 rounded-full blur-[110px] pointer-events-none" />

            {/* Gold hairline accent along the top */}
            <div
              aria-hidden
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-2/3 rounded-b-full bg-gradient-to-r from-transparent via-[#C88B56] to-transparent"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-12 lg:p-16 relative z-10">
              
              {/* Left Column: Founder Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[#E4B58A]/35 shadow-2xl group">
                  <Image
                    src="/founder.png"
                    alt="Hansleen Kaur — Founder, Virsaa"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12211B]/95 via-[#12211B]/15 to-transparent" />
                  
                  {/* Name Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#12211B]/85 backdrop-blur-md border border-[#E4B58A]/30 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-white">
                          Hansleen Kaur
                        </h3>
                        <p className="text-[11px] uppercase tracking-wider text-[#E4B58A] font-bold mt-0.5 font-sans">
                          Founder, Virsaa
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#C88B56]/20 border border-[#C88B56]/40 flex items-center justify-center text-[#E4B58A]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder's Note Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C88B56]/20 border border-[#C88B56]/40 text-[#E4B58A] text-xs uppercase tracking-widest font-bold font-sans">
                  <Quote className="w-3.5 h-3.5" />
                  <span>A Note from the Founder</span>
                </div>

                <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-snug">
                  &ldquo;I believe that every gift tells a story, and every story has the power to create an impact.&rdquo;
                </h2>

                <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                  <p>
                    Virsaa began with a simple thought &mdash; to make gifting more meaningful, sustainable and rooted in our heritage. What started as an idea has grown into a journey of creativity, purpose and passion.
                  </p>
                  <p>
                    Through Virsaa, I aspire to celebrate Indian craftsmanship, empower local artisans and encourage businesses to choose gifts that go beyond material value.
                  </p>
                  <p className="text-white font-normal italic">
                    For me, success is not just about what we create, but the difference we leave behind.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-serif-luxury text-lg text-[#E4B58A] italic">
                      Let&apos;s make every gift count.
                    </p>
                    <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mt-1 font-sans">
                      Hansleen Kaur &mdash; Founder, Virsaa
                    </p>
                  </div>

                  <Link
                    href="/catalogue"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C88B56] to-[#A86F3E] text-white text-xs uppercase tracking-wider font-bold font-sans border border-[#E4B58A]/40 shadow-sm hover:brightness-105 transition-all self-start sm:self-auto"
                  >
                    <span>Explore Curations</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 3. OUR INSPIRATION, VISION & MISSION */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-24 bg-[#FAF8F5] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C88B56] mb-2 font-sans">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Heart of Virsaa</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F332B] tracking-tight">
                Inspiration, Vision & Mission
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-3 font-sans leading-relaxed">
                Bringing India&apos;s cultural heritage and contemporary sustainability together in every keepsake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Card 1: Our Inspiration */}
              <div className="p-8 rounded-3xl bg-white border border-[#E8DFC8] shadow-xs hover:shadow-xl hover:border-[#C88B56]/50 transition-all duration-300 flex flex-col group relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#1F332B]/10 text-[#1F332B] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#C88B56] group-hover:text-white transition-all shadow-xs">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="inline-block text-[11px] uppercase tracking-widest font-bold text-[#C88B56] mb-2 font-sans">
                  The Genesis
                </div>
                <h3 className="font-serif-luxury text-2xl font-normal text-[#1F332B] mb-4">
                  Our Inspiration
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans flex-grow">
                  Inspired by India&apos;s rich cultural heritage, the beauty of handmade craftsmanship and the belief that small choices can create a lasting impact. Virsaa was born from a vision to bring tradition and sustainability together in a contemporary way.
                </p>
              </div>

              {/* Card 2: Our Vision (Luxury Forest Green Focal Card) */}
              <div className="p-8 rounded-3xl bg-[#1F332B] text-white border border-[#C88B56]/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden">
                {/* Subtle card glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#C88B56]/20 rounded-full blur-[60px] pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#E4B58A] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#C88B56] group-hover:text-white transition-all shadow-xs">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="inline-block text-[11px] uppercase tracking-widest font-bold text-[#E4B58A] mb-2 font-sans">
                  Our North Star
                </div>
                <h3 className="font-serif-luxury text-2xl font-normal text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed font-sans flex-grow font-light">
                  To redefine gifting through sustainability, creativity and Indian heritage, creating a future where every gift carries meaning, purpose and a positive impact.
                </p>
              </div>

              {/* Card 3: Our Mission */}
              <div className="p-8 rounded-3xl bg-white border border-[#E8DFC8] shadow-xs hover:shadow-xl hover:border-[#C88B56]/50 transition-all duration-300 flex flex-col group relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#1F332B]/10 text-[#1F332B] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#C88B56] group-hover:text-white transition-all shadow-xs">
                  <Target className="w-6 h-6" />
                </div>
                <div className="inline-block text-[11px] uppercase tracking-widest font-bold text-[#C88B56] mb-2 font-sans">
                  The Commitment
                </div>
                <h3 className="font-serif-luxury text-2xl font-normal text-[#1F332B] mb-4">
                  Our Mission
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans flex-grow">
                  To transform traditional craftsmanship into meaningful, sustainable gifting experiences while empowering local artisans, supporting conscious choices and bringing innovation into the art of gifting.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 4. OUR STORY & TIMELINE */}
        {/* ===================================================================== */}
        <section className="py-20 sm:py-24 bg-moving-gradient-light relative overflow-hidden border-t border-[#E8DFC8]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Framed Dual Picture Composition */}
              <div className="lg:col-span-5 relative pb-8 pr-6">
                {/* Main Large Frame */}
                <div className="frame-luxury-gold relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E4B58A]/30">
                    <Image
                      src="/image.png"
                      alt="Sustainable packaging at Virsaa"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12211B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest text-[#E4B58A] font-bold">Atelier Standard</span>
                      <h4 className="text-xs sm:text-sm font-serif-luxury mt-0.5">Direct fair livelihood to 25+ certified workshops.</h4>
                    </div>
                  </div>
                </div>

                {/* Restored Overlapping Corner Image */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] frame-gallery p-1.5 animate-float-slow">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=400&q=80"
                      alt="Artisan hands at work"
                      fill
                      sizes="180px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Journey Steps */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C88B56]">
                  <Globe2 className="w-4 h-4" />
                  <span>The Evolution</span>
                </div>

                <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F332B] tracking-tight">
                  From a Wood Atelier to a Movement
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                  We started with a single conviction: corporate milestones deserve gifts made with integrity. Today, we bridge timeless heritage with modern workplace aesthetics.
                </p>

                <div className="space-y-3.5 pt-2">
                  {journey.map((step) => (
                    <div 
                      key={step.year} 
                      className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#E8DFC8] hover:border-[#C88B56]/50 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
                    >
                      <div className="px-3 py-1.5 rounded-xl bg-[#1F332B]/5 text-[#C88B56] font-serif-luxury text-sm font-bold shrink-0">
                        {step.year}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1F332B] font-sans">{step.title}</h4>
                        <p className="text-xs text-stone-500 font-sans mt-0.5 leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 5. GUIDING PRINCIPLES */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-24 bg-moving-gradient-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#1F332B] border border-[#C88B56]/30 p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden text-white">
              {/* Ambient subtle glow */}
              <div className="absolute -top-24 left-1/3 w-80 h-80 bg-[#C88B56]/15 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-[#2D4A3E]/40 rounded-full blur-[90px] pointer-events-none" />

              <div className="relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#E4B58A] mb-2 font-sans">
                    <Leaf className="w-4 h-4" />
                    <span>Our Guiding Principles</span>
                  </div>
                  <h2 className="text-gold-gradient font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">
                    Purpose in Every Detail
                  </h2>
                  <p className="text-stone-300 mt-3 text-sm sm:text-base font-sans leading-relaxed">
                    Four commitments guide every bespoke creation we craft and deliver.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {values.map((v) => {
                    const Icon = v.icon;
                    return (
                      <div
                        key={v.title}
                        className="group p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#C88B56]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#C88B56] to-[#E4B58A] text-[#12211B] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif-luxury text-xl font-normal text-white mb-2">
                          {v.title}
                        </h3>
                        <p className="text-[13px] text-stone-300 leading-relaxed font-sans">
                          {v.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 6. HOW GIFTING WITH VIRSAA WORKS */}
        {/* ===================================================================== */}
        <section className="py-24 bg-[#FAF8F5] relative border-t border-[#E8DFC8]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C88B56] mb-3 font-sans">
                <Compass className="w-4 h-4" />
                <span>Effortless Execution</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F332B]">
                How Gifting with Virsaa Works
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-3 font-sans">
                From initial curation to executive unboxing in 3 seamless steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((item, idx) => (
                <div 
                  key={item.step}
                  className="relative p-8 rounded-3xl bg-white border border-[#E8DFC8] shadow-xs hover:shadow-xl hover:border-[#C88B56]/50 transition-all duration-300 flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F332B] text-[#E4B58A] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                      {item.step}
                    </div>
                    <span className="text-xs font-bold text-[#C88B56] uppercase tracking-wider font-sans">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-medium text-[#1F332B] mb-2 group-hover:text-[#C88B56] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 7. FAQ ACCORDION */}
        {/* ===================================================================== */}
        <section className="bg-moving-gradient-subtle py-24 border-t border-[#E8DFC8]/50 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-[0.14] pointer-events-none"
            style={{ backgroundImage: "url('/backgrounds/atelier-botanical.png')" }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C88B56] mb-2 font-sans">
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#1F332B]">
                Everything You Need to Know
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const open = openFaq === idx;
                return (
                  <div key={faq.q} className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden shadow-2xs">
                    <button
                      onClick={() => setOpenFaq(open ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4.5 cursor-pointer"
                    >
                      <span className="text-sm font-bold text-[#1F332B] font-sans">{faq.q}</span>
                      <span className={`shrink-0 w-7 h-7 rounded-full bg-[#1F332B]/[0.06] flex items-center justify-center text-[#1F332B] transition-transform duration-300 ${open ? 'rotate-180 bg-[#C88B56] text-white' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#F0EAE1]">
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 8. CLOSING CALL TO ACTION */}
        {/* ===================================================================== */}
        <section className="bg-[#12211B] py-20 text-white relative overflow-hidden rounded-tl-[2.5rem] rounded-tr-[2.5rem]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="p-8 sm:p-14 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-[#E4B58A]/30 shadow-xl">
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal tracking-tight mb-4">
                Let&apos;s Create Gifts Worth Remembering
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-sans font-light">
                Tell us about your recipients, timeline and aesthetic vision. We&apos;ll design custom 3D renders tailored to your brand.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/catalogue"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C88B56] to-[#A86F3E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-sans border border-[#E4B58A]/40 shadow-sm hover:brightness-105 active:scale-98 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Catalogue</span>
                </Link>
                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-sans border border-white/25 active:scale-98 transition-all cursor-pointer"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer flat />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}