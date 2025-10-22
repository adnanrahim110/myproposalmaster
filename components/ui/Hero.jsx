"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/cn";

const Hero = ({
  backgroundUrl = "/imgs/hero-home.webp",
  subtitle = "",
  subtitleIcon = "★",
  title = "",
  highlightedText = "",
  text = "",
  className = "",
}) => {
  return (
    <section
      className={cn(
        "relative min-h-[480px] lg:min-h-[500px] py-20 flex items-center overflow-hidden bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-slate-900/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {subtitle ? (
            <Subtitle
              icon={subtitleIcon}
              className="mb-5"
              textClassName="bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            >
              {subtitle}
            </Subtitle>
          ) : null}

          {title ? (
            <Title
              as="h1"
              highlightedText={highlightedText}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
              highlightClassName="text-primary-400"
            >
              {title}
            </Title>
          ) : null}

          {text ? (
            <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-gray-200/90 leading-relaxed font-light">
              {text}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
