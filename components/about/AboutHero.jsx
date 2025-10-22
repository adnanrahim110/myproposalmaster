"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Target } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const AboutHero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true,
    margin: "-100px",
    amount: 0.2,
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-700/10 rounded-full blur-2xl"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-800/10"></div>

      <div
        ref={heroRef}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Subtitle
                icon={<CheckCircle className="w-4 h-4 text-primary-400" />}
                className="mb-6"
                textClassName="bg-primary-950 border border-primary-800 text-primary-200"
                isInView={isInView}
                delay={0}
              >
                The Business Plan Authority
              </Subtitle>

              <Title
                as="h1"
                highlightedText="My Proposal Masters"
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                highlightClassName="text-primary-400"
                isInView={isInView}
                delay={0.3}
              >
                Building Fundable Plans with My Proposal Masters
              </Title>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed font-light"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi maiores rem qui eveniet labore consequatur at veniam
                odit facere, commodi ratione eligendi ea earum atque. Illo
                numquam eveniet maxime modi.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-4"
            >
              <Button
                href="/contact"
                variant="primary-dark"
                icon={<ArrowRight className="w-5 h-5" />}
                className="px-8 py-4 text-lg font-semibold"
              >
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-primary-800/20 rounded-3xl blur-2xl transform rotate-3"></div>

              <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-primary-900/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-900/60 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-800/40 to-transparent rounded-full transform -translate-x-6 translate-y-6"></div>

                <div className="relative z-10 space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-primary-950 to-primary-900 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 via-transparent to-primary-800/10"></div>

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 p-8 w-full">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{ duration: 0.6, delay: 1.5 + i * 0.1 }}
                            className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-3 text-center"
                          >
                            <div className="w-6 h-6 bg-primary-800 rounded mx-auto mb-2"></div>
                            <div className="h-2 bg-primary-700/60 rounded-full mb-1"></div>
                            <div className="h-2 bg-primary-600/60 rounded-full w-3/4 mx-auto"></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.6, delay: 2.2 }}
                      className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full p-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-800 to-primary-900 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          Business Planning Excellence
                        </div>
                        <div className="text-sm text-gray-300">
                          Trusted Industry Authority
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.6, delay: 2 }}
                      className="text-right"
                    >
                      <div className="text-2xl font-bold text-primary-400">
                        Funded
                      </div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </motion.div>
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-primary-800 to-primary-900 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
