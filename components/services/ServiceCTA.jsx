"use client";

import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRightCircle, PhoneCall } from "lucide-react";

const ServiceCTA = ({ service }) => {
  const cta = service.cta || {};

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/20 via-white to-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,97,55,0.15),transparent_55%)]" />

      <div className="container relative">
        <div className="grid gap-10 rounded-[36px] border border-primary-100/60 bg-white/85 p-10 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.45)] backdrop-blur lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:p-14">
          <div className="flex flex-col justify-center">
            <SectionHeader
              subtitle="Ready When You Are"
              subtitleIcon={<PhoneCall className="w-4 h-4" />}
              title={cta.title}
              // highlightedText={ct}
              className="mb-0 text-left lg:text-left"
              description={null}
            />
          </div>

          <motion.div
            className="flex flex-col justify-center gap-6 text-left lg:pl-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-base text-slate-700 md:text-lg leading-relaxed">
              {cta.text}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                tone="primary"
                variant="outline"
                showArrow
                className="border-2 border-primary-400 bg-white/80 px-8 py-3 text-primary-600 hover:bg-primary-500 hover:text-white"
              >
                {cta.btn1 || "Contact Us Today"}
              </Button>
              <div className="flex items-center gap-3 rounded-full border border-primary-100 bg-primary-50/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
                <ArrowRightCircle className="h-4 w-4" />
                {cta.btn2 || "Free Discovery Call"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
