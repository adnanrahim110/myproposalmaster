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
  dangerouslySetInnerHTML,
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
    h1: "text-5xl lg:text-6xl xl:text-7xl",
    h2: "text-4xl lg:text-5xl xl:text-6xl",
    h3: "text-3xl lg:text-4xl xl:text-5xl",
    h4: "text-2xl lg:text-3xl xl:text-4xl",
    h5: "text-xl lg:text-2xl xl:text-3xl",
    h6: "text-lg lg:text-xl xl:text-2xl",
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

  const animateStringWithHighlight = (text, startIndex = 0) => {
    if (!text) {
      return { nodes: [], newIndex: startIndex };
    }

    if (
      highlightedText &&
      typeof text === "string" &&
      text.includes(highlightedText)
    ) {
      const parts = text.split(highlightedText);
      let characterIndex = startIndex;

      const animatedParts = parts.reduce((acc, part, partIndex) => {
        if (part) {
          const animatedPart = animateText(part, characterIndex);
          characterIndex += part.length;
          acc.push(...animatedPart);
        }

        if (partIndex < parts.length - 1) {
          const animatedHighlight = animateText(
            highlightedText,
            characterIndex,
            true
          );
          characterIndex += highlightedText.length;
          acc.push(...animatedHighlight);
        }

        return acc;
      }, []);

      return { nodes: animatedParts, newIndex: characterIndex };
    }

    const animated = animateText(text, startIndex);
    const newIndex = startIndex + (typeof text === "string" ? text.length : 0);

    return { nodes: Array.isArray(animated) ? animated : [animated], newIndex };
  };

  const renderHtmlContent = (htmlString) => {
    const htmlToParse = htmlString ?? "";
    let characterIndex = 0;
    const allowedTags = new Set([
      "BR",
      "STRONG",
      "EM",
      "B",
      "I",
      "U",
      "SPAN",
      "SUP",
      "SUB",
      "MARK",
      "SMALL",
    ]);

    if (typeof window === "undefined" || typeof DOMParser === "undefined") {
      const plainText = htmlToParse.replace(/<br\s*\/?>/gi, "\n");
      return animateStringWithHighlight(plainText, 0).nodes;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlToParse, "text/html");

    const convertNode = (node, keyPrefix) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const textValue = node.textContent || "";
        const { nodes, newIndex } = animateStringWithHighlight(
          textValue,
          characterIndex
        );
        characterIndex = newIndex;
        return nodes;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toUpperCase();

        if (tagName === "BR") {
          return <br key={`br-${keyPrefix}`} />;
        }

        const children = Array.from(node.childNodes).flatMap((child, idx) =>
          convertNode(child, `${keyPrefix}-${idx}`)
        );

        if (!allowedTags.has(tagName)) {
          return children;
        }

        const Tag = tagName.toLowerCase();
        const classNameAttr = node.getAttribute("class") || undefined;

        return React.createElement(
          Tag,
          {
            key: `${Tag}-${keyPrefix}`,
            ...(classNameAttr ? { className: classNameAttr } : {}),
          },
          children
        );
      }

      return null;
    };

    return Array.from(doc.body.childNodes).flatMap((node, idx) =>
      convertNode(node, `node-${idx}`)
    );
  };

  const renderContent = () => {
    const htmlContent =
      dangerouslySetInnerHTML?.__html ||
      (typeof children === "string" && /<[^>]+>/.test(children)
        ? children
        : null);

    if (htmlContent) {
      return renderHtmlContent(htmlContent);
    }

    const { nodes } = animateStringWithHighlight(children, 0);
    return nodes;
  };

  return (
    <Component ref={ref} className={cn(baseClasses, className)}>
      {renderContent()}
    </Component>
  );
};

export default Title;
