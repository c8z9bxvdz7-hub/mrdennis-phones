import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

/* Heading used at the top of a section */
export function SectionHeading({ eyebrow, title, text, light }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <p
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-2 text-3xl font-extrabold md:text-4xl ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
        {text && (
          <p
            className={`mt-3 font-medium ${
              light ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {text}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/* The scrolling ticker (pauses when you hover over it) */
export function Marquee({ items, duration }) {
  const set = [...items, ...items, ...items];
  const row = [...set, ...set];
  const seconds = duration ?? items.length * 6.5;

  return (
    <div className="overflow-hidden border-y border-blue-600 bg-blue-500 py-3">
      <div
        className="animate-marquee flex w-max whitespace-nowrap text-sm font-bold uppercase tracking-widest text-white hover:[animation-play-state:paused]"
        style={{ animationDuration: `${seconds}s` }}
      >
        {row.map((item, i) => (
          <span key={i} className="px-5">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* One question that opens and closes */
export function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-300 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-900"
      >
        {q}
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 font-medium leading-relaxed text-slate-700">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* Dark hero at the top of a page. The design goes inside it as children. */
const HERO_BUTTONS = {
  primary:
    "w-full rounded-lg bg-blue-500 px-8 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400 sm:w-auto",
  light:
    "w-full rounded-lg bg-white px-8 py-3 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto",
};

export function PageHero({
  eyebrow,
  title,
  highlight,
  text,
  actions = [],
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="animate-float pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
      <div
        className="animate-float pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:py-24">
        <div className="text-center md:text-left">
          <Reveal>
            <p className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white ring-1 ring-white/25">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              {title} <span className="text-blue-400">{highlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg font-medium text-slate-200">
              {text}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              {actions.map((action) => {
                const className = HERO_BUTTONS[action.variant || "primary"];
                if (action.to) {
                  return (
                    <Link
                      key={action.text}
                      to={action.to}
                      className={className}
                    >
                      {action.text}
                    </Link>
                  );
                }
                return (
                  <a
                    key={action.text}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    className={className}
                  >
                    {action.text}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal direction="zoom" delay={200}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/* A grid of cards with an icon, a title and a short text */
export function IconCards({
  items,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
  centered = false,
}) {
  return (
    <div className={`grid gap-6 ${cols}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 120} className="h-full">
          <div
            className={`group h-full rounded-2xl border border-slate-300 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 ${
              centered ? "text-center" : ""
            }`}
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl ring-1 ring-blue-200 transition duration-300 group-hover:scale-110 group-hover:bg-blue-100 ${
                centered ? "mx-auto" : ""
              }`}
            >
              {item.icon}
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 font-medium leading-relaxed text-slate-700">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* Numbered steps with arrows between them */
export function Steps({ steps }) {
  const cols = steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <div className={`grid gap-6 ${cols}`}>
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 150} className="relative h-full">
          <div className="h-full rounded-2xl border border-slate-300 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-2xl shadow-lg shadow-blue-500/30 ring-4 ring-blue-100">
              {step.icon}
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Step {i + 1}
            </p>
            <h3 className="mt-1 text-lg font-extrabold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
              {step.text}
            </p>
          </div>
          {i < steps.length - 1 && (
            <span className="absolute -right-[22px] top-1/2 z-10 hidden -translate-y-1/2 text-xl text-blue-500 md:block">
              ➜
            </span>
          )}
        </Reveal>
      ))}
    </div>
  );
}

/* Blue closing banner with a WhatsApp button */
export function CtaBand({ title, text, buttonText, href }) {
  return (
    <section className="px-4 py-16 md:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-center text-white shadow-2xl shadow-blue-500/30 md:p-14">
          <div className="animate-float pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl font-extrabold md:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl font-medium text-blue-100">
            {text}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            {buttonText}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
