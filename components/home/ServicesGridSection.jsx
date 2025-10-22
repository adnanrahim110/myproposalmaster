"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  FileText,
  Globe,
  Monitor,
  Palette,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import Title from "../ui/Title";

const ServicesGridSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

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
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-blue-50/50"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className="text-center mb-16 lg:mb-20"
        >
          <Title
            as="h2"
            highlightedText="My Proposal Masters"
            highlightClassName="text-primary-600"
            className="mb-6 mx-auto max-w-4xl"
            isInView={isInView}
            delay={0.2}
          >
            More Ways My Proposal Masters Can Help You Succeed
          </Title>

          <Button variant="primary" size="lg" className="mb-12">
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
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.4 + index * 0.1,
                }}
                className={cn(
                  "group bg-gradient-to-br backdrop-blur-sm border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer",
                  colors.bg,
                  colors.border,
                  colors.hover,
                  "hover:transform hover:-translate-y-2"
                )}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300",
                      "group-hover:scale-110"
                    )}
                  >
                    <IconComponent className={cn("w-8 h-8", colors.icon)} />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wide">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.0,
          }}
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
