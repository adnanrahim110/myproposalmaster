"use client";

import { cn } from "@/lib/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";

const SectionHeader = ({
  subtitle,
  title,
  titleLevel = "h2",
  highlightedText = "",
  description,
  subtitleIcon = "✨",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  maxWidth = "max-w-4xl",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.3,
  });

  return (
    <div ref={ref} className={cn("text-center mb-20", className)}>
      {subtitle && (
        <Subtitle icon={subtitleIcon} isInView={isInView} delay={0}>
          {subtitle}
        </Subtitle>
      )}

      <Title
        as={titleLevel}
        highlightedText={highlightedText}
        className={cn(highlightedText ? "mb-1" : "mb-3", titleClassName)}
        isInView={isInView}
        delay={0.3}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.2,
          }}
          className={cn(
            "text-xl text-gray-600 mx-auto leading-relaxed",
            maxWidth,
            descriptionClassName
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
