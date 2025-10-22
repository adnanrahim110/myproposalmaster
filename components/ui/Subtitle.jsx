"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

const Subtitle = ({
  children,
  icon = "✨",
  className = "",
  iconClassName = "",
  textClassName = "",
  isInView = true,
  delay = 0,
}) => {
  return (
    <motion.div
      className={cn("inline-block mb-4", className)}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.9 }
      }
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      <span
        className={cn(
          "text-sm inline-flex items-center justify-center gap-1.5 font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full",
          textClassName
        )}
      >
        <span className={cn(iconClassName)}>{icon}</span> {children}
      </span>
    </motion.div>
  );
};

export default Subtitle;
