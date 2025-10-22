"use client";

import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../lib/cn";
import SectionHeader from "../ui/SectionHeader";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  const [swiperRef, setSwiperRef] = useState(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "The attention to detail and personalized approach made all the difference. They helped us secure the funding we needed to expand our community programs.",
      author: "Sarah Mitchell",
      position: "Executive Director",
      image: "SM",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Outstanding consulting services that transformed our organization. Their strategic guidance helped us increase our impact by 300% in just one year.",
      author: "Michael Rodriguez",
      position: "CEO",
      image: "MR",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Professional, knowledgeable, and results-driven. They secured multiple grants for our environmental initiatives and provided excellent ongoing support.",
      author: "Jennifer Chen",
      position: "Program Manager",
      image: "JC",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Exceptional fundraising expertise that exceeded our expectations. Their innovative approach helped us raise more funds than we thought possible.",
      author: "David Thompson",
      position: "Board Chair",
      image: "DT",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "Their interim leadership support was invaluable during our transition period. Professional, experienced, and truly caring about our mission.",
      author: "Lisa Anderson",
      position: "Board Member",
      image: "LA",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "Incredible program development services that brought our vision to life. They helped us create sustainable programs that serve hundreds of families.",
      author: "Robert Kim",
      position: "Founder",
      image: "RK",
      rating: 5,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-blue-900/20"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-start justify-between gap-8 mb-16 lg:mb-20">
          <SectionHeader
            subtitle="Client Success Stories"
            subtitleIcon="🌟"
            title="Happy My Proposal Masters Clients"
            titleLevel="h2"
            className="text-left mb-0 flex-1"
            titleClassName="text-left text-white"
            descriptionClassName="text-left text-gray-300"
            isInView={isInView}
            delay={0.6}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4,
            }}
            className="relative flex-shrink-0"
          >
            <div className="text-white/90 text-sm mb-2">Our Clients</div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 1.6 + index * 0.1,
                    }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-xs shadow-lg ring-2 ring-slate-900"
                  >
                    {String.fromCharCode(65 + index)}
                  </motion.div>
                ))}
              </div>
              <div className="text-gray-400 text-xs ml-2">+44 more</div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            className="relative space-y-5"
          >
            <div className="grid grid-cols-4 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 1,
                }}
                className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-3 text-center"
              >
                <div className="text-2xl font-bold text-green-400 mb-1">
                  100%
                </div>
                <div className="text-white/90 text-xs">Success Rate</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.6,
                }}
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-3 text-center"
              >
                <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-white/90 text-xs">Happy Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.8,
                }}
                className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 backdrop-blur-sm border border-primary-500/30 rounded-xl p-3 text-center"
              >
                <div className="text-2xl font-bold text-primary-400 mb-1">
                  $2.5M+
                </div>
                <div className="text-white/90 text-xs">Funding Secured</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 1.0,
                }}
                className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-3 text-center"
              >
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  10+
                </div>
                <div className="text-white/90 text-xs">Years Exp.</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 1.4,
              }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4"
            >
              <div className="text-white font-semibold mb-4">Trusted By</div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Nonprofits", icon: "🏛️" },
                  { name: "Foundations", icon: "🏢" },
                  { name: "Healthcare", icon: "🏥" },
                  { name: "Education", icon: "🎓" },
                  { name: "Environment", icon: "🌱" },
                  { name: "Community", icon: "🤝" },
                ].map((sector, index) => (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 1.4 + index * 0.1,
                    }}
                    className="text-center"
                  >
                    <div className="text-2xl mb-1">{sector.icon}</div>
                    <div className="text-gray-300 text-xs">{sector.name}</div>
                  </motion.div>
                ))}
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 1.2,
              }}
              className="relative testimonials-swiper"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
                <button
                  onClick={() => swiperRef?.slidePrev()}
                  className="swiper-button-prev-custom group w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-xl"
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:text-primary-300 transition-colors" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
                <button
                  onClick={() => swiperRef?.slideNext()}
                  className="swiper-button-next-custom group w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-xl"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:text-primary-300 transition-colors" />
                </button>
              </div>

              <Swiper
                onSwiper={setSwiperRef}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={600}
                className="premium-testimonials-swiper rounded-3xl"
              >
                {testimonials.map((testimonial, idx) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-8 pt-8 pb-5 hover:border-white/20 transition-all duration-500 group">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {testimonial.image}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-white font-semibold text-lg">
                              {testimonial.author}
                            </h4>
                            <div className="flex items-center gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary-400/30" />
                        <blockquote className="text-white/90 text-lg leading-relaxed pl-6 font-light group-hover:text-white transition-colors duration-300">
                          {testimonial.quote}
                        </blockquote>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Project Success</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                  duration: 1.5,
                                  delay: 0.5,
                                }}
                              />
                            </div>
                            <span className="text-green-400 font-medium">
                              100%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
