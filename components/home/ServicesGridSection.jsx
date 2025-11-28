"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  FileText,
  Globe,
  Monitor,
  Palette,
  Users,
} from "lucide-react";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import Title from "../ui/Title";

const ServicesGridSection = () => {
  const reduceMotion = useReducedMotion();

  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Custom Websites",
      description:
        "Are you looking for a custom website that truly reflects the unique personality of your...",
      category: "Web Development",
      color: "blue",
    },
    {
      id: 2,
      icon: Palette,
      title: "Logo & Branding",
      description:
        "Are you looking to create a unique and memorable logo for your business? Look no further!...",
      category: "Design",
      color: "purple",
    },
    {
      id: 3,
      icon: Users,
      title: "Business Formations",
      description:
        "Starting a business can be an overwhelming and complex process. That's why we created...",
      category: "Legal Services",
      color: "green",
    },
    {
      id: 4,
      icon: FileText,
      title: "Business Licensing",
      description:
        "Starting a business has never been easier than with our business licensing service...",
      category: "Legal Services",
      color: "orange",
    },
    {
      id: 5,
      icon: Monitor,
      title: "Digital Marketing",
      description:
        "Struggling to create successful digital marketing campaigns? One solution to manage all of your...",
      category: "Marketing",
      color: "cyan",
    },
    {
      id: 6,
      icon: DollarSign,
      title: "Business Credit",
      description:
        "Are you an entrepreneur looking to boost your business's creditworthiness? With our...",
      category: "Financial",
      color: "red",
    },
  ];

  const colorVariants = {
    blue: {
      bg: "from-blue-500/20 to-blue-600/10",
      border: "border-blue-500/30",
      icon: "text-blue-400",
      hover: "hover:border-blue-400/50",
    },
    purple: {
      bg: "from-purple-500/20 to-purple-600/10",
      border: "border-purple-500/30",
      icon: "text-purple-400",
      hover: "hover:border-purple-400/50",
    },
    green: {
      bg: "from-green-500/20 to-green-600/10",
      border: "border-green-500/30",
      icon: "text-green-400",
      hover: "hover:border-green-400/50",
    },
    orange: {
      bg: "from-orange-500/20 to-orange-600/10",
      border: "border-orange-500/30",
      icon: "text-orange-400",
      hover: "hover:border-orange-400/50",
    },
    cyan: {
      bg: "from-cyan-500/20 to-cyan-600/10",
      border: "border-cyan-500/30",
      icon: "text-cyan-400",
      hover: "hover:border-cyan-400/50",
    },
    red: {
      bg: "from-red-500/20 to-red-600/10",
      border: "border-red-500/30",
      icon: "text-red-400",
      hover: "hover:border-red-400/50",
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-white py-16 xl:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-blue-50/50" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-120px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <Title
            as="h2"
            highlightedText="My Proposal Masters"
            highlightClassName="text-primary-600"
            className="mb-4 xl:mb-6 mx-auto max-w-4xl"
          >
            More Ways My Proposal Masters Can Help You Succeed
          </Title>

          <Button variant="primary" size="lg" className="mb-6 xl:mb-12">
            START YOUR ROADMAP
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = colorVariants[service.color];
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: reduceMotion ? 0 : 0.08 * index,
                }}
                viewport={{ once: true, margin: "-80px" }}
                className={cn(
                  "group bg-gradient-to-br backdrop-blur-sm border rounded-2xl p-8 transition-all duration-200 cursor-pointer",
                  colors.bg,
                  colors.border,
                  colors.hover,
                  reduceMotion ? "" : "hover:-translate-y-2 hover:shadow-xl"
                )}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-200",
                      reduceMotion ? "" : "group-hover:scale-105"
                    )}
                  >
                    <IconComponent className={cn("w-8 h-8", colors.icon)} />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wide">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-200 group-hover:text-primary-700">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-120px" }}
          className="text-center"
        >
          <Button variant="primary" size="lg">
            NEED APPLY
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
