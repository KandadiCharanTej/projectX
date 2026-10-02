"use client";

import { motion } from "framer-motion";
import { BarChart, Briefcase } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    industry: "Enterprise SaaS",
    challenge: "Needed to build a qualified outbound pipeline targeting VP-level buyers in mid-market companies across the US and UK.",
    approach: "ICP definition, LinkedIn outreach with personalised messaging, coordinated cold email sequences, and qualification calls.",
    results: "Coming Soon",
    tags: ["LinkedIn Outreach", "Cold Email", "B2B SaaS"],
    icon: BarChart,
  },
  {
    number: "02",
    industry: "B2B Agency",
    challenge: "Scaling new business development without adding internal headcount, focused on reaching marketing directors in mid-sized companies.",
    approach: "Multi-touch outbound across LinkedIn and email, cold calling for warm prospects, appointment setting with confirmed meetings.",
    results: "Coming Soon",
    tags: ["Multi-channel", "Appointment Setting", "Agency"],
    icon: Briefcase,
  },
];

export default function ProofSection() {
  return (
    <section className="py-28 md:py-36 bg-[var(--color-brand-white)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-divider" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-brand-navy)]">Proof of Work</h2>
          </div>
          <p className="text-[var(--color-brand-navy)]/60 max-w-xs text-sm leading-relaxed">
            Detailed case studies with results will be published as they are completed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => {
            const Icon = cs.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-white border border-[var(--color-brand-navy)]/8 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[var(--color-brand-copper)]/30 transition-all duration-500">
                  <div className="h-1 bg-gradient-to-r from-[var(--color-brand-copper)] to-[var(--color-brand-copper-light)]" />
                  <div className="p-8 pb-0 flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-[var(--color-brand-copper)] uppercase">{cs.number} / Case Study</span>
                      <h3 className="text-2xl font-bold tracking-tight text-[var(--color-brand-navy)] mt-1">{cs.industry}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-copper)]/8 flex items-center justify-center text-[var(--color-brand-copper)] shrink-0">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col gap-6">
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-[var(--color-brand-navy)]/40 mb-2">Challenge</p>
                      <p className="text-sm text-[var(--color-brand-navy)]/70 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-[var(--color-brand-navy)]/40 mb-2">Approach</p>
                      <p className="text-sm text-[var(--color-brand-navy)]/70 leading-relaxed">{cs.approach}</p>
                    </div>
                    <div className="bg-[var(--color-brand-navy)]/3 border border-[var(--color-brand-navy)]/8 rounded-xl p-4">
                      <p className="text-xs font-bold tracking-wider uppercase text-[var(--color-brand-navy)]/40 mb-1">Results</p>
                      <p className="font-bold text-[var(--color-brand-navy)]/50 italic">{cs.results}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 text-xs font-medium text-[var(--color-brand-copper)] border border-[var(--color-brand-copper)]/25 rounded-full bg-[var(--color-brand-copper)]/5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
