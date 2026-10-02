"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkIcon, Mail, Phone, Calendar, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "LinkedIn Outreach",
    tagline: "Reach decision-makers where they already are.",
    description:
      "We identify and connect with your exact ICP on LinkedIn. Every connection request, message, and follow-up is personalised — never templated. We manage the conversation until there's genuine interest.",
    features: ["ICP targeting", "Personalised sequences", "Reply management", "Network building"],
    icon: LinkIcon,
    accentColor: "#0A66C2",
    visual: "network",
  },
  {
    id: 2,
    number: "02",
    title: "Cold Email",
    tagline: "Precision cold email that earns a reply.",
    description:
      "We build verified prospect lists, craft multi-touch email sequences with high personalisation, and manage inbox responses. Domain health, deliverability and testing are all handled by us.",
    features: ["Verified lists", "A/B tested sequences", "Deliverability management", "Response handling"],
    icon: Mail,
    accentColor: "#C65D2E",
    visual: "signal",
  },
  {
    id: 3,
    number: "03",
    title: "Cold Calling",
    tagline: "Human conversations that create real opportunities.",
    description:
      "Strategic outbound calling to qualified prospects with custom scripts, gatekeeper navigation, and follow-up cadences designed for your sales cycle.",
    features: ["Custom scripts", "Gatekeeper handling", "CRM logging", "Follow-up cadence"],
    icon: Phone,
    accentColor: "#071525",
    visual: "voice",
  },
  {
    id: 4,
    number: "04",
    title: "Appointment Setting",
    tagline: "Qualified meetings delivered to your calendar.",
    description:
      "We handle the full qualification process — identifying genuine interest, timing fit, and authority. You receive confirmed, qualified meetings with decision-makers ready for your sales conversation.",
    features: ["Lead qualification", "Meeting confirmation", "Briefing notes", "CRM handoff"],
    icon: Calendar,
    accentColor: "#6B4FBB",
    visual: "calendar",
  },
];

function ServiceVisual({ type, color }: { type: string; color: string }) {
  if (type === "network") {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
        {[[100, 80], [40, 40], [160, 40], [30, 120], [170, 120]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={i === 0 ? 18 : 10} fill={i === 0 ? color : `${color}30`} />
            <circle cx={cx} cy={cy} r={i === 0 ? 18 : 10} fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
            {i !== 0 && <line x1={100} y1={80} x2={cx} y2={cy} stroke={color} strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />}
          </g>
        ))}
        <circle cx={100} cy={80} r={28} fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
        <circle cx={100} cy={80} r={40} fill="none" stroke={color} strokeWidth="0.5" opacity="0.15" />
      </svg>
    );
  }
  if (type === "signal") {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
        <rect x={50} y={50} width={100} height={70} rx={6} fill={`${color}15`} stroke={color} strokeWidth="1.5" />
        <polyline points="50,55 100,90 150,55" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <line x1={160} y1={40} x2={185} y2={40} stroke={color} strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
        <line x1={165} y1={50} x2={190} y2={50} stroke={color} strokeWidth="1" opacity="0.25" strokeDasharray="3,3" />
        <line x1={170} y1={60} x2={188} y2={60} stroke={color} strokeWidth="1" opacity="0.15" strokeDasharray="3,3" />
      </svg>
    );
  }
  if (type === "voice") {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
        <circle cx={100} cy={80} r={40} fill={`${color}10`} stroke={color} strokeWidth="1.5" />
        <text x={100} y={87} textAnchor="middle" fontSize="28" fill={color} fontWeight="bold">✆</text>
        {[55, 65, 75].map((r, i) => (
          <circle key={i} cx={100} cy={80} r={r} fill="none" stroke={color} strokeWidth="0.75" opacity={0.3 - i * 0.08} />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      <rect x={45} y={35} width={110} height={95} rx={8} fill={`${color}12`} stroke={color} strokeWidth="1.5" />
      <line x1={45} y1={60} x2={155} y2={60} stroke={color} strokeWidth="1.5" />
      <rect x={70} y={15} width={10} height={28} rx={4} fill={color} />
      <rect x={120} y={15} width={10} height={28} rx={4} fill={color} />
      <polyline points="80,100 95,115 125,85" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-28 md:py-36 bg-[var(--color-brand-white)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mb-16 md:mb-20"
        >
          <div className="section-divider" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-brand-navy)] mb-4">
            Core Services
          </h2>
          <p className="text-[var(--color-brand-navy)]/60 text-lg">
            Multi-channel outbound strategies executed with precision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 md:gap-10">
          <div className="flex lg:flex-col gap-2">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  active === i
                    ? "bg-[var(--color-brand-navy)] text-[var(--color-brand-white)]"
                    : "bg-transparent text-[var(--color-brand-navy)]/70 hover:bg-[var(--color-brand-navy)]/5"
                }`}
              >
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: active === i ? "#C65D2E" : `${s.accentColor}80` }}>
                  {s.number}
                </span>
                <span className="font-semibold text-sm">{s.title}</span>
                {active === i && <ArrowRight size={14} className="ml-auto text-[var(--color-brand-copper)]" />}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-[var(--color-brand-navy)]/8 overflow-hidden shadow-sm"
            >
              <div className="grid md:grid-cols-[1fr_240px] gap-0 h-full">
                <div className="p-8 md:p-10 flex flex-col gap-6">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: current.accentColor }}>
                      {current.number} / 04
                    </span>
                    <h3 className="text-3xl font-bold tracking-tight text-[var(--color-brand-navy)] mb-2">{current.title}</h3>
                    <p className="font-medium text-base" style={{ color: current.accentColor }}>{current.tagline}</p>
                  </div>
                  <p className="text-[var(--color-brand-navy)]/65 leading-relaxed">{current.description}</p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {current.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[var(--color-brand-navy)]/70">
                        <div className="w-1 h-4 rounded-full" style={{ background: current.accentColor }} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--color-brand-navy)]/6">
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-copper)] group">
                      Discuss this service
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div
                  className="hidden md:flex items-center justify-center p-8 border-l border-[var(--color-brand-navy)]/5"
                  style={{ background: `${current.accentColor}06` }}
                >
                  <div className="w-full aspect-square max-w-[180px]">
                    <ServiceVisual type={current.visual} color={current.accentColor} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
