"use client";

import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const LeadershipVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary-50/30"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 opacity-80"></div>

                <motion.button
                  onClick={handlePlayVideo}
                  className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group-hover:bg-primary-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play
                    className="w-8 h-8 text-slate-800 ml-1"
                    fill="currentColor"
                  />
                </motion.button>

                <div className="absolute top-4 left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>

              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: isPlaying ? "block" : "none" }}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/leadership-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.6,
              }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Watch & Learn</p>
                  <p className="text-sm text-gray-600">Industry Insights</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4,
            }}
            className="space-y-8"
          >
            <SectionHeader
              subtitle="Leadership Excellence"
              subtitleIcon="🎯"
              title="Being an Industry Leader is Earned."
              highlightedText="Not Given."
              titleLevel="h2"
              description="Discover how we've built our reputation through decades of proven results, strategic innovation, and unwavering commitment to our clients' success."
              className="text-left mb-5"
              titleClassName="text-left"
              descriptionClassName="text-left"
              isInView={isInView}
              delay={0.6}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 1.4,
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">
                      Industry Recognition
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Featured in Forbes, Harvard Business Review, and industry
                    publications
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">
                      Proven Track Record
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    25+ years of delivering exceptional results for global
                    clients
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">
                      Innovation Focus
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Pioneering new methodologies and industry best practices
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">
                      Client Success
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    95% client retention rate and measurable ROI growth
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  href="/about"
                  variant="solid"
                  tone="primary"
                  size="lg"
                  showArrow={true}
                >
                  Start Your Business
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipVideo;
