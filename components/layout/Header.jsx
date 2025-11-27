"use client";

import { NAVIGATION_LINKS } from "@/constant";
import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const updateLinePosition = (index) => {
    if (navRef.current && index !== null) {
      const navItems = navRef.current.children;
      const actualIndex = index + 1;
      if (navItems[actualIndex]) {
        const item = navItems[actualIndex].querySelector("a, div");
        if (item) {
          const navRect = navRef.current.getBoundingClientRect();
          const itemRect = item.getBoundingClientRect();
          setLineStyle({
            left: itemRect.left - navRect.left,
            width: itemRect.width,
            opacity: 1,
          });
        }
      }
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    updateLinePosition(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setLineStyle({ left: 0, width: 0, opacity: 0 });
  };

  const handleDropdownClick = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeDropdown]);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "w-full top-0 left-0 z-[999] h-20 py-2.5 transition-all duration-300",
        pathname !== "/" ? "relative bg-primary-950 shadow-sm" : "absolute"
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between w-full">
          <div>
            <Link href="/">
              <Image
                width={256}
                height={65}
                src="/imgs/logo.png"
                alt="My Proposal Master"
                className="w-full h-auto max-w-3xs"
              />
            </Link>
          </div>
          <ul
            ref={navRef}
            className="hidden lg:flex items-center justify-center gap-10 relative"
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-primary-100 transition-all duration-500 ease-out"
              style={{
                left: `${lineStyle.left}px`,
                width: `${lineStyle.width}px`,
                opacity: hoveredIndex !== null ? lineStyle.opacity : 0,
              }}
            />
            {NAVIGATION_LINKS.map((navLink, idx) => {
              const Wrapper = navLink.href ? Link : "div";
              const isActive =
                (navLink.href && pathname === navLink.href) ||
                activeDropdown === idx;

              return (
                <li
                  key={idx}
                  className="inline-block relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  ref={activeDropdown === idx ? dropdownRef : null}
                >
                  <Wrapper
                    {...(navLink.href &&
                      !navLink.subMenu && { href: navLink.href })}
                    onClick={
                      navLink.subMenu
                        ? (e) => handleDropdownClick(idx, e)
                        : undefined
                    }
                    className={cn(
                      "text-white font-medium inline-flex items-center gap-1.5 py-1 transition-all duration-300 relative cursor-pointer",
                      !isActive && "hover:text-primary",
                      isActive && "text-primary font-semibold",
                      "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300",
                      isActive
                        ? "after:bg-gradient-to-r after:from-primary after:to-primary-200 after:opacity-100"
                        : "after:opacity-0"
                    )}
                  >
                    <span className="relative z-10">{navLink.name}</span>
                    {navLink.subMenu && (
                      <span
                        className={cn(
                          "relative z-10 transition-all duration-500 drop-shadow-sm",
                          activeDropdown === idx
                            ? "rotate-180 scale-125 text-primary-200"
                            : "hover:rotate-180 hover:scale-125 hover:text-primary-200"
                        )}
                      >
                        <ChevronDown size={13} strokeWidth={3} />
                      </span>
                    )}
                  </Wrapper>

                  {navLink.subMenu && activeDropdown === idx && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-max">
                      <div className="opacity-100 visible translate-y-0 transition-all duration-500 ease-out transform">
                        <div className="bg-white backdrop-blur-xl border-2 border-gray-200/50 w-max overflow-hidden relative">
                          <div className="relative min-w-64">
                            {navLink.subMenu.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  "block pl-4 pr-20 py-3 text-gray-700 font-medium transition-all duration-400 relative overflow-hidden group/item text-base",
                                  pathname !== subItem.href &&
                                    "hover:bg-gradient-to-r hover:from-primary-50/80 hover:via-primary-25/60 hover:to-primary-50/80 hover:text-primary-800 hover:translate-x-3",
                                  "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary-400 before:via-primary-500 before:to-primary-600",
                                  pathname !== subItem.href &&
                                    "before:scale-y-0 hover:before:scale-y-100 before:transition-all before:duration-500 before:origin-bottom",
                                  "after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:opacity-0 after:transition-all after:duration-400 after:transform after:-translate-x-4",
                                  pathname !== subItem.href &&
                                    "hover:after:opacity-70 hover:after:translate-x-0 after:content-['→'] after:text-primary-600 after:font-bold after:text-lg",
                                  pathname === subItem.href &&
                                    "bg-gradient-to-r from-primary-100/60 via-primary-75/40 to-primary-100/60 text-primary-900 font-semibold before:scale-y-100",
                                  "border-b border-gray-200/40 last:border-b-0",
                                  pathname !== subItem.href &&
                                    "hover:border-primary-200/30",
                                  "opacity-100 translate-y-0"
                                )}
                                style={{
                                  transitionDelay: `${subIdx * 50}ms`,
                                }}
                              >
                                <span className="relative z-10 tracking-wide">
                                  {subItem.name}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent translate-x-full group-hover/item:translate-x-0 transition-transform duration-600" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
