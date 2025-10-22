"use client";

import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "The attention to detail and personalized approach made all the difference. They helped us secure the funding we needed to expand our community programs.",
    author: "Sarah Mitchell",
    role: "Executive Director",
    initials: "SM",
    rating: 5,
  },
  {
    quote:
      "Outstanding consulting services that transformed our organization. Strategic guidance helped us increase our impact by 300% in just one year.",
    author: "Michael Rodriguez",
    role: "CEO",
    initials: "MR",
    rating: 5,
  },
  {
    quote:
      "Professional, knowledgeable, and results‑driven. They secured multiple grants for our initiatives and provided excellent ongoing support.",
    author: "Jennifer Chen",
    role: "Program Manager",
    initials: "JC",
    rating: 5,
  },
  {
    quote:
      "Exceptional fundraising expertise that exceeded our expectations. Their innovative approach helped us raise more funds than we thought possible.",
    author: "David Thompson",
    role: "Board Chair",
    initials: "DT",
    rating: 5,
  },
  {
    quote:
      "Their interim leadership support was invaluable during our transition period. Professional, experienced, and truly caring about our mission.",
    author: "Lisa Anderson",
    role: "Board Member",
    initials: "LA",
    rating: 5,
  },
  {
    quote:
      "Incredible program development that brought our vision to life. We created sustainable programs serving hundreds of families.",
    author: "Robert Kim",
    role: "Founder",
    initials: "RK",
    rating: 5,
  },
  {
    quote:
      "Sharp market insight and flawless execution. From grant strategy to compliance, they delivered at every step.",
    author: "Emily Carter",
    role: "Grants Lead",
    initials: "EC",
    rating: 5,
  },
  {
    quote:
      "A true partner. They aligned stakeholders, clarified our roadmap, and helped us stand out to funders.",
    author: "James Patel",
    role: "COO",
    initials: "JP",
    rating: 5,
  },
];

const Card = ({ t, index, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative rounded-3xl overflow-hidden group ${
        featured ? "md:min-h-[280px]" : ""
      }`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-300/25 via-transparent to-primary-200/25" />
      <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-primary-100 p-6 md:p-7 h-full shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 opacity-80" />

        <div className="relative">
          <Quote className="absolute -top-2 -right-2 w-12 h-12 text-primary-500/10" />

          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold flex items-center justify-center ring-2 ring-primary-100">
              {t.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="font-semibold text-gray-900 leading-tight">
                {t.author}
              </div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">“{t.quote}”</p>
        </div>

        <div className="mt-5 h-px bg-gradient-to-r from-transparent via-primary-200/60 to-transparent" />

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>Verified Review</span>
          <span className="opacity-70 group-hover:opacity-100 transition-opacity">
            ★★★★★
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsBody = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(255,97,55,0.15), transparent 40%), radial-gradient(circle at 80% 90%, rgba(59,130,246,0.12), transparent 45%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 flex w-full max-w-3xl items-center justify-center gap-6 rounded-2xl border border-primary-100 bg-white/70 px-5 py-3 backdrop-blur-md text-gray-700"
        >
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-semibold text-gray-900">4.9/5</span>
          </div>
          <span className="h-4 w-px bg-gray-200" />
          <div>15,000+ verified clients</div>
          <span className="h-4 w-px bg-gray-200" />
          <div>Since 2010</div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 lg:mb-12">
          <div className="lg:col-span-7">
            <Card t={TESTIMONIALS[0]} index={0} featured />
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <Card t={TESTIMONIALS[1]} index={1} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(2).map((t, idx) => (
            <Card
              key={t.author + idx}
              t={t}
              index={idx + 3}
              featured={idx % 5 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBody;
