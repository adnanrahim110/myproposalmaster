"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const defaultFaqs = [
  {
    q: "How long does it take to build a complete plan?",
    a: "Most engagements run 4–6 weeks from kickoff to final delivery. We include structured checkpoints for feedback and can accelerate timelines for investor or grant deadlines.",
  },
  {
    q: "How is pricing structured?",
    a: "We scope based on complexity, supporting research, and deliverables required. Fixed-fee proposals outline milestones, review rounds, and any optional add-ons before we begin.",
  },
  {
    q: "Do you collaborate with our internal team?",
    a: "Absolutely. We facilitate discovery workshops, align with internal SMEs, and co-create messaging to ensure the final plan reflects your voice and strategic priorities.",
  },
  {
    q: "What happens after we receive the plan?",
    a: "Your team receives editable source files, investor-ready decks, and implementation guidance. We also offer support for investor Q&A, revisions, and board presentations.",
  },
];

const ServiceFAQSection = ({ service }) => {
  const faqs = service.faqs || defaultFaqs;
  const faqsPart2 = service.faqPart2 || null;

  const points = faqsPart2.points || [
    "Dedicated strategist and researcher on every engagement.",
    "Investor and grant-maker ready deliverables, aligned to your brand.",
    "Post-delivery coaching for pitches, board sessions, or grant reviews.",
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/15 to-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,97,55,0.1),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_65%)]" />

      <div className="container relative">
        <SectionHeader
          subtitle="Answers At A Glance"
          subtitleIcon={<HelpCircle className="w-4 h-4" />}
          title={`Frequently Asked Questions`}
          highlightedText={service?.title}
          description="Explore what collaboration with My Proposal Master looks like—from timeline and pricing to how we partner with your internal stakeholders."
          className="mb-12"
          descriptionClassName="text-base md:text-lg text-slate-600 max-w-3xl"
          maxWidth="max-w-3xl"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-primary-100/60 bg-white/90 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-slate-900 xl:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-primary-200/50 bg-primary-50/70 text-primary-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <div className="border-t border-primary-100/40 px-6 py-5 text-sm text-slate-600 xl:text-lg">
                          {faq.a}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="flex flex-col justify-between gap-6 rounded-3xl border border-primary-100/60 bg-white/70 p-8 shadow-[0_32px_70px_-50px_rgba(15,23,42,0.4)] backdrop-blur"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
          >
            <div className="space-y-2">
              <div className="flex justify-start w-fit items-center gap-3 rounded-2xl border border-primary-100 bg-primary-50/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
                <Sparkles className="h-4 w-4" />
                Why clients trust us
              </div>
              <h3 className="text-2xl">
                {faqsPart2.title || "Why clients trust us"}
              </h3>
              <p className="text-sm xl:text-base text-slate-700">
                {faqsPart2.text ||
                  "We blend grant writing, market intelligence, and financial modeling under one roof. That means your stakeholders receive a cohesive, persuasive plan without juggling agencies or contractors."}
              </p>
            </div>
            <ul className="space-y-3 text-sm xl:text-base text-slate-700">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="shrink-0 mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  {point.t ? (
                    <span>
                      <strong>{point.t}: </strong>
                      {point.d}
                    </span>
                  ) : (
                    point
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
