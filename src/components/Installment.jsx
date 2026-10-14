import { useState } from "react";
import Reveal from "./Reveal";
import useInView from "../hooks/useInView";
import { whatsappLink } from "../config";

const DEPOSIT_RATE = 0.4;
const QUICK_PRICES = [3000, 5000, 8000, 12000];

const STEPS = [
  {
    icon: "📱",
    title: "Choose your phone",
    text: "Pick the phone you want from our collection.",
  },
  {
    icon: "💳",
    title: "Pay 40% to start",
    text: "Pay 40% of the price first.",
  },
  {
    icon: "📅",
    title: "Pay the rest over time",
    text: "Pay the remaining amount weekly or monthly.",
  },
];

const formatCedis = (amount) => `GH₵ ${amount.toLocaleString()}`;

function Installment() {
  const [price, setPrice] = useState("5000");
  const [cardRef, inView] = useInView(0.3);

  const value = Number(price) || 0;
  const deposit = Math.round(value * DEPOSIT_RATE);
  const balance = value - deposit;

  return (
    <section
      id="installment"
      className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-24"
    >
      <div className="animate-float pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
      <div
        className="animate-float pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Flexible payment
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-5xl">
              Buy on installment
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-5 space-y-4 font-medium leading-relaxed text-slate-200">
              <p>
                Want a phone but cannot pay the full amount in one go? Buy on
                installment. Pay 40% to start, then pay the rest weekly or
                monthly.
              </p>
              <p>
                That way, you do not need to buy everything at once. Use the
                calculator to see how a phone's price splits, then chat with us
                to set up your plan.
              </p>
            </div>
          </Reveal>

          <ol className="mt-8 space-y-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={150 + i * 150}>
                <li className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl shadow-lg shadow-blue-500/30">
                    {step.icon}
                  </span>
                  <div>
                    <p className="font-bold">
                      {i + 1}. {step.title}
                    </p>
                    <p className="text-sm font-medium text-slate-300">
                      {step.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={500}>
            <a
              href={whatsappLink(
                "Hello, I want to buy a phone on installment.\n\nPhone I want:\nMy budget:",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Ask about installment on WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Calculator */}
        <Reveal direction="zoom" delay={200}>
          <div
            ref={cardRef}
            className="relative rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-blue-500/20 md:p-8"
          >
            <span className="animate-float absolute -right-3 -top-6 text-4xl">
              🪙
            </span>
            <span
              className="animate-float absolute -left-3 bottom-16 text-3xl"
              style={{ animationDelay: "-2s" }}
            >
              💳
            </span>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Installment calculator
            </p>

            <label
              htmlFor="phone-price"
              className="mt-4 block text-sm font-semibold text-slate-700"
            >
              Phone price
            </label>
            <div className="mt-2 flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
              <span className="font-bold text-slate-500">GH₵</span>
              <input
                id="phone-price"
                inputMode="numeric"
                maxLength={8}
                value={price}
                onChange={(e) => setPrice(e.target.value.replace(/\D/g, ""))}
                className="w-full bg-transparent px-3 py-3 text-xl font-extrabold text-slate-900 outline-none"
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK_PRICES.map((quick) => (
                <button
                  key={quick}
                  type="button"
                  onClick={() => setPrice(String(quick))}
                  className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                    value === quick
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {quick.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Animated bar */}
            <div className="mt-7 flex h-5 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                style={{ width: inView ? "40%" : "0%" }}
              />
              <div
                className="animate-stripes h-full transition-all duration-1000 ease-out"
                style={{
                  width: inView ? "60%" : "0%",
                  transitionDelay: "600ms",
                  backgroundColor: "#0f172a",
                  backgroundImage:
                    "linear-gradient(45deg, rgba(255,255,255,.18) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.18) 50%, rgba(255,255,255,.18) 75%, transparent 75%)",
                  backgroundSize: "28px 28px",
                }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs font-bold">
              <span className="text-blue-600">40% first</span>
              <span className="text-slate-700">60% weekly or monthly</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Pay first (40%)
                </p>
                <p className="mt-1 text-xl font-extrabold text-blue-600 md:text-2xl">
                  {formatCedis(deposit)}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 ring-1 ring-slate-300">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                  The rest (60%)
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900 md:text-2xl">
                  {formatCedis(balance)}
                </p>
                <p className="text-xs font-medium text-slate-600">
                  weekly or monthly
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-slate-600">
              Example only, based on paying 40% first. Chat with us to agree
              your plan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Installment;
