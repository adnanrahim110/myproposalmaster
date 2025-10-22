"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CheckCircle2,
  LineChart,
  Target,
  UsersRound,
} from "lucide-react";
import { useMemo } from "react";

const ServiceNarrativeSection = ({ service }) => {
  const serviceName = service?.title || "Service";
  const serviceLower = service?.title?.toLowerCase() || "service";
  const serviceDescription =
    service?.description ||
    "Partner with experts who transform complex ambitions into confident execution plans.";

  const featureHighlights = useMemo(() => {
    if (!service?.features?.length) {
      return [];
    }

    return service.features.slice(0, 7);
  }, [service?.features]);

  const supportingStats = [
    {
      icon: Award,
      label: "Industry Recognized",
      description: "Trusted specialists embedded in your sector.",
    },
    {
      icon: UsersRound,
      label: "Client-Centric Approach",
      description: "Tailored engagements designed around your goals.",
    },
    {
      icon: LineChart,
      label: "Measurable Outcomes",
      description: "Growth frameworks engineered for lasting traction.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white py-24">
      <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="space-y-10">
          <SectionHeader
            subtitle="Strategic Partnership"
            subtitleIcon={<Briefcase className="w-4 h-4" />}
            title={`Professional ${serviceName} at Your Service`}
            highlightedText={service?.title}
            description={`Since 2010, My Proposal Master has helped organizations of every size translate bold visions into boardroom-ready strategies. Our dedicated ${serviceLower} team combines cross-industry expertise with proven frameworks to deliver precise recommendations and implementation roadmaps that resonate with stakeholders and funders alike.`}
            className="mb-10 text-left lg:text-left"
            descriptionClassName="text-base md:text-lg text-slate-700/90 leading-relaxed"
            maxWidth="max-w-3xl"
          />

          <div className="space-y-5 rounded-3xl border border-primary-100/70 bg-white/80 p-6 backdrop-blur">
            <p className="text-base md:text-lg leading-relaxed text-slate-700/90">
              {serviceDescription}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-700/90">
              Each engagement begins with a discovery sprint that uncovers the
              nuance behind your objectives, risk profile, and resource
              realities. We blend market intelligence, internal capabilities,
              and actionable planning to architect solutions that move the dial.
              From startups chasing investor alignment to mature enterprises
              refining operations, our strategists operate as an extension of
              your leadership bench.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-700/90">
              Partnering with us means tapping into a deeply collaborative
              process, transparent communication, and a cadence built around
              milestones that you can bring into stakeholder conversations with
              confidence. Your mission fuels the work, and we ensure the plan to
              achieve it is equally compelling.
            </p>
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
                  <h3 className="text-lg font-semibold text-slate-900">
                    Engagement Snapshot
                  </h3>
                  <p className="text-sm text-slate-500">
                    What to expect when we collaborate
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                {supportingStats.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-3 rounded-2xl border border-slate-100/70 bg-white px-4 py-3 shadow-sm"
                  >
                    <item.icon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.label}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {featureHighlights.length ? (
              <motion.ul
                className="grid gap-3 sm:grid-cols-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {featureHighlights.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start flex-col gap-3 rounded-2xl border border-primary-100 bg-white/90 p-4 transition hover:-translate-y-1 hover:border-primary-200"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-200 to-primary-500 text-white shadow-inner">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      {feature}
                    </span>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ServiceNarrativeSection;
