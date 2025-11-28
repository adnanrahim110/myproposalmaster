"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Our team had passion but no time to translate it into a polished proposal. Their grant proposal writing and research support changed everything. They helped us identify the right federal program, shaped a powerful narrative, and guided us through every requirement. The result was a $450,000 award that is now funding our community health initiative.",
    author: "Emily Carter",
    role: "Executive Director",
    initials: "EC",
    rating: 5,
  },
  {
    quote:
      "Their academic grant writing expertise was the missing piece for our research lab. They helped refine our aims, clarify our methodology, and align every section with agency criteria. With their support, our interdisciplinary project secured a major federal grant and a foundation award that will sustain our work for the next three years.",
    author: "Dr. Marcus Allen",
    role: "Principal Investigator",
    initials: "MA",
    rating: 5,
  },
  {
    quote:
      "As a growing tech startup, we knew grant funding could accelerate our roadmap but had no idea where to start. Their business grant writing team helped us define a clear value proposition, build a compelling case for innovation, and present our financials credibly. We secured a $275,000 state innovation grant that allowed us to hire staff and launch our pilot.",
    author: "Jordan Mitchell",
    role: "Founder & CEO, Meridian Analytics Inc.",
    initials: "JM",
    rating: 5,
  },
  {
    quote:
      "Before working with them, our funding efforts felt random and reactive. Their grant research and prospecting service gave us a focused pipeline of opportunities that actually matched our mission and eligibility. Within six months, we submitted fewer applications but tripled our success rate, including two multi-year foundation grants.",
    author: "Vanessa Coleman",
    role: "Director of Development, Bright Futures Youth Alliance",
    initials: "VC",
    rating: 5,
  },
  {
    quote:
      "We came to them with a solid draft that still wasn’t getting funded. Their editing and review service was the difference. They tightened the language, fixed compliance gaps, and showed us how to highlight outcomes more convincingly. The revised proposal was funded on the next round for $190,000.",
    author: "Christopher Hayes",
    role: "Program Manager, Midwest Housing Initiative",
    initials: "CH",
    rating: 5,
  },
  {
    quote:
      "Budget development had always been the most stressful part of our applications. Their team helped us build a clear, compliant budget that aligned perfectly with our narrative and funder rules. Reviewers specifically praised the financial clarity in their feedback, and we were awarded a $900,000 multi-year grant.",
    author: "Laura Jennings",
    role: "Chief Financial Officer, Harbor Hope Family Services",
    initials: "LJ",
    rating: 5,
  },
  {
    quote:
      "We didn’t just need one proposal; we needed a long-term funding strategy. Their strategic grant consulting and capacity-building support helped us map a three-year funding plan, improve internal processes, and train staff on grant readiness. Our annual grant revenue has more than doubled, and our leadership team finally feels in control of the funding pipeline.",
    author: "Anthony Brooks",
    role: "Chief Executive Officer, Summit Pathways Services",
    initials: "AB",
    rating: 5,
  },
  {
    quote:
      "As a brand-new nonprofit, we were unsure how to present ourselves to funders with no track record. Their nonprofit startup grant support walked us through mission clarity, funder targeting, and first-time budgeting. Our very first proposal received a $65,000 grant, which opened the door to additional opportunities we never would have attempted on our own.",
    author: "Rachel Morgan",
    role: "Founder, SafeSteps Youth Outreach",
    initials: "RM",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
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
