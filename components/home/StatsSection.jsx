"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
  delay = 0,
  format,
  prefix = "",
  suffix = "",
}) => {
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => {
    if (format === "year") {
      return Math.floor(latest).toString();
    } else if (format === "decimal") {
      return `${prefix}${latest.toFixed(1)}${suffix}`;
    } else {
      return `${Math.floor(latest).toLocaleString()}${suffix}`;
    }
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete: () => {},
    });

    return () => controls.stop();
  }, [count, to, duration, delay]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const stats = [
    {
      id: "founded",
      from: 0,
      to: 10,
      suffix: "+",
      format: "number",
      label: "YEARS EXPERIENCE",
      delay: 0,
    },
    {
      id: "funding",
      from: 0,
      to: 1,
      format: "decimal",
      prefix: "$",
      suffix: "M+",
      label: "FUNDING RAISED",
      delay: 0.2,
    },
    {
      id: "plans",
      from: 0,
      to: 100,
      format: "number",
      suffix: "+",
      label: "SATISFIED CLIENTS",
      delay: 0.4,
    },
    {
      id: "industries",
      from: 0,
      to: 96,
      format: "number",
      suffix: "%",
      label: "RECURRING CLIENTS",
      delay: 0.6,
    },
  ];

  return (
    <section ref={ref} className="py-16 xl:py-20 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: reduceMotion ? 0 : stat.delay,
              }}
              viewport={{ once: true, margin: "-120px" }}
            >
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary-300 to-transparent" />
              )}
              <h3 className="text-2xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 font-source-sans tracking-tight">
                {reduceMotion ? (
                  `${stat.to}${stat.suffix || ""}`
                ) : (
                  <AnimatedCounter
                    from={stat.from}
                    to={stat.to}
                    duration={1.2}
                    delay={stat.delay}
                    format={stat.format}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </h3>
              <div className="space-y-1">
                <p className="text-sm xl:text-base font-semibold text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>

              <motion.div
                className="mx-auto mt-4 xl:mt-6 w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: reduceMotion ? 0 : stat.delay,
                }}
                viewport={{ once: true, margin: "-120px" }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            ease: [0.25, 0.1, 0.25, 1],
            delay: reduceMotion ? 0 : 0.2,
          }}
          viewport={{ once: true, margin: "-120px" }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-100 px-5">
              <div className="w-3 h-3 bg-primary-500 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
