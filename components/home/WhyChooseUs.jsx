"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion, useInView } from "framer-motion";
import { Clock, GraduationCap, Sparkles, TrendingUp } from "lucide-react";
import { useRef } from "react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.2,
  });

  const reasons = [
    {
      id: "01",
      title: "MBA-EDUCATED EXPERTS",
      description: "Work one-on-one with MBA writers who know your industry.",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "02",
      title: "PROVEN SUCCESS",
      description: "Clients have raised over $2 Billion+ with our plans.",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      id: "03",
      title: "CUSTOM & COMPREHENSIVE",
      description:
        "Each plan is tailored to your business - no templates ever.",
      icon: Sparkles,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "04",
      title: "FAST TURNAROUND",
      description:
        "Complete professional plans delivered in as fast as 2 weeks.",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <SectionHeader
          subtitle="Why Choose Us"
          title="Why Choose My Proposal Masters?"
          titleLevel="h2"
          highlightedText="My Proposal Masters?"
          description="Discover what sets us apart in the business planning industry and why thousands trust us"
          subtitleIcon="?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={reason.id}
                className={`group relative ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex items-center gap-8`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: isEven ? -80 : 80,
                    scale: 0.8,
                    rotateY: isEven ? -15 : 15,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      duration: 1,
                      delay: index * 0.15,
                      ease: [0.25, 0.1, 0.25, 1],
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                    },
                  },
                }}
              >
                <div
                  className={`flex-shrink-0 relative z-10 ${
                    isEven ? "order-1" : "order-2"
                  }`}
                >
                  <motion.div
                    className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-2xl cursor-pointer`}
                    whileHover={{
                      rotate: 0,
                      scale: 1.1,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                    initial={{ rotate: 6 }}
                    animate={{ rotate: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-3xl bg-white/10"></div>
                  </motion.div>

                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <span className="text-base font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                      {reason.id}
                    </span>
                  </div>
                </div>

                <div
                  className={`flex-1 relative z-10 ${
                    isEven ? "order-2" : "order-1"
                  } ${isEven ? "text-left" : "text-right md:text-right"}`}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-source-sans leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {reason.description}
                  </p>

                  <motion.div
                    className={`mt-4 w-16 h-1 bg-gradient-to-r ${
                      reason.color
                    } rounded-full ${isEven ? "mr-auto" : "ml-auto"}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                delay: 1,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 100,
              },
            },
          }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white via-gray-50 to-white rounded-full shadow-xl border border-gray-200/50 backdrop-blur-sm">
            <motion.div
              className="flex items-center gap-2"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-lg"></div>
            </motion.div>

            <span className="text-gray-700 font-semibold text-lg">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent font-bold">
                15,000+
              </span>{" "}
              businesses worldwide
            </span>

            <motion.div
              className="flex items-center gap-1"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <span className="text-yellow-500 text-xl">?</span>
              <span className="text-yellow-500 text-lg">?</span>
              <span className="text-yellow-500 text-base">?</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

