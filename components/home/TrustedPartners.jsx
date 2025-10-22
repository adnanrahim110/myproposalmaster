"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TrustedPartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  const partners = [
    {
      name: "SBA",
      logo: "/imgs/partners/sba-logo.png",
      alt: "Small Business Administration",
    },
    {
      name: "Nav",
      logo: "/imgs/partners/nav-logo.png",
      alt: "Nav Business Credit",
    },
    {
      name: "IBISWorld",
      logo: "/imgs/partners/ibis-logo.png",
      alt: "IBISWorld Industry Research",
    },
    {
      name: "The UPS Store",
      logo: "/imgs/partners/ups-logo.png",
      alt: "The UPS Store Print & Business Services",
    },
    {
      name: "Norton Secured",
      logo: "/imgs/partners/norton-logo.png",
      alt: "Norton Secured",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 bg-white border-y border-gray-100"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.1,
          }}
          className="text-center mb-12"
        >
          <p className="text-lg font-medium text-gray-600 mb-2">
            Trusted by Industry Leaders
          </p>
          <div className="w-16 h-0.5 bg-primary-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3,
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5 + index * 0.1,
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-50 p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className="h-16 flex items-center justify-center">
                  {/* Placeholder for logos - replace with actual images */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-semibold text-lg">
                    {partner.name === "SBA" && (
                      <div className="text-blue-600 font-bold text-2xl border-2 border-blue-600 px-3 py-1 rounded">
                        SBA
                      </div>
                    )}
                    {partner.name === "Nav" && (
                      <div className="text-blue-500 font-bold text-3xl">
                        Nav
                      </div>
                    )}
                    {partner.name === "IBISWorld" && (
                      <div className="font-bold text-lg bg-black text-white px-3 py-2 rounded">
                        IBISWorld
                      </div>
                    )}
                    {partner.name === "The UPS Store" && (
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            UPS
                          </span>
                        </div>
                        <span className="text-amber-600 font-semibold text-sm">
                          Store
                        </span>
                      </div>
                    )}
                    {partner.name === "Norton Secured" && (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-black text-xs">✓</span>
                        </div>
                        <span className="text-gray-800 font-semibold">
                          Norton
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Uncomment when you have actual logo images */}
                  {/* <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  /> */}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-lg transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.0,
          }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful businesses who trust our expertise to
            secure funding, develop strategic partnerships, and achieve
            sustainable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;
