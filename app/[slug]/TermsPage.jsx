import Hero from "@/components/ui/Hero";
import { BookOpenCheck, ShieldCheck, Sparkles } from "lucide-react";
import React from "react";

const slugify = (text = "") =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const BulletList = ({ items }) => {
  if (!items?.length) return null;

  return (
    <ul className="list-disc space-y-2 pl-6 text-slate-700">
      {items.map((item, idx) => (
        <li key={idx} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
};

const Note = ({ text }) => {
  if (!text) return null;

  return (
    <div className="mt-4 rounded-xl border border-primary-100/60 bg-primary-50/50 px-4 py-3 text-sm text-primary-800">
      {text}
    </div>
  );
};

const ContactList = ({ contacts }) => {
  if (!contacts?.length) return null;

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact, idx) => (
        <div
          key={`${contact.label}-${contact.value}-${idx}`}
          className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 shadow-sm"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {contact.label}
          </div>
          {contact.href ? (
            <a
              href={contact.href}
              className="text-base font-semibold text-primary-600 hover:text-primary-700"
            >
              {contact.value}
            </a>
          ) : (
            <div className="text-base font-semibold">{contact.value}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const SubSection = ({ sub }) => {
  if (!sub) return null;

  return (
    <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 px-5 py-4">
      <h3 className="text-lg font-semibold text-slate-900">{sub.title}</h3>
      {sub.summary && (
        <p className="mt-2 leading-relaxed text-slate-700">{sub.summary}</p>
      )}
      <BulletList items={sub.bullets} />
      <Note text={sub.note} />
    </div>
  );
};

const SectionCard = ({ section }) => {
  const id = slugify(section.heading);

  return (
    <article
      id={id}
      className="rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur md:p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-slate-900">
          {section.heading}
        </h2>
      </div>
      {section.summary && (
        <p className="mt-3 leading-relaxed text-slate-700">{section.summary}</p>
      )}
      {section.content && (
        <p className="mt-3 leading-relaxed text-slate-700">{section.content}</p>
      )}
      <BulletList items={section.bullets} />
      {section.subSections?.length ? (
        <div className="mt-5 space-y-4">
          {section.subSections.map((sub, idx) => (
            <SubSection key={`${sub.title}-${idx}`} sub={sub} />
          ))}
        </div>
      ) : null}
      <Note text={section.note} />
      <ContactList contacts={section.contacts} />
    </article>
  );
};

const TermsPage = ({ term }) => {
  const sections = term?.sections || [];

  return (
    <main className="bg-gradient-to-b from-white via-primary-50/20 to-white">
      <Hero
        backgroundUrl="/imgs/hero-home.webp"
        subtitle="Legal & Trust"
        subtitleIcon={<ShieldCheck className="h-4 w-4" />}
        title={term?.title || "Legal"}
        highlightedText=""
        text="Read how we protect your interests, govern our engagement, and safeguard your data."
        className="pb-12 md:pb-16"
      />

      <div className="relative">
        <div className="absolute inset-x-0 -top-24 bottom-0 bg-gradient-to-b from-slate-900/4 via-white to-white pointer-events-none" />

        <div className="container max-w-6xl relative z-10 -mt-12 space-y-12 md:space-y-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-primary-100/60 bg-white/90 px-5 py-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-600">
                <BookOpenCheck className="h-4 w-4" />
                Contents
              </div>
              <p className="mt-3 text-slate-800">
                Jump to the section you need.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {sections.map((section) => (
                  <a
                    key={section.heading}
                    href={`#${slugify(section.heading)}`}
                    className="rounded-full border border-primary-100 bg-primary-50/70 px-3 py-1 text-xs font-semibold text-primary-700 hover:border-primary-200"
                  >
                    {section.heading}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-primary-100/60 bg-white/90 shadow-sm">
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary-600">
                  <ShieldCheck className="h-4 w-4" />
                  Commitment
                </div>
                <p className="mt-3 text-slate-800">
                  We prioritize clarity, confidentiality, and data security
                  throughout every engagement.
                </p>
              </div>
              <div className="mt-2">
                <div className="px-5 py-4 bg-gray-100 flex items-center gap-2 text-sm font-semibold text-primary-600">
                  <Sparkles className="h-4 w-4" />
                  Snapshot
                </div>
                {term?.lastUpdated && (
                  <p className="mt-2 px-5 text-sm text-slate-500">
                    Last Updated: {term.lastUpdated}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {sections.map((section, idx) => (
              <SectionCard
                key={`${section.heading}-${idx}`}
                section={section}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
