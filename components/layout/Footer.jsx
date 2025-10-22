"use client";

import { CONTACT_DETAILS, NAVIGATION_LINKS } from "@/constant";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesItem = NAVIGATION_LINKS.find(
    (item) => item.name === "Services"
  );
  const services = servicesItem?.subMenu || [];

  const mainNavItems = NAVIGATION_LINKS.filter(
    (item) => item.name !== "Services" && item.name !== "Home"
  );

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-800/5"></div>

      <div className="relative">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <div className="mb-6">
                    <Image
                      src="/imgs/logo.png"
                      alt="My Proposal Masters"
                      width={200}
                      height={60}
                      className="h-20 w-auto"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Transforming business visions into reality through strategic
                    excellence, innovative solutions, and unwavering commitment
                    to your success.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-3"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-400" />
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        Home
                      </Link>
                    </li>
                    {mainNavItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <div className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="lg:col-span-4"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-400" />
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <div className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="lg:col-span-5"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-400" />
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    {CONTACT_DETAILS.map((contact, idx) => {
                      const Wrapper = contact.href ? "a" : "div";
                      const Icon = contact.icon;
                      return (
                        <Wrapper
                          key={idx}
                          {...(contact.href && {
                            href: contact.href,
                            rel: "noopener noreferrer",
                          })}
                          className="flex items-start gap-3"
                        >
                          <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary-400" />
                          </div>
                          <div className="text-gray-300">
                            <div className="font-medium text-white mb-1">
                              {contact.name} Us
                            </div>
                            <div>1-800-496-1056</div>
                          </div>
                        </Wrapper>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div className="text-gray-400 text-center md:text-left">
                <p className="text-base">
                  &copy; {currentYear} My Proposal Masters. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
