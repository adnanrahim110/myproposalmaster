"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";

const ServiceNarrativeSection = ({ service }) => {
  const sec1 = service?.sec1 || {};
  const box1 = sec1?.box1 || {};
  const box2 = sec1?.box2 || {};
  const box3 = sec1?.box3 || {};

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white py-24">
      <div className="container relative grid gap-10 xl:gap-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="space-y-10">
          <SectionHeader
            subtitle="Strategic Partnership"
            subtitleIcon={<Briefcase className="w-4 h-4" />}
            title={sec1.title}
            highlightedText={service?.title}
            description={sec1.text && sec1.text}
            className="mb-10 text-left lg:text-left"
            descriptionClassName="text-base md:text-lg text-slate-700/90 leading-relaxed"
            maxWidth="max-w-3xl"
          />

          <div className="space-y-2 rounded-3xl border border-primary-100/70 bg-white/80 p-6 backdrop-blur">
            {box1.title && (
              <h3 className="text-3xl text-slate-900">{box1.title}</h3>
            )}
            {box1.text && (
              <p className="text-base md:text-lg leading-relaxed text-slate-700/90">
                {box1.text}
              </p>
            )}
            {box1.points && (
              <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700/90">
                {box1.points.map((point, idx) => (
                  <li key={idx} className="leading-tight">
                    <strong className="text-black">{point.t}:</strong> {point.d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <aside className="relative">
          <div className="sticky top-28 space-y-6">
            <div className="overflow-hidden rounded-3xl border border-primary-100/60 bg-white/80 p-6 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  {box2.title && (
                    <h3 className="text-lg font-semibold text-slate-900">
                      {box2.title}
                    </h3>
                  )}
                  {box2.text && (
                    <p className="text-sm text-slate-500">{box2.text}</p>
                  )}
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                {box2.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 rounded-2xl border border-slate-100/70 bg-white px-4 py-3 shadow-sm"
                  >
                    {point.icon && (
                      <point.icon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-semibold text-slate-900">{point.t}</p>
                      <p className="text-xs xl:text-sm">{point.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <motion.ul
              className="grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {box3.points.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-primary-100 bg-white/90 p-3 transition hover:-translate-y-1 hover:border-primary-200 leading-none xl:leading-tight"
                >
                  <CheckCircle className="max-xl:size-5 inline text-primary mr-1" />
                  <span className="text-[10px] xl:text-sm font-medium text-slate-800">
                    {feature}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ServiceNarrativeSection;
