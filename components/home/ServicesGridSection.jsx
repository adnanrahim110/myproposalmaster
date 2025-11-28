"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
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
      icon: Monitor,
      title: "Digital Marketing",
      description:
        "At My Proposal Master, we know getting a grant isn’t just about writing a great proposal—it’s about being seen. Our digital marketing services help your organization reach the right audience, whether through social media, email campaigns, or content strategies. We make sure your story gets noticed so your mission can make the impact it deserves.",
      category: "Marketing",
      color: "cyan",
    },
    {
      id: 2,
      icon: Palette,
      title: "Logo & Branding",
      description:
        "Your brand says a lot about you. With My Proposal Master, we help you create a look and feel that shows funders who you are and why you matter. From logos to overall branding, we make sure your organization looks professional, trustworthy, and ready to make a difference.",
      category: "Design",
      color: "purple",
    },
    {
      id: 3,
      icon: Globe,
      title: "Custom Websites (Web Development)",
      description:
        "A website can be your best advocate. At My Proposal Master, we build custom websites that tell your story clearly and beautifully. From easy navigation to clean design, we make sure funders can see the impact you’re creating—and why it’s worth supporting.",
      category: "Web Development",
      color: "blue",
    },
    {
      id: 4,
      icon: FileText,
      title: "Pitch Deck",
      description:
        "Sometimes, showing is better than telling. That’s why My Proposal Master creates pitch decks that bring your ideas to life. We turn your project goals, strategies, and impact into a clear, engaging visual story that makes funders sit up and take notice.",
      category: "Presentation",
      color: "orange",
    },
    {
      id: 5,
      icon: Users,
      title: "Business Proposal",
      description:
        "Writing a proposal doesn’t have to be stressful. My Proposal Master crafts business proposals that clearly explain your mission, show your plan, and connect with funders on what matters most. We turn your ideas into opportunities, so your project has the best chance to get funded.",
      category: "Business",
      color: "green",
    },
    {
      id: 6,
      icon: DollarSign,
      title: "Budget Planning",
      description:
        "Numbers can feel tricky, but they don’t have to be. My Proposal Master helps you plan budgets that make sense, are easy to follow, and show funders you’re responsible with their support. A strong, clear budget strengthens your proposal and builds trust with those who can help bring your vision to life.",
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
          <Button href="/contact" variant="primary" size="lg">
            NEED APPLY
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
