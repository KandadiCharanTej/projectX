"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Link, Mail, Phone } from "lucide-react";
import dynamic from "next/dynamic";

// All components loaded via dynamic() to prevent Turbopack stale cache issues
const HeroOrb = dynamic(
  () => import("@/components/ui/HeroOrb").then(m => m.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-[var(--color-brand-copper)]/30 animate-pulse" />
      </div>
    ),
  }
);

const CustomCursor   = dynamic(() => import("@/components/ui/CustomCursor").then(m => m.default),       { ssr: false });
const Navbar         = dynamic(() => import("@/components/ui/Navbar").then(m => m.default),              { ssr: false });
const ServicesSection    = dynamic(() => import("@/components/sections/ServicesSection").then(m => m.default),    { ssr: false });
const HowItWorksSection  = dynamic(() => import("@/components/sections/HowItWorksSection").then(m => m.default),  { ssr: false });
const WhySection         = dynamic(() => import("@/components/sections/WhySection").then(m => m.default),         { ssr: false });
const ProofSection       = dynamic(() => import("@/components/sections/ProofSection").then(m => m.default),       { ssr: false });
const AboutSection       = dynamic(() => import("@/components/sections/AboutSection").then(m => m.default),       { ssr: false });
const ContactSection     = dynamic(() => import("@/components/sections/ContactSection").then(m => m.default),     { ssr: false });

// ——————————————————————————————————————————
// HERO SECTION
// ——————————————————————————————————————————
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y          = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity    = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const orbScale   = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // Word-by-word headline reveal
  const line1 = "Turn Your Ideal Customers Into".split(" ");
  const line2 = "Qualified Sales Conversations.".split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.6 + i * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-brand-white)]"
    >
      {/* Fine grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7,21,37,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7,21,37,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial copper glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,93,46,0.06) 0%, transparent 65%)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20 grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center"
      >
        {/* Left — text content */}
        <div className="flex flex-col items-start gap-8">
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--color-brand-navy)]/10 bg-[var(--color-brand-navy)]/4 backdrop-blur-sm"
          >
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-navy)]/80">
              <Link size={12} className="text-[#0A66C2]" /> LinkedIn
            </span>
            <span className="w-px h-3 bg-[var(--color-brand-navy)]/15" />
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-navy)]/80">
              <Mail size={12} className="text-[var(--color-brand-copper)]" /> Cold Email
            </span>
            <span className="w-px h-3 bg-[var(--color-brand-navy)]/15" />
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-navy)]/80">
              <Phone size={12} /> Cold Calling
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] font-black tracking-tighter leading-[1.02] text-[var(--color-brand-navy)]" style={{ perspective: "800px" }}>
            <div className="flex flex-wrap gap-x-3 mb-2">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-3">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  custom={line1.length + i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${i === 0 ? "gradient-copper" : i === 1 ? "gradient-copper" : "text-[var(--color-brand-copper)]"}`}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[var(--color-brand-navy)]/65 max-w-lg leading-relaxed"
          >
            LeadScorpio helps B2B companies build predictable outbound pipelines through 
            targeted LinkedIn outreach, cold email, and cold calling.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--color-brand-copper)] text-white font-semibold text-sm overflow-hidden group hover:bg-[var(--color-brand-copper-dark)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(198,93,46,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Book a Strategy Call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-navy)]/70 hover:text-[var(--color-brand-navy)] group transition-colors"
            >
              View our services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
            </a>
          </motion.div>

          {/* Trust micro signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="flex items-center gap-6 pt-2"
          >
            {["ICP-first targeting", "Multi-channel", "No contracts"].map((t, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--color-brand-navy)]/50 font-medium">
                <CheckCircle2 size={12} className="text-[var(--color-brand-copper)]" />
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D orb */}
        <motion.div
          style={{ scale: orbScale }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square max-w-[520px] mx-auto"
        >
          {/* Outer ring decorations */}
          <div className="absolute inset-0 rounded-full border border-[var(--color-brand-navy)]/6 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-[var(--color-brand-copper)]/10 animate-counter-spin" />

          {/* Pulse rings */}
          <div className="absolute inset-[30%] rounded-full">
            <div className="absolute inset-0 rounded-full border border-[var(--color-brand-copper)]/20 animate-pulse-ring" />
            <div className="absolute inset-0 rounded-full border border-[var(--color-brand-copper)]/15 animate-pulse-ring [animation-delay:1s]" />
          </div>

          {/* 3D Canvas */}
          <div className="absolute inset-0">
            <HeroOrb />
          </div>

          {/* Corner labels */}
          {[
            { label: "LinkedIn", position: "top-8 left-4 md:left-0" },
            { label: "Cold Email", position: "top-8 right-4 md:right-0" },
            { label: "Cold Calling", position: "bottom-8 left-4 md:left-0" },
            { label: "Appointment Setting", position: "bottom-8 right-4 md:right-0" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 + i * 0.1 }}
              className={`absolute ${item.position} px-3 py-1.5 rounded-full bg-white border border-[var(--color-brand-navy)]/8 shadow-sm text-[10px] font-bold text-[var(--color-brand-navy)]/70 whitespace-nowrap`}
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-navy)]/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-brand-navy)]/20 to-transparent" />
      </motion.div>
    </section>
  );
}

// ——————————————————————————————————————————
// PROBLEM SECTION
// ——————————————————————————————————————————
function ProblemSection() {
  const problems = [
    {
      title: "Right Prospects",
      description: "Target the exact companies and decision-makers that match your ICP — not a generic list of 10,000 contacts.",
      number: "01",
    },
    {
      title: "Relevant Outreach",
      description: "Personalized messaging built around your specific market, offer, and buyer persona. Never a template.",
      number: "02",
    },
    {
      title: "Consistent Follow-Up",
      description: "Systematic multi-touch cadences that keep qualified conversations moving toward booked meetings.",
      number: "03",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-brand-navy)] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(250,249,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <div className="h-px w-10 bg-[var(--color-brand-copper)] mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-brand-white)] mb-5">
            Your next customer is already out there.
          </h2>
          <p className="text-[var(--color-brand-white)]/55 text-xl leading-relaxed">
            The challenge isn't finding thousands of contacts. It's identifying the right ones, 
            reaching the right decision-makers, and starting conversations that actually matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-2xl bg-white/4 border border-white/6 hover:border-[var(--color-brand-copper)]/30 hover:bg-white/6 transition-all duration-500 cursor-pointer"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-copper)] uppercase">
                  {p.number}
                </span>
                {/* Copper line that animates on hover */}
                <div className="h-px w-0 group-hover:w-12 bg-[var(--color-brand-copper)] transition-all duration-500 mt-2.5" />
              </div>

              <h3 className="text-xl font-bold text-[var(--color-brand-white)] mb-3 tracking-tight">{p.title}</h3>
              <p className="text-[var(--color-brand-white)]/55 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——————————————————————————————————————————
// MAIN PAGE
// ——————————————————————————————————————————
export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex flex-col overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhySection />
        <ProofSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
