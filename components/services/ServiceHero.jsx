"use client";

import Button from "@/components/ui/Button";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  organization: "",
  timeline: "",
  notes: "",
};

const ServiceHero = ({ service }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isSubmitted) return undefined;

    const timeoutId = setTimeout(() => setIsSubmitted(false), 3200);

    return () => clearTimeout(timeoutId);
  }, [isSubmitted]);

  const bulletPoints = useMemo(() => {
    if (!service?.features?.length) {
      return [];
    }

    return service.features.slice(0, 6);
  }, [service?.features]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070c16] via-[#0b1324] to-[#101b2f] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,97,55,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute -top-32 -left-16 h-64 w-64 rounded-full bg-primary-400/25 blur-3xl" />
        <div className="absolute bottom-[-40%] right-[-10%] h-[420px] w-[420px] rounded-full bg-primary-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(circle at 80% 75%, rgba(254,97,55,0.4), transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 py-24 lg:py-32">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="space-y-8">
              <div className="space-y-6">
                <Subtitle
                  icon={<Sparkles className="h-4 w-4 text-primary-300" />}
                  textClassName="bg-white/10 backdrop-blur-md border border-white/20 text-white"
                >
                  {service?.title || "Our Services"}
                </Subtitle>

                <Title
                  as="h1"
                  highlightedText={service?.title}
                  className="text-4xl md:text-5xl lg:text-6xl text-white"
                  highlightClassName="text-primary-400"
                >
                  Elevate Your Impact with Expert {service?.title}
                </Title>

                <p className="max-w-2xl text-lg leading-relaxed text-gray-200/90">
                  {service?.description ||
                    "Partner with our team to unlock tailored strategies, experienced execution, and measurable results that move your mission forward."}
                </p>
              </div>

              {bulletPoints.length ? (
                <motion.ul
                  className="grid gap-4 sm:grid-cols-2"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {bulletPoints.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.95)] backdrop-blur"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-400/30 to-primary-500/60 text-primary-100 ring-1 ring-primary-400/50">
                        <CheckCircle2 className="h-5 w-5" />
                      </span>
                      <span className="text-sm md:text-base text-gray-100/95">
                        {feature}
                      </span>
                    </li>
                  ))}
                </motion.ul>
              ) : null}

              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary-300" />
                  <span>Certified specialists on every project</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary-300" />
                  <span>Response within 1 business day</span>
                </div>
              </div>
            </div>

            <motion.div
              className="relative isolate rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.9)] backdrop-blur-2xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-primary-400/30 blur-3xl" />
              <div className="absolute -bottom-28 left-4 h-48 w-48 rounded-full bg-primary-500/15 blur-3xl" />
              <div className="relative z-10 space-y-8">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    Get Your {service?.title} Plan
                  </h2>
                  <p className="text-sm text-gray-300/90">
                    Sign up for a tailored strategy session. We will reach out
                    within one business day to schedule a kickoff call.
                  </p>
                </div>

                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      key="success-banner"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-emerald-200"
                    >
                      <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                      <div className="text-sm">
                        Thanks! A strategist will reach out shortly with next
                        steps.
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <form
                  className="space-y-5"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      icon={UserRound}
                      required
                    />
                    <FormField
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@organization.org"
                      value={formData.email}
                      onChange={handleChange}
                      icon={Mail}
                      required
                    />
                  </div>

                  <FormField
                    label="Organization"
                    id="organization"
                    name="organization"
                    placeholder="Your Organization Name"
                    value={formData.organization}
                    onChange={handleChange}
                  />

                  <FormField
                    label="Timeline"
                    id="timeline"
                    name="timeline"
                    placeholder="When do you need support?"
                    value={formData.timeline}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    label="Project Goals"
                    id="notes"
                    name="notes"
                    placeholder={`Give us a snapshot of what you need from ${service?.title}.`}
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                  />

                  <input
                    type="hidden"
                    name="serviceId"
                    value={service?.id || ""}
                  />

                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      variant="solid"
                      tone="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full justify-center",
                        isSubmitting ? "cursor-wait opacity-80" : ""
                      )}
                      showArrow
                    >
                      {isSubmitting ? "Submitting..." : "Reserve My Session"}
                    </Button>
                    <p className="text-xs text-gray-400/90">
                      By submitting this form you agree to our privacy policy
                      and consent to receive communications about {service?.title}
                      .
                    </p>
                  </div>
                </form>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-xs text-gray-200">
                  <Sparkles className="h-4 w-4 text-primary-200/90" />
                  <span className="tracking-wide">
                    Join 500+ mission-driven organizations already scaling with
                    My Proposal Master.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({
  label,
  id,
  icon: Icon,
  className,
  ...inputProps
}) => {
  return (
    <label className={cn("space-y-2 text-sm text-gray-200", className)}>
      <span className="font-semibold text-gray-100">{label}</span>
      <div className="relative">
        {Icon ? (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-200" />
        ) : null}
        <input
          id={id}
          className={cn(
            "w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30",
            Icon ? "pl-11" : ""
          )}
          {...inputProps}
        />
      </div>
    </label>
  );
};

const FormTextArea = ({
  label,
  id,
  className,
  ...textareaProps
}) => {
  return (
    <label className={cn("space-y-2 text-sm text-gray-200", className)}>
      <span className="font-semibold text-gray-100">{label}</span>
      <textarea
        id={id}
        className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder:text-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
        {...textareaProps}
      />
    </label>
  );
};

export default ServiceHero;
