"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  Clock,
  FileText,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const bullets = [
  "Custom business plan writing",
  "Brand development (logo, identity, messaging)",
  "Professional website design",
  "Business formation (LLC, S‑Corp, etc.)",
  "License and permit research tailored to your location",
  "Everything in one place — launch faster and smarter",
];

const highlights = [
  "A TRACK RECORD THAT SPEAKS FOR ITSELF",
  "INVESTOR‑READY. VISA‑APPROVED. BANK‑TESTED.",
  "MARKET RESEARCH & LOCAL COMPLIANCE — BACKED BY TOP‑TIER DATA",
  "FAST TURNAROUND. REAL HUMAN SUPPORT",
  "FROM STARTUP TO SCALE — WE’VE DONE IT ALL",
];

const WhyChooseWise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
    amount: 0.2,
  });

  const pillars = [
    { icon: Award, label: "MBA Experts" },
    { icon: TrendingUp, label: "$2Bn+ Raised" },
    { icon: Users, label: "15k+ Clients" },
  ];

  const assurances = [
    { icon: FileText, text: "Investor‑ready documentation" },
    { icon: Globe, text: "US + global compliance research" },
    { icon: Clock, text: "On‑time delivery commitment" },
  ];

  const outcomes = [
    "Funding‑focused strategy and financials",
    "Clear market positioning and GTM plan",
    "Actionable milestones with measurable KPIs",
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-28 overflow-hidden bg-white"
    >
      <div className="container relative z-10">
        <SectionHeader
          subtitle="THE BUSINESS PLAN AUTHORITY IN THE INDUSTRY"
          title="Why Choose My Proposal Masters"
          titleLevel="h2"
          highlightedText="My Proposal Masters"
          description="Starting a business takes courage. Turning an idea into something fundable, scalable, and sustainable takes more than a dream — it takes strategy, structure, and a partner who knows the path forward."
          subtitleIcon="★"
          className="mb-14"
          descriptionClassName="text-gray-600"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-10"
        >
          <p>
            At{" "}
            <span className="font-semibold text-gray-900">
              My Proposal Masters
            </span>
            , we turn ideas into fundable, operationally sound businesses with
            clear, investor‑ready plans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                All‑in‑One Turnkey Startup Packages
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                asperiores, doloremque doloribus odio nemo nihil maiores, soluta
                perspiciatis esse quos nostrum voluptate ipsa amet, cumque
                excepturi ad explicabo in perferendis.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="shrink-0">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                    <span className="text-gray-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Assurances
              </h4>
              <ul className="space-y-3">
                {assurances.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-800">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Outcomes
              </h4>
              <ul className="space-y-3">
                {outcomes.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-800">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWise;
