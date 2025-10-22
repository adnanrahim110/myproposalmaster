"use client";

import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Button = ({
  children,
  href,
  onClick,
  type,
  disabled,
  className = "",
  target,
  tone = "primary",
  variant = "outline",
  contentClassName = "",
  showArrow = false,
  size = "md",
}) => {
  const Tag = href ? Link : "button";

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-6 py-2 text-sm";
      case "lg":
        return "px-8 py-4 text-lg";
      case "xl":
        return "px-10 py-5 text-xl";
      default:
        return "px-8 py-3 text-base";
    }
  };

  const getVariantClasses = () => {
    const baseClasses =
      "shadow-lg hover:shadow-xl transform transition-all duration-300 rounded-xl border";

    if (variant === "solid") {
      switch (tone) {
        case "primary":
          return `${baseClasses} border-primary-500 bg-primary-500`;
        case "dark":
          return `${baseClasses} border-black bg-black`;
        case "light":
          return `${baseClasses} border-white bg-white`;
        default:
          return `${baseClasses} border-primary-500 bg-primary-500`;
      }
    } else {
      switch (tone) {
        case "primary":
          return `${baseClasses} border-primary-500 hover:border-primary-600`;
        case "dark":
          return `${baseClasses} border-black`;
        case "light":
          return `${baseClasses} bg-white/10 backdrop-blur-sm border-white/30 hover:border-white/50`;
        default:
          return `${baseClasses} border-primary-500 hover:border-primary-600`;
      }
    }
  };

  return (
    <Tag
      {...(href ? { href, target } : { onClick, type, disabled })}
      className={cn(
        "cursor-pointer font-semibold inline-flex items-center justify-center gap-2 overflow-hidden relative group/btn",
        getSizeClasses(),
        getVariantClasses(),
        className
      )}
    >
      <span
        className={cn(
          "relative z-[1] font-semibold duration-500 flex items-center gap-2",
          variant === "outline" && tone === "dark"
            ? "text-black group-hover/btn:text-white"
            : variant === "outline" && tone === "light"
            ? "text-white group-hover/btn:text-primary-500"
            : variant === "outline" && tone === "primary"
            ? "text-primary-600 group-hover/btn:text-white"
            : variant === "solid" && tone === "dark"
            ? "text-white"
            : variant === "solid" && tone === "light"
            ? "text-black group-hover/btn:text-white"
            : variant === "solid" && tone === "primary"
            ? "text-white group-hover/btn:text-primary-500"
            : "text-primary-600 group-hover/btn:text-white",
          contentClassName
        )}
      >
        <span className="inline-flex items-center justify-center gap-1.5">
          {children}
        </span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        )}
      </span>

      <span
        className={cn(
          "absolute w-full h-full -left-full top-0 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:left-0 duration-500",
          tone === "dark" && variant === "solid"
            ? "bg-primary-500"
            : tone === "dark"
            ? "bg-black"
            : tone === "light" && variant === "solid"
            ? "bg-black"
            : tone === "light"
            ? "bg-white"
            : tone === "primary" && variant === "solid"
            ? "bg-white"
            : "bg-primary-500"
        )}
      ></span>
      <span
        className={cn(
          "absolute w-full h-full -right-full top-0 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:right-0 duration-500",
          tone === "dark" && variant === "solid"
            ? "bg-primary-500"
            : tone === "dark"
            ? "bg-black"
            : tone === "light" && variant === "solid"
            ? "bg-black"
            : tone === "light"
            ? "bg-white"
            : tone === "primary" && variant === "solid"
            ? "bg-white"
            : "bg-primary-500"
        )}
      ></span>
    </Tag>
  );
};

export default Button;
