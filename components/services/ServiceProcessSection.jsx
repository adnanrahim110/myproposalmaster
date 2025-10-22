"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import { useMemo } from "react";

const defaultSteps = [
  {
    title: "Initial Consultation",
    description:
      "Schedule your kickoff call to align on goals, audiences, and success criteria.",
  },
  {
    title: "Information Gathering",
    description:
      "Capture business story, target markets, resources, and regulatory requirements.",
  },
  {
    title: "Proposal & Agreement",
    description:
      "Outline scope, deliverables, timelines, and investment. Sign to begin.",
  },
  {
    title: "Research & Analysis",
    description:
      "Dig into industry trends, benchmarks, and competitive dynamics tailored to you.",
  },
  {
    title: "Market Assessment",
    description:
      "Synthesize data to surface opportunities, risks, and positioning insights.",
  },
  {
    title: "Plan Development",
    description:
      "Translate insights into strategy, financial models, and implementation roadmap.",
  },
  {
    title: "Review & Revisions",
    description:
      "Incorporate stakeholder feedback and refine narratives until it’s pitch-ready.",
  },
  {
    title: "Delivery & Support",
    description:
      "Package final assets (digital/print) and stay on call for investor or board prep.",
  },
];

const ServiceProcessSection = ({ service }) => {
  const steps = useMemo(() => {
    if (service?.process?.length) {
      return service.process.map((step, index) => ({
        title:
          (typeof step === "string" ? step : step?.title) ||
          `Step ${index + 1}`,
        description:
          (typeof step === "string" ? "" : step?.description) ||
          defaultSteps[index]?.description ||
          "",
      }));
    }

    return defaultSteps;
  }, [service?.process]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white py-24">
      <div className="container relative">
        <SectionHeader
          subtitle="How We Partner"
          subtitleIcon={<ClipboardList className="w-4 h-4" />}
          title={`How Our ${service?.title || "Service"} Process Works`}
          highlightedText={service?.title}
          description="A transparent, collaborative workflow that keeps your stakeholders informed at every milestone."
          className="mb-14"
          descriptionClassName="text-base md:text-lg text-slate-600"
          maxWidth="max-w-3xl"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={`${step.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group rounded-3xl border border-primary-100/60 bg-white/80 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-primary-200 hover:shadow-[0_38px_20px_-40px_rgba(15,23,42,0.55)]"
            >
              <div className="flex items-center justify-between text-sm font-semibold text-primary-500">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-200 to-primary-500 text-white shadow-inner">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  {index < 4 ? "Planning" : index < 7 ? "Execution" : "Launch"}
                </span>
              </div>
              <hr className="my-4 border-primary-100/70" />
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600/90">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
