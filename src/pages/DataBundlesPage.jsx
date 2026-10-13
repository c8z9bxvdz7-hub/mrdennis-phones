import Reveal from "../components/Reveal";
import { DATA_STORE_URL, whatsappLink } from "../config";

const networks = ["MTN", "Telecel", "AirtelTigo"];

const steps = [
  {
    icon: "🛒",
    title: "Open the store",
    text: "Tap Buy Data Now to open our data store.",
  },
  {
    icon: "📶",
    title: "Pick and pay",
    text: "Choose your network and bundle, enter the number and pay.",
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
  // On computers, open a neat popup window. On phones, the link opens a new tab.
  const openStore = (e) => {
    if (window.innerWidth < 768) return;
    e.preventDefault();

    const width = 480;
    const height = Math.min(window.screen.availHeight - 80, 860);
    const left = Math.max(0, (window.screen.width - width) / 2);
    const top = Math.max(0, (window.screen.availHeight - height) / 2);

    const popup = window.open(
      DATA_STORE_URL,
      "datastore",
      `width=${width},height=${height},left=${left},top=${top}`,
    );

    if (popup) {
      popup.opener = null;
    } else {
      // Popup was blocked, so open a normal new tab instead
      window.open(DATA_STORE_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-[#e9eff7]">
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
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
              Get MTN, Telecel and AirtelTigo data bundles in a few taps. If
              your order is delayed, message us on WhatsApp.
            </p>
          </div>
        </Reveal>

        {/* Buy card */}
        <Reveal delay={100}>
          <div className="relative mt-10 overflow-hidden rounded-3xl bg-white p-8 text-center shadow-md ring-1 ring-slate-300 md:p-12">
            <div className="animate-float pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-100 blur-3xl" />

            <div className="relative">
              <span className="text-5xl" aria-hidden="true">
                📶
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-3xl">
                Ready to buy data?
              </h2>
              <p className="mx-auto mt-2 max-w-md font-medium text-slate-700">
                Open our data store to see all bundles and prices for every
                network.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {networks.map((network) => (
                  <span
                    key={network}
                    className="rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-200"
                  >
                    {network}
                  </span>
                ))}
              </div>

              <a
                href={DATA_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={openStore}
                className="mt-8 inline-block rounded-lg bg-blue-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Buy Data Now →
              </a>

              <p className="mt-4 text-sm font-medium text-slate-600">
                You'll be taken to our data store to complete your order. Come
                back here anytime if you need help.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
