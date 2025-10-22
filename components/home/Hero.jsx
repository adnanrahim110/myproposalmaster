"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true,
    margin: "-100px",
    amount: 0.2,
  });

  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/imgs/hero-home.webp')] min-h-[800px] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div
        ref={heroRef}
        className="relative z-10 mx-auto px-5 lg:px-3 max-w-6xl"
      >
        <div className="text-center text-white">
          <div className="space-y-2">
            <Subtitle
              icon={<CheckCircle className="w-4 h-4 text-green-400" />}
              className="mb-6"
              textClassName="bg-white/10 backdrop-blur-sm border border-white/20 text-white"
              isInView={isInView}
              delay={0}
            >
              Trusted by 500+ Organizations Worldwide
            </Subtitle>

            <div>
              <Title
                as="h1"
                highlightedText="Winning Proposals"
                className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent tracking-tight leading-[0.85]"
                highlightClassName="text-primary-500 -mt-5 font-snell-bt leading-snug"
                isInView={isInView}
                delay={0.3}
              >
                Transform Your Vision Into Winning Proposals
              </Title>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 1.2,
              }}
            >
              Expert grant writing, strategic consulting, and program
              development services that turn ideas into funded realities.
              Partner with industry leaders who deliver results.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 1.5,
              }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-400" />
                <span>$50M+ in Grants Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-400" />
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-400" />
                <span>Industry Experts</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="my-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 1.8,
            }}
          >
            <Button
              href="/contact"
              variant="solid"
              tone="primary"
              size="lg"
              showArrow={true}
            >
              Start Your Project
            </Button>

            <Button
              href="/about"
              variant="outline"
              tone="light"
              size="lg"
              showArrow={true}
            >
              View Our Work
            </Button>
          </motion.div>
          <motion.div
            className="mx-auto max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 2.1,
            }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-4 px-3">
              <div className="grid md:grid-cols-[1.1fr_0.8fr_1.1fr] gap-3 items-center text-center md:text-left">
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Trusted by
                  </p>
                  <p className="text-white text-sm font-semibold">
                    Fortune 500 Companies
                  </p>
                  <p className="text-gray-300 text-xs">
                    Startups to Enterprise
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">4.9/5</p>
                    <p className="text-gray-300 text-xs">Google Rating</p>
                  </div>
                </div>

                <div className="space-y-2 flex flex-col items-end">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Recognition
                  </p>
                  <p className="text-white text-sm font-semibold">
                    Forbes Contributor
                  </p>
                  <Link
                    href="#"
                    className="text-primary-400 hover:text-primary-300 text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    View Credentials
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
