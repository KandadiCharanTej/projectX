"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

const precisionWords = ["Focus.", "Patience.", "Precision.", "Persistence."];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[var(--color-brand-white)]">
      {/* Cinematic statement */}
      <div className="py-32 md:py-48 border-y border-[var(--color-brand-navy)]/6 bg-[var(--color-brand-navy)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)] mb-8"
          >
            Our philosophy
          </motion.p>

          <div className="flex flex-col gap-4 md:gap-6">
            {["Precision", "over", "volume."].map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`font-black tracking-tighter leading-none ${
                  i === 0
                    ? "text-6xl md:text-8xl lg:text-[7rem] gradient-copper"
                    : i === 1
                    ? "text-4xl md:text-6xl lg:text-7xl text-[var(--color-brand-white)]/30"
                    : "text-6xl md:text-8xl lg:text-[7rem] text-[var(--color-brand-white)]"
                }`}
              >
                {word}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-[var(--color-brand-white)]/60 text-xl max-w-2xl mx-auto mt-12 leading-relaxed"
          >
            Effective lead generation isn't about sending more messages. It's about understanding the business,
            identifying the right prospects, and creating conversations that matter.
          </motion.p>
        </div>
      </div>

      {/* Why Scorpio */}
      <div className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-divider" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)] mb-6">Why Scorpio?</p>
              <div className="flex flex-col gap-3">
                {precisionWords.map((word, i) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-brand-copper)]/10 border border-[var(--color-brand-copper)]/30 flex items-center justify-center group-hover:bg-[var(--color-brand-copper)] transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)] group-hover:bg-white transition-colors duration-300" />
                    </div>
                    <span className="text-3xl md:text-4xl font-black tracking-tighter text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-copper)] transition-colors duration-300">
                      {word}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative bg-[var(--color-brand-navy)] rounded-[2rem] p-10 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[var(--color-brand-copper)]/5 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 text-[10rem] font-black text-white/[0.03] select-none leading-none">S</div>
                <Target size={32} className="text-[var(--color-brand-copper)] mb-8 relative z-10" />
                <h3 className="text-2xl font-bold text-[var(--color-brand-white)] mb-5 tracking-tight relative z-10">The Scorpio principle</h3>
                <p className="text-[var(--color-brand-white)]/70 leading-relaxed text-lg relative z-10">
                  Scorpio represents <strong className="text-white font-semibold">focus, patience, precision and persistence</strong> —
                  qualities we bring to every outbound campaign. We don't rush. We don't spam.
                  We identify, engage, and build the right conversations, systematically.
                </p>
                <div className="mt-10 pt-8 border-t border-white/8 relative z-10">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-brand-copper)]/70">
                    LeadScorpio · B2B Lead Generation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
