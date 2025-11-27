"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Globe, Handshake, User } from "lucide-react";
import { useRef } from "react";

const bullets = [
  "Nonprofit leadership and fundraising.",
  "Academic research and higher education.",
  "Business development and entrepreneurship.",
  "Healthcare, community development, and public policy.",
];

const WhyChooseWise = () => {
  const ref = useRef(null);

  const assurances = [
    {
      icon: FileText,
      title: "Proven Track Record",
      text: "Millions secured in successful grants.",
    },
    {
      icon: Globe,
      title: "Diverse Expertise",
      text: "Experience across nonprofit, academic, and business sectors.",
    },
    {
      icon: User,
      title: "Personalized Approach",
      text: "Every project is tailored, never one-size-fits-all",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      text: "We don’t just write; we help you build sustainable funding strategies.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-28 overflow-hidden bg-white"
    >
      <div className="container relative z-10">
        <SectionHeader
          subtitle="THE BUSINESS PLAN AUTHORITY IN THE INDUSTRY"
          title="Meet Our Team of Experts?"
          titleLevel="h2"
          highlightedText="My Proposal Masters"
          description="Our team brings together professionals with backgrounds in:"
          subtitleIcon="★"
          className="mb-14"
          descriptionClassName="text-gray-600"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[45%_auto] gap-5 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-gray-200 p-8">
              <ul className="grid gap-1">
                {bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="shrink-0">
                      <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-primary-600 text-white">
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                    <span className="text-gray-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Together, we’ve secured millions in funding across federal,
                state, and private foundations, positioning us as a trusted
                partner for clients nationwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-gray-200 p-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h4>
              <ul className="space-y-1.5">
                {assurances.map(({ icon: Icon, title, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5">
                      <Icon className="size-5 text-primary-600" />
                    </div>
                    <span className="text-gray-800">
                      <strong>{title} – </strong> {text}
                    </span>
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
