"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

const ServicesShowcase = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const serviceOptions = [
    { value: "", label: "Select Your Service" },
    { value: "grant-writing", label: "Grant Writing" },
    { value: "consulting", label: "Business Consulting" },
    { value: "program-development", label: "Program Development" },
    { value: "fundraising", label: "Event Fundraising" },
    { value: "interim-personnel", label: "Interim Personnel" },
  ];

  const services = [
    {
      id: 1,
      title: "Grant Proposal Writing",
      subtitle: "Crafting clear, compelling proposals",
      description:
        "Crafting clear, compelling, and funder-focused proposals that highlight your mission’s impact. From narrative to budget, we handle every component with precision.",
      imagePath: "/imgs/services/1.webp",
      buttonText: "Learn More",
      link: "/grant-writing",
      color: "from-green-600 to-green-700",
    },
    {
      id: 2,
      title: "Grant Research & Prospecting",
      subtitle: "Finding the right opportunities",
      description:
        "Finding the right opportunities is half the battle. Our team researches funding sources aligned with your mission, increasing your chances of success.",
      imagePath: "/imgs/services/2.webp",
      buttonText: "Explore Research",
      link: "/grant-research",
      color: "from-teal-600 to-teal-700",
    },
    {
      id: 3,
      title: "Editing & Review Services",
      subtitle: "Refine drafts for maximum impact",
      description:
        "Already have a draft? We refine it to ensure compliance, clarity, and persuasiveness so that funders see your proposal at its best.",
      imagePath: "/imgs/services/3.webp",
      buttonText: "Request Edit",
      link: "/editing-review",
      color: "from-amber-600 to-amber-700",
    },
    {
      id: 4,
      title: "Budget Planning Assistance",
      subtitle: "Align numbers with your narrative",
      description:
        "A strong budget tells a powerful story. We help you align your numbers with your narrative to create a funder-ready plan.",
      imagePath: "/imgs/services/1.webp",
      buttonText: "View Budget Help",
      link: "/budget-planning",
      color: "from-indigo-600 to-indigo-700",
    },
    {
      id: 5,
      title: "Training & Workshops",
      subtitle: "Empower your team",
      description:
        "For teams that want to strengthen in-house skills, we provide training that demystifies the grant writing process and empowers staff to succeed.",
      imagePath: "/imgs/services/2.webp",
      buttonText: "Schedule Training",
      link: "/training-workshops",
      color: "from-purple-600 to-purple-700",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          subtitle="Our Services"
          title="What We Do For You?"
          titleLevel="h2"
          highlightedText="For You"
          description="Explore the services designed to help you secure funding faster and smarter."
          subtitleIcon="🚀"
          maxWidth="max-w-5xl"
        />

        <div className="grid lg:grid-cols-5 gap-5 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-neutral-200 rounded-2xl transition-all duration-500 overflow-hidden h-full"
            >
              <div className="relative p-5">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  width={323}
                  height={179}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3 text-base">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group/link transition-all duration-300 hover:gap-3 relative"
                >
                  <span className="relative">
                    {service.buttonText}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:scale-110 transition-all duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto max-w-4xl">
          <div className="relative w-full" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white border-2 border-gray-200 hover:border-primary-300 rounded-xl px-8 py-4 text-left text-gray-700 font-semibold focus:outline-none focus:border-primary-500 transition-colors duration-300 cursor-pointer flex items-center justify-between"
            >
              <span>
                {serviceOptions.find(
                  (option) => option.value === selectedService
                )?.label || "Select Your Service"}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl overflow-hidden z-50">
                {serviceOptions.slice(1).map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedService(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-8 py-4 text-left text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="shrink-0">
            <Button
              href="/contact"
              variant="solid"
              tone="primary"
              size="lg"
              showArrow={true}
            >
              Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
