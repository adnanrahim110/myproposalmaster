"use client";

import { CONTACT_DETAILS } from "@/constant";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState("phone");

  const services = [
    "Business Plan Writing",
    "Grant Writing",
    "Consulting Services",
    "Program Development",
    "Interim Personnel",
    "Event & Fundraising",
    "Legal Services",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleServiceSelect = (service) =>
    setFormData((p) => ({ ...p, service }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2500);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(254,57,17,0.12), transparent 40%), radial-gradient(circle at 85% 90%, rgba(59,130,246,0.1), transparent 45%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Let's Connect"
          title="Ready to Get Started?"
          description="Tell us about your project. A strategist will review and get back within 1 business day."
          className="mb-16 text-left lg:text-center"
          maxWidth="max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-gray-200 bg-white p-6 md:p-8 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400" />
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 rounded-xl border border-green-200 bg-green-50 text-green-800 px-4 py-3 flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Message sent. We’ll get back within 1 business day.
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 flex-1 flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-gray-900 placeholder-gray-500 font-medium text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-gray-900 placeholder-gray-500 font-medium text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What service are you interested in?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((svc) => {
                      const active = formData.service === svc;
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceSelect(svc)}
                          aria-pressed={active}
                          className={`rounded-xl text-left px-4 py-2 text-sm font-medium border transition-colors ${
                            active
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-200 hover:border-primary-300 text-gray-700"
                          }`}
                        >
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-gray-900 placeholder-gray-500 resize-none font-medium text-base"
                  />
                </div>
                <div className="mt-auto flex items-center justify-between gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="min-w-48"
                    variant="solid"
                    tone="primary"
                    showArrow
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Consultation
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-full"
          >
            <div className="h-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-primary-100 bg-white relative flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -right-20 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
              </div>

              <div className="relative p-8 md:p-10 text-center">
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                  MP
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Concierge Support
                </h4>
                <p className="text-gray-600">
                  Real humans. Fast responses. Choose how you’d like to connect.
                </p>
              </div>

              <div className="relative px-8 md:px-10 pb-8">
                <div className="hidden">
                  {CONTACT_DETAILS.map((contact, idx) => {
                    const Wrapper = contact.href ? "a" : "div";
                    const Icon = contact.icon;
                    const colSpan =
                      contact.name === "Visit" ? "sm:col-span-2" : "";
                    return (
                      <Wrapper
                        key={idx}
                        {...(contact.href && {
                          href: contact.href,
                          rel: "noopener noreferrer",
                        })}
                        className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-md p-5 transition-all hover:border-primary-300 ${colSpan}`}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-50 to-transparent transition-opacity" />

                        <div className="relative z-10 flex items-center gap-3">
                          <span className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center ring-1 ring-primary-100">
                            <Icon className="w-5 h-5" />
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm text-gray-600 truncate">
                              {contact.name === "Call"
                                ? "Call Now"
                                : contact.name === "Email"
                                ? "Email"
                                : "Visit Us"}
                            </div>
                            <div className="font-semibold text-gray-900 group-hover:text-primary-700 truncate">
                              {contact.value}
                            </div>
                          </div>
                          <span className="ml-auto text-primary-600/80 group-hover:text-primary-700 transition-colors">
                            →
                          </span>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>
                {/* Premium concierge layout */}
                {(() => {
                  const phone = CONTACT_DETAILS.find((c) => c.name === "Call");
                  const email = CONTACT_DETAILS.find((c) => c.name === "Email");
                  const visit = CONTACT_DETAILS.find((c) => c.name === "Visit");
                  const PhoneIcon = phone?.icon;
                  const MailIcon = email?.icon;
                  const VisitIcon = visit?.icon;
                  return (
                    <div className="space-y-4">
                      <a
                        href={phone?.href || "tel:"}
                        className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 hover:border-primary-300 transition-colors"
                        aria-label="Call us"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center ring-1 ring-primary-100">
                            {PhoneIcon ? (
                              <PhoneIcon className="w-5 h-5" />
                            ) : (
                              <Phone className="w-5 h-5" />
                            )}
                          </span>
                          <div className="text-left">
                            <div className="text-sm text-gray-600">
                              Call Now
                            </div>
                            <div className="font-semibold text-gray-900 group-hover:text-primary-700">
                              {phone?.value}
                            </div>
                          </div>
                        </div>
                        <span className="text-primary-600/80 group-hover:text-primary-700">
                          →
                        </span>
                      </a>

                      <a
                        href={email?.href || "mailto:"}
                        className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 hover:border-primary-300 transition-colors"
                        aria-label="Email us"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center ring-1 ring-primary-100">
                            {MailIcon ? (
                              <MailIcon className="w-5 h-5" />
                            ) : (
                              <Mail className="w-5 h-5" />
                            )}
                          </span>
                          <div className="text-left">
                            <div className="text-sm text-gray-600">Email</div>
                            <div className="font-semibold text-gray-900 group-hover:text-primary-700 break-all">
                              {email?.value}
                            </div>
                          </div>
                        </div>
                        <span className="text-primary-600/80 group-hover:text-primary-700">
                          →
                        </span>
                      </a>

                      <div className="rounded-2xl border border-gray-200 bg-white p-5">
                        <div className="flex items-start gap-3">
                          <span className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center ring-1 ring-primary-100">
                            {VisitIcon ? (
                              <VisitIcon className="w-5 h-5" />
                            ) : null}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-600">
                              Visit Us
                            </div>
                            <div className="font-semibold text-gray-900 truncate">
                              {visit?.value}
                            </div>
                            <div className="mt-3 h-24 w-full rounded-xl bg-[linear-gradient(135deg,rgba(254,57,17,0.12),transparent_40%),linear-gradient(45deg,rgba(59,130,246,0.12),transparent_45%)] border border-gray-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
