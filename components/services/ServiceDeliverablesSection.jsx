"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import {
  BarChart3,
  Building,
  Calculator,
  FileText,
  LineChart,
  ListChecks,
  Megaphone,
  PieChart,
  ShieldCheck,
  Target,
  Users2,
  Wallet,
} from "lucide-react";
import { useMemo } from "react";

const defaultDeliverables = [
  { title: "Executive Summary", icon: FileText },
  { title: "Marketing Strategy", icon: Megaphone },
  { title: "Competitive Advantages", icon: ShieldCheck },
  { title: "Management & Personnel", icon: Users2 },
  { title: "Investment Analysis", icon: LineChart },
  { title: "Product & Service Description", icon: ListChecks },
  { title: "Company Overview", icon: Building },
  { title: "Use of Funds", icon: Wallet },
  { title: "SWOT Analysis", icon: PieChart },
  { title: "Barriers to Entry", icon: Target },
  { title: "Branding & Marketing", icon: BarChart3 },
  { title: "Pro-Forma Financials", icon: Calculator },
];

const ServiceDeliverablesSection = ({ service }) => {
  const deliverables = useMemo(() => {
    if (service?.deliverables?.length) {
      return service.deliverables.map((item) => {
        const rawTitle = typeof item === "string" ? item : item?.title;
        const title = rawTitle?.trim() || "Deliverable";
        const match = defaultDeliverables.find(
          (d) => d.title.toLowerCase() === title.toLowerCase()
        );
        return {
          title,
          icon: match?.icon,
        };
      });
    }

    return defaultDeliverables;
  }, [service?.deliverables]);

  return (
    <section className="relative bg-gradient-to-b from-white via-primary-50/20 to-white py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/70 to-transparent" />
      <div className="container relative">
        <SectionHeader
          subtitle="What We Deliver"
          subtitleIcon={<ListChecks className="w-4 h-4" />}
          title={`Our ${service?.title || "Service"} Plan Includes`}
          highlightedText={service?.title}
          description="Tailored sections crafted by strategists to give stakeholders a complete, trusted picture of your opportunity. Every document blends storytelling, data, and design that reflect your brand."
          className="mb-14"
          descriptionClassName="text-base md:text-lg text-slate-600 max-w-3xl"
          maxWidth="max-w-3xl"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {deliverables.map((item, index) => {
            const IconComponent = item.icon || FileText;

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
                  {item.title}
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
