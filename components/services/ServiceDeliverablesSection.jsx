"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import {
  Building2,
  Calculator,
  FileText,
  Megaphone,
  Package,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Wallet,
  ListChecks,
} from "lucide-react";

const iconMap = {
  FileText,
  Megaphone,
  Trophy,
  Users,
  TrendingUp,
  Package,
  Building2,
  Wallet,
  Target,
  Shield,
  Sparkles,
  Calculator,
};

const ServiceDeliverablesSection = ({ service }) => {
  const sec2 = service?.sec2 || {};

  return (
    <section className="relative bg-gradient-to-b from-white via-primary-50/20 to-white py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/70 to-transparent" />
      <div className="container relative">
        <SectionHeader
          subtitle="What We Deliver"
          subtitleIcon={<ListChecks className="w-4 h-4" />}
          title={sec2.title}
          highlightedText={service?.title}
          description="Tailored sections crafted by strategists to give stakeholders a complete, trusted picture of your opportunity. Every document blends storytelling, data, and design that reflect your brand."
          className="mb-14"
          descriptionClassName="text-base md:text-lg text-slate-600 max-w-3xl"
          maxWidth="max-w-3xl"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sec2.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ListChecks;

            return (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative flex flex-col items-center gap-4 rounded-3xl border border-primary-100/60 bg-white/80 p-6 text-center transition-transform hover:-translate-y-2 hover:border-primary-200 backdrop-blur"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-300 to-primary-500 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] ring-4 ring-primary-200/30">
                  <IconComponent className="h-9 w-9" />
                </span>
                <p className="text-sm font-semibold text-slate-800 md:text-base">
                  {item.t}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDeliverablesSection;
