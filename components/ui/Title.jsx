"use client";

import { cn } from "@/lib/cn";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Title = ({
  as = "h2",
  children,
  className = "",
  highlightedText = "",
  highlightClassName = "font-snell-roundhand font-black text-primary-500",
  isInView: externalIsInView,
  delay = 0,
}) => {
  const ref = useRef(null);
  const internalIsInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.3,
  });

  const isInView =
    externalIsInView !== undefined ? externalIsInView : internalIsInView;

  const headingSizes = {
    h1: "text-5xl lg:text-7xl",
    h2: "text-4xl lg:text-6xl",
    h3: "text-3xl lg:text-5xl",
    h4: "text-2xl lg:text-4xl",
    h5: "text-xl lg:text-3xl",
    h6: "text-lg lg:text-2xl",
  };

  const Component = as;
  const sizeClass = headingSizes[as] || headingSizes.h2;
  const baseClasses = cn("font-bold text-gray-800 font-source-sans", sizeClass);

  const animateText = (text, startIndex = 0, isHighlighted = false) => {
    if (typeof text !== "string") return text;

    const words = text.split(" ");
    let globalCharIndex = startIndex;

    return words
      .map((word, wordIndex) => {
        const wordChars = word.split("").map((char, charIndex) => (
          <motion.span
            key={`${char}-${globalCharIndex + charIndex}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
                rotateX: -90,
                scale: 0.8,
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
                transition: {
                  duration: 0.25,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: delay + (globalCharIndex + charIndex) * 0.03,
                },
              },
            }}
            className={cn(isHighlighted ? highlightClassName : "inline-block")}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ));

        globalCharIndex += word.length;

        const wordElement = (
          <span
            key={`word-${startIndex}-${globalCharIndex}-${wordIndex}`}
            className="inline-block whitespace-nowrap"
          >
            {wordChars}
          </span>
        );

        if (wordIndex < words.length - 1) {
          globalCharIndex += 1;
          return [
            wordElement,
            <span
              key={`space-${startIndex}-${globalCharIndex}-${wordIndex}`}
              className="inline"
            >
              {"\u00A0"}
            </span>,
          ];
        }

        return wordElement;
      })
      .flat();
  };

  const renderContent = () => {
    if (highlightedText && typeof children === "string") {
      const parts = children.split(highlightedText);
      let characterIndex = 0;

      return parts.reduce((acc, part, partIndex) => {
        const animatedPart = animateText(part, characterIndex);
        characterIndex += part.length;

        if (partIndex === 0) {
          return animatedPart;
        }

        const animatedHighlight = animateText(
          highlightedText,
          characterIndex,
          true
        );
        characterIndex += highlightedText.length;

        return [...acc, ...animatedHighlight, ...animatedPart];
      }, []);
    }

    return animateText(children, 0);
  };

  return (
    <Component ref={ref} className={cn(baseClasses, className)}>
      {renderContent()}
    </Component>
  );
};

export default Title;
