"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Target } from "lucide-react";
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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center"
        >
          <div className="space-y-6">
            <Subtitle
              icon={<CheckCircle className="w-4 h-4 text-primary-400" />}
              className="mb-6"
              textClassName="bg-primary-950 border border-primary-800 text-primary-200"
              isInView={isInView}
              delay={0}
            >
              My Proposal Masters
            </Subtitle>

            <Title
              as="h1"
              highlightedText="Winning Grants"
              className="text-5xl lg:text-6xl font-bold text-white"
              highlightClassName="text-primary-400"
              isInView={isInView}
              delay={0.3}
            >
              Empowering Organizations Through Winning Grants
            </Title>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed font-light"
            >
              Behind every funded project is a story worth telling, and that’s
              what we do best. We are a team of experienced grant writers,
              researchers, and strategists dedicated to helping nonprofits,
              businesses, and academic institutions secure the funding they need
              to grow and create lasting impact. So, for your ease, what we
              offer is simple: funding should never be the barrier to great
              ideas.
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
      </div>
    </section>
  );
};

export default AboutHero;
