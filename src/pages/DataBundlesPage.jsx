import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { DATA_STORE_URL, whatsappLink } from "../config";

const steps = [
  {
    icon: "📶",
    title: "Pick your network",
    text: "Choose MTN, Telecel or AirtelTigo.",
  },
  {
    icon: "💳",
    title: "Enter number and pay",
    text: "Complete your order in the store below.",
  },
  {
    icon: "💬",
    title: "Order delayed?",
    text: "Message us on WhatsApp and we'll check.",
  },
];

const delayedMessage =
  "Hello, my data order is delayed.\n\nNumber:\nNetwork:\nBundle:\nTime ordered:\nOrder ID (if any):";

function DataBundlesPage() {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);

  // If the store takes too long, show a helpful fallback message
  useEffect(() => {
    const timer = setTimeout(() => setSlow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#e9eff7]">
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Heading */}
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Data Bundles
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Buy Data Instantly
            </h1>
            <p className="mx-auto mt-3 max-w-xl font-medium text-slate-700">
              Buy MTN, Telecel and AirtelTigo data bundles right here. If your
              order is delayed, message us on WhatsApp.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120} className="h-full">
              <div className="h-full rounded-2xl border border-slate-300 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <span className="text-2xl" aria-hidden="true">
                  {step.icon}
                </span>
                <h3 className="mt-2 font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm font-medium text-slate-700">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Embedded store */}
        <Reveal delay={100}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-md">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white px-4 text-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500" />
                <p className="text-sm font-medium text-slate-700">
                  Loading data store…
                </p>
                {slow && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-slate-700">
                      This is taking longer than usual.
                    </p>
                    <a
                      href={DATA_STORE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                      Open the store in a new tab
                    </a>
                  </div>
                )}
              </div>
            )}

            <iframe
              src={DATA_STORE_URL}
              title="Mr Dennis Phones data bundle store"
              onLoad={() => setLoaded(true)}
              allow="payment"
              className="block h-[80vh] min-h-[600px] w-full"
            />
          </div>
        </Reveal>

        <p className="mt-4 text-center text-sm font-medium text-slate-700">
          Store not showing properly?{" "}
          <a
            href={DATA_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-600 underline"
          >
            Open it in a new tab
          </a>
        </p>

        {/* Delayed order banner */}
        <Reveal delay={100}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-slate-900 p-6 text-white sm:flex-row md:p-8">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-extrabold">Order delayed?</h2>
              <p className="mt-1 font-medium text-slate-200">
                Send us a WhatsApp message with your number and bundle, and
                we'll look into it.
              </p>
            </div>
            <a
              href={whatsappLink(delayedMessage)}
              target="_blank"
              rel="noreferrer"
              className="w-full shrink-0 rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
            >
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default DataBundlesPage;
