"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Brain,
  CheckCircle,
  Handshake,
  Heart,
  Phone,
  Rocket,
  Target,
} from "lucide-react";
import { useRef, useState } from "react";
import Button from "../ui/Button";
import Title from "../ui/Title";

const AboutWiseSection = () => {
  const ref = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.1,
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const journey = [
    {
      step: "01",
      title: "Initial Consultation",
      subtitle: "We listen",
      description:
        "We listen. Our first step is to understand your mission, funding needs, and project goals.",
      icon: Phone,
      metric: "",
      metricLabel: "",
    },
    {
      step: "02",
      title: "Opportunity Research",
      subtitle: "Targeted Opportunities",
      description:
        "We identify grants that are the best fit for your organization, no guesswork, just targeted opportunities.",
      icon: BookOpen,
      metric: "",
      metricLabel: "",
    },
    {
      step: "03",
      title: "Proposal Development",
      subtitle: "Tailored Proposals",
      description:
        "Our experts craft a professional proposal that is tailored to funder guidelines and highlights your unique impact.",
      icon: Rocket,
      metric: "",
      metricLabel: "",
    },
    {
      step: "04",
      title: "Review & Refinement",
      subtitle: "Collaborative Editing",
      description:
        "We collaborate with you, ensuring the final draft reflects your voice and values while meeting funder expectations.",
      icon: CheckCircle,
      metric: "",
      metricLabel: "",
    },
    {
      step: "05",
      title: "Submission & Beyond",
      subtitle: "Ongoing Support",
      description:
        "We guide you through the submission process and remain available for future applications, renewals, or resubmissions.",
      icon: Handshake,
      metric: "",
      metricLabel: "",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Funding Dreams",
      description:
        "Connecting bold ideas with the right government, foundation, and private grant opportunities so projects can move from concept to reality.",
    },
    {
      icon: Heart,
      title: "Encouraging Change",
      description:
        "Shaping proposals that highlight real-world impact, showing funders exactly why each mission matters and deserves support.",
    },
    {
      icon: Brain,
      title: "Strategic Storytelling",
      description:
        "Listening, researching, and crafting clear, compelling narratives backed by sector insight, so every application stands out in a competitive field.",
    },
    {
      icon: Handshake,
      title: "Guidance at Every Step",
      description:
        "Providing end-to-end support, from opportunity mapping and strategy to writing, refinement, and submission, so clients are never alone in the grant journey.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 opacity-[0.02]" style={{ y }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-primary-100/50">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-primary-700 font-semibold tracking-wide">
                Our Journey
              </span>
            </div>
          </motion.div>

          <Title
            as="h2"
            highlightedText="proven Process"
            highlightClassName="text-primary-600"
            className="mb-8 text-gray-900"
            isInView={isInView}
            delay={0.4}
          >
            A Simple, Proven Process That Gets Results.
          </Title>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
          >
            We know grant writing can feel overwhelming. Our process is built to
            make it simple, transparent, and effective.
          </motion.p>
        </motion.div>

        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <div className="w-full h-full bg-gradient-to-b from-primary-100 via-primary-200 to-primary-100 rounded-full relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary-500 via-primary-600 to-primary-500 rounded-full"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="space-y-16">
            {journey.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="relative"
                    >
                      <div className="relative w-18 h-18 bg-white rounded-full border-2 border-primary-200 flex items-center justify-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-full flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent rounded-full"></div>
                          <IconComponent className="w-6 h-6 text-white relative z-10" />
                        </div>

                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs font-bold text-white">
                            {step.step}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div
                    className={`flex ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    <motion.div
                      className={`w-full lg:w-6/12 ${
                        isEven ? "lg:pr-16" : "lg:pl-16"
                      }`}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    >
                      <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl p-8 border border-primary-100/60 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-100/60 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>

                        <div
                          className={`absolute top-8 ${
                            isEven ? "-right-8" : "-left-8"
                          } w-8 h-px bg-gradient-to-${
                            isEven ? "r" : "l"
                          } from-primary-200 to-transparent`}
                        ></div>

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-5">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {step.title}
                              </h3>
                              <p className="text-primary-600/80 font-medium tracking-wide text-sm uppercase">
                                {step.subtitle}
                              </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl px-4 py-3 text-white">
                              <div className="text-xl font-bold leading-none">
                                {step.metric}
                              </div>
                              <div className="text-xs opacity-90 font-medium uppercase tracking-wider">
                                {step.metricLabel}
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-700 leading-relaxed font-light mb-5">
                            {step.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-primary-100/60">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                {Array.from({ length: journey.length }).map(
                                  (_, i) => (
                                    <div
                                      key={i}
                                      className={`w-2 h-2 rounded-full ${
                                        i <= index
                                          ? "bg-primary-500"
                                          : "bg-primary-200"
                                      }`}
                                    />
                                  )
                                )}
                              </div>
                              <span className="text-sm text-primary-600 font-medium">
                                Step {index + 1}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                              <CheckCircle className="w-4 h-4" />
                              <span>Milestone</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto font-light leading-relaxed">
              The core focus is simple: funding dreams and empowering change by
              bridging the gap between vision and funding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-primary-100/50 text-center relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-primary-100/30 opacity-60"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h4>

                      <p className="text-gray-600 leading-relaxed font-light text-sm flex-grow">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-4xl p-16 text-center text-white shadow-3xl overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl"></div>
            </div>

            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                `,
              }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-8 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center"
              >
                <Target className="w-12 h-12 text-white" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl font-bold mb-6 leading-tight"
              >
                Your Vision Deserves Funding. We Can Help.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-primary-100 mb-12 max-w-5xl mx-auto font-light leading-relaxed"
              >
                Securing a grant can change everything for your project or
                organization. Don’t let the complexity of the process stand in
                your way. With our proven expertise, personalized strategies,
                and commitment to your success, you’ll have a trusted partner by
                your side.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button
                  tone="dark"
                  size="lg"
                  showArrow
                  className="bg-white text-primary-700 border-0 font-semibold px-8 py-4"
                >
                  Request a Free Quote
                </Button>

                <Button
                  tone="light"
                  size="lg"
                  className="text-white border-2 border-white/30 backdrop-blur-md font-semibold px-8 py-4"
                >
                  Book a Strategy Call
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWiseSection;
