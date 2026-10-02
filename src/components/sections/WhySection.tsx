"use client";

import { motion } from "framer-motion";
import { Monitor, Building2, Target, Briefcase, CheckCircle2, BarChart } from "lucide-react";

const industries = [
  { name: "B2B SaaS", icon: Monitor },
  { name: "Agencies", icon: Building2 },
  { name: "IT & Technology", icon: Target },
  { name: "Consulting", icon: Briefcase },
  { name: "Professional Services", icon: CheckCircle2 },
  { name: "B2B Services", icon: BarChart },
];

const doubledIndustries = [...industries, ...industries, ...industries];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex gap-4 shrink-0 ${reverse ? "animate-[marquee-left_25s_linear_infinite_reverse]" : "animate-marquee-left"}`}
      >
        {doubledIndustries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white border border-[var(--color-brand-navy)]/8 rounded-xl shrink-0 hover:border-[var(--color-brand-copper)]/40 hover:shadow-sm transition-all duration-300">
              <Icon size={16} className="text-[var(--color-brand-copper)] shrink-0" />
              <span className="text-sm font-semibold text-[var(--color-brand-navy)] whitespace-nowrap">{ind.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const whyPoints = [
  { title: "ICP-first targeting", description: "We only reach out to companies and people that genuinely fit your ideal customer profile." },
  { title: "Multi-channel outbound", description: "LinkedIn, cold email, and cold calling — coordinated and personalised." },
  { title: "Personalized messaging", description: "No generic templates. Every message is crafted for the specific prospect and context." },
  { title: "Transparent reporting", description: "Clear metrics on activity, replies, and booked meetings — shared regularly." },
];

export default function WhySection() {
  return (
    <>
      <section className="py-28 md:py-36 bg-[var(--color-brand-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-divider" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[var(--color-brand-navy)] leading-[1.02] mb-6">
                Not more leads.<br />
                <span className="gradient-copper">Better</span><br />
                opportunities.
              </h2>
              <p className="text-[var(--color-brand-navy)]/60 text-xl mb-10 leading-relaxed">
                Every tactic we use is designed to create conversations with prospects that are genuinely likely to become customers.
              </p>
              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-brand-navy)] text-[var(--color-brand-white)] font-semibold text-sm hover:bg-[var(--color-brand-copper)] transition-all duration-500 group shadow-lg">
                Start building your pipeline
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>

            <div className="flex flex-col gap-6">
              {whyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-5 group"
                >
                  <div className="mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-copper)] mt-1.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--color-brand-navy)] mb-1 group-hover:text-[var(--color-brand-copper)] transition-colors duration-300">{point.title}</h4>
                    <p className="text-[var(--color-brand-navy)]/60 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-brand-navy)]/3 border-y border-[var(--color-brand-navy)]/6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)] mb-3">Who we work with</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[var(--color-brand-navy)]">
              Built for B2B companies that sell to businesses
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
      </section>
    </>
  );
}
