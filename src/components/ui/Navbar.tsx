"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", v => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Blur backdrop */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-[var(--color-brand-white)]/90 backdrop-blur-xl border-b border-[var(--color-brand-navy)]/8"
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image
              src="/Logo_darktext.png"
              alt="LeadScorpio"
              width={220}
              height={80}
              className="h-18 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-brand-navy)]/70 hover:text-[var(--color-brand-navy)] transition-colors copper-line"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[var(--color-brand-white)] bg-[var(--color-brand-copper)] rounded-full overflow-hidden group transition-all duration-500 hover:bg-[var(--color-brand-copper-dark)] hover:shadow-[0_8px_30px_rgba(198,93,46,0.35)]"
            >
              <span className="relative z-10">Book a Strategy Call</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--color-brand-navy)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -10, pointerEvents: mobileOpen ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 z-40 bg-[var(--color-brand-white)] border-b border-[var(--color-brand-navy)]/10 px-6 py-6 flex flex-col gap-4 md:hidden"
      >
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-base font-medium text-[var(--color-brand-navy)] py-1 border-b border-[var(--color-brand-navy)]/5"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-2 text-center py-3 font-semibold text-[var(--color-brand-white)] bg-[var(--color-brand-copper)] rounded-full text-sm"
        >
          Book a Strategy Call
        </a>
      </motion.div>
    </>
  );
}