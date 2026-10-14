import { useState } from "react";
import Reveal from "../components/Reveal";
import Installment from "../components/Installment";
import { SwapDesign, Stage } from "../components/Services";
import { whatsappLink } from "../config";

/* ---------- Text. EDIT IT HERE ---------- */

const MARQUEE = [
  "🔄 Swap",
  "📱 Upgrade",
  "💬 Chat first",
  "🆕 Brand new",
  "✈️ UK used",
  "📍 Ghana used",
  "🏷️ Discounted",
];

const STEPS = [
  {
    icon: "💬",
    title: "Message us",
    text: "Start a chat with us on WhatsApp and tell us you want to swap.",
  },
  {
    icon: "📋",
    title: "Share the details",
    text: "Send your phone's model, storage and condition, and the iPhone you want.",
  },
  {
    icon: "💰",
    title: "Get the difference",
    text: "We tell you how much to add to get the iPhone you want.",
  },
  {
    icon: "📱",
    title: "Complete your swap",
    text: "Add the difference and take your different iPhone.",
  },
];

// DRAFT: change these to match the phones you really accept and offer
const SWAP_OPTIONS = [
  {
    icon: "📱",
    title: "iPhone to a newer iPhone",
    text: "Move up to a newer model by adding the difference.",
  },
  {
    icon: "🆕",
    title: "Into a brand new iPhone",
    text: "Put your phone towards a brand new iPhone and add the rest.",
  },
  {
    icon: "✈️",
    title: "Into a UK used iPhone",
    text: "Choose a UK used iPhone for a more affordable upgrade.",
  },
  {
    icon: "📍",
    title: "Into a Ghana used iPhone",
    text: "Pick a Ghana used iPhone and swap with cash added.",
  },
  {
    icon: "🏷️",
    title: "Into a discounted iPhone",
    text: "Keep an eye out for discounted iPhones and swap into one.",
  },
  {
    icon: "❓",
    title: "Other phones",
    text: "Not an iPhone? Send us the model and condition and we will tell you if we can take it.",
  },
];

// DRAFT: change these to what you really need to see
const CHECKLIST = [
  "Your phone's model, for example iPhone 12",
  "Storage, for example 64GB or 128GB",
  "Condition of the screen and the body",
  "Battery health, if it is an iPhone",
  "A few clear photos of your phone",
  "The iPhone you would like to swap into",
];

const BENEFITS = [
  {
    icon: "🤝",
    title: "One simple deal",
    text: "Swap and upgrade in one go, without selling your old phone separately.",
  },
  {
    icon: "💬",
    title: "Start on WhatsApp",
    text: "No long forms. Chat with us and get a quick idea of what to add.",
  },
  {
    icon: "📱",
    title: "Plenty of choice",
    text: "Brand new, UK used, Ghana used, locked and discounted iPhones.",
  },
  {
    icon: "💰",
    title: "A clear difference",
    text: "We tell you how much to add, so you know the cost before you decide.",
  },
];

const FAQS = [
  {
    q: "Which phones can I swap?",
    a: "Send us your phone's model, storage and condition on WhatsApp and we will tell you if we can take it. Not sure? Just ask.",
  },
  {
    q: "How much will I need to add?",
    a: "It depends on your phone and the iPhone you want. Tell us both and we will tell you the difference.",
  },
  {
    q: "Can I swap into a brand new iPhone?",
    a: "You can choose from the iPhones we have, including brand new, UK used, Ghana used, locked and discounted iPhones. Check the Phones page or ask us what is available.",
  },
  {
    q: "Do I need to sell my old phone first?",
    a: "No. In a swap, your phone goes towards the iPhone you want, and you add the difference.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes, you can buy on installment: pay 40% first, then pay the rest weekly or monthly. See the installment section below, or ask us on WhatsApp.",
  },
];

const swapMessage =
  "Hello, I want to swap my phone.\n\nMy phone model:\nStorage:\nCondition:\nBattery health:\nThe iPhone I want:";

/* ---------- Small pieces ---------- */

function SectionHeading({ eyebrow, title, text, light }) {
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

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y border-blue-600 bg-blue-500 py-3">
      <div className="animate-marquee flex w-max whitespace-nowrap text-sm font-bold uppercase tracking-widest text-white">
        {row.map((item, i) => (
          <span key={i} className="px-5">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
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

/* ---------- The page ---------- */

function SwapPage() {
  return (
    <div className="bg-[#e9eff7]">
      {/* Hero */}
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
                🔄 Swap & Trade-in
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Swap up to a{" "}
                <span className="text-blue-400">different iPhone</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg font-medium text-slate-200">
                Bring the phone you have, add the difference in cash, and leave
                with a different iPhone. No need to sell your old phone first.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={whatsappLink(swapMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-lg bg-blue-500 px-8 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400 sm:w-auto"
                >
                  Start a Swap on WhatsApp
                </a>
                <a
                  href="#how-it-works"
                  className="w-full rounded-lg bg-white px-8 py-3 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto"
                >
                  How it works
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="zoom" delay={200}>
            <Stage>
              <SwapDesign />
            </Stage>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="How it works"
            title="Swapping in four simple steps"
            text="From the first message to your different iPhone."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 150}
                className="relative h-full"
              >
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
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-[22px] top-1/2 z-10 hidden -translate-y-1/2 text-xl text-blue-500 md:block">
                    ➜
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you can swap */}
      <section className="bg-white/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="What you can swap"
            title="Your phone, towards the one you want"
            text="Here are some of the swaps people ask us for."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SWAP_OPTIONS.map((option, i) => (
              <Reveal
                key={option.title}
                delay={(i % 3) * 120}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-slate-300 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl ring-1 ring-blue-200 transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                    {option.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    {option.title}
                  </h3>
                  <p className="mt-2 font-medium leading-relaxed text-slate-700">
                    {option.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to send us */}
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-24">
        <div className="animate-float pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
          <Reveal direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Before you message us
              </p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                What to send us
              </h2>
              <p className="mt-4 font-medium leading-relaxed text-slate-200">
                The more we know about your phone, the quicker we can tell you
                how much to add. Send these details on WhatsApp, and tell us
                which iPhone you want.
              </p>
              <a
                href={whatsappLink(swapMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Send my phone details
              </a>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item, i) => (
              <Reveal key={item} delay={i * 100} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold">
                    ✓
                  </span>
                  <p className="pt-0.5 text-sm font-semibold text-slate-100">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why swap with us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Why swap with us"
            title="Upgrading made easier"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 120} className="h-full">
                <div className="h-full rounded-2xl border border-slate-300 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                  <span className="text-4xl">{benefit.icon}</span>
                  <h3 className="mt-3 text-lg font-extrabold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                    {benefit.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/60 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            eyebrow="Questions"
            title="Swap questions, answered"
          />
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 80}>
                <FaqItem q={faq.q} a={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Installment */}
      <Installment />

      {/* Final call to action */}
      <section className="px-4 py-16 md:py-24">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-center text-white shadow-2xl shadow-blue-500/30 md:p-14">
            <div className="animate-float pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <h2 className="relative text-3xl font-extrabold md:text-4xl">
              Ready to swap?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl font-medium text-blue-100">
              Message us your phone's details and the iPhone you want, and we
              will tell you what to add.
            </p>
            <a
              href={whatsappLink(swapMessage)}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start a Swap on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default SwapPage;
