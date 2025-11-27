"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const defaultHighlights = [
  { label: "Plans Authored", value: "15,000+" },
  { label: "Funding Influenced", value: "$1B+" },
  { label: "Consulting Hours", value: "30,000+" },
];

const DEFAULT_LEADER = {
  name: "Joseph Ferriolo",
  role: "Director, My Proposal Master",
  photo: "/imgs/services/1.webp",
  intro:
    "The architect behind every engagement—making sure strategy, storytelling, and execution land flawlessly.",
  quote:
    "Our team has guided 15,000+ strategic plans and unlocked over $1B in funding for mission-driven organizations.",
  highlights: defaultHighlights,
};

const ServiceLeadershipSpotlight = ({ service }) => {
  const leader = {
    ...DEFAULT_LEADER,
    ...(service?.leader || {}),
  };

  const highlights =
    Array.isArray(leader.highlights) && leader.highlights.length
      ? leader.highlights
      : defaultHighlights;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,97,55,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,#fff,transparent_60%)]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-[#121a2c] via-[#0e1424] to-[#091021] text-white shadow-xl"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-primary-500/25 blur-3xl" />
            <div className="absolute bottom-[-40%] right-[-10%] h-[360px] w-[360px] rounded-full bg-primary-400/15 blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_35%),linear-gradient(300deg,rgba(255,97,55,0.08)_0%,rgba(255,97,55,0)_40%)]" />
          </div>

          <div className="relative flex flex-col gap-10 p-10 lg:flex-row lg:items-stretch lg:gap-14 lg:p-14">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-primary-300" />
                Executive Sponsor Insight
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_32px_80px_-60px_rgba(8,15,31,0.7)] backdrop-blur">
                <Quote className="absolute -top-8 right-6 h-20 w-20 text-white/10" />
                <p className="text-lg leading-relaxed text-slate-200 md:text-xl md:leading-9">
                  {leader.quote}
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300/90 md:text-base">
                <p>{leader.intro}</p>
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.14em] text-slate-400/90">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <ArrowUpRight className="h-4 w-4 text-primary-300" />
                    Vision to Impact
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {service?.title || "Signature Service"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.08] p-8 backdrop-blur-xl lg:max-w-sm">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white/70 shadow-[0_20px_40px_-30px_rgba(8,15,31,0.9)] ring-2 ring-primary-200/50">
                <Image
                  fill
                  src={leader.photo || "/imgs/services/1.webp"}
                  alt={leader.name}
                  className="object-cover"
                />
              </div>

              <div className="text-center space-y-1">
                <p className="text-lg font-semibold text-white">
                  {leader.name}
                </p>
                <p className="text-sm text-slate-300">{leader.role}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {highlights.map((highlight) => (
                  <div
                    key={`${highlight.label}-${highlight.value}`}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center shadow-[0_18px_40px_-36px_rgba(8,15,31,0.8)]"
                  >
                    <p className="text-lg font-semibold text-white">
                      {highlight.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      {highlight.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceLeadershipSpotlight;
