"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Search, Target, MessageSquare, CalendarCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Deep business discovery",
    description:
      "We start by fully understanding your business, offer, ideal customer profile, buyer persona, sales process, competition, and growth goals. This foundation determines everything that follows.",
    icon: Search,
    detail: "Business model · ICP definition · Competitor analysis · Goal alignment",
  },
  {
    number: "02",
    title: "Target",
    subtitle: "Precision prospect identification",
    description:
      "Using your ICP, we build highly targeted, verified lists of companies and decision-makers that are genuinely likely to convert. Quality over quantity at every stage.",
    icon: Target,
    detail: "Company targeting · Title filtering · Verified contacts · Intent signals",
  },
  {
    number: "03",
    title: "Reach",
    subtitle: "Multi-channel outbound execution",
    description:
      "We activate LinkedIn outreach, cold email, and cold calling in coordinated sequences. Every touchpoint is personalised and purposeful — never spray-and-pray.",
    icon: MessageSquare,
    detail: "LinkedIn sequences · Cold email · Cold calling · Multi-touch cadence",
  },
  {
    number: "04",
    title: "Qualify & Book",
    subtitle: "Meetings with real potential",
    description:
      "We handle all follow-ups, identify genuine interest, qualify prospects against your criteria, and deliver confirmed meetings with decision-makers ready for your sales conversation.",
    icon: CalendarCheck,
    detail: "Lead qualification · Meeting confirmation · Briefing notes · CRM handoff",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", v => {
      if (v < 0.25) setActiveStep(0);
      else if (v < 0.5) setActiveStep(1);
      else if (v < 0.75) setActiveStep(2);
      else setActiveStep(3);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section id="how-it-works" ref={sectionRef} className="py-28 md:py-40 bg-[var(--color-brand-navy)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #C65D2E 0%, transparent 50%),
                            radial-gradient(circle at 75% 50%, #C65D2E 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mb-16 md:mb-24"
        >
          <div className="h-px w-10 bg-[var(--color-brand-copper)] mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-brand-white)] mb-4">How It Works</h2>
          <p className="text-[var(--color-brand-white)]/50 text-lg">A systematic approach that builds your pipeline with precision.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const isActive = activeStep === i;
              const isPast = activeStep > i;
              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className="w-full flex items-start gap-5 py-6 text-left group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col items-center gap-0 shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black transition-all duration-500 ${
                        isActive
                          ? "bg-[var(--color-brand-copper)] text-white shadow-[0_0_20px_rgba(198,93,46,0.4)]"
                          : isPast
                          ? "bg-[var(--color-brand-copper)]/30 text-[var(--color-brand-copper)]"
                          : "bg-white/5 text-white/40"
                      }`}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-16 mt-1 flex flex-col">
                        <div className="w-full transition-all duration-500" style={{ height: isPast ? "100%" : "20%", background: isPast ? "#C65D2E" : "rgba(255,255,255,0.1)" }} />
                        <div className="w-full" style={{ height: isPast ? "0%" : "80%", background: "rgba(255,255,255,0.05)" }} />
                      </div>
                    )}
                  </div>
                  <div className={`pb-2 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-50 group-hover:opacity-75"}`}>
                    <h3 className="text-lg font-bold text-[var(--color-brand-white)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--color-brand-white)]/50">{step.subtitle}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-8 md:p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-copper)]/15 border border-[var(--color-brand-copper)]/20 flex items-center justify-center mb-8">
                  <Icon size={28} className="text-[var(--color-brand-copper)]" />
                </div>
                <div className="text-7xl font-black text-white/5 leading-none mb-4 select-none">{current.number}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{current.title}</h3>
                <p className="text-[var(--color-brand-copper)] font-medium mb-5">{current.subtitle}</p>
                <p className="text-white/65 leading-relaxed mb-8">{current.description}</p>
                <div className="flex flex-wrap gap-2">
                  {current.detail.split(" · ").map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/8">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-6 justify-end">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`rounded-full transition-all duration-300 ${activeStep === i ? "w-6 h-2 bg-[var(--color-brand-copper)]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
