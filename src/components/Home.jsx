import { whatsappLink } from "../config";
import Reveal from "./Reveal";

const highlights = [
  { icon: "✅", title: "Quality-checked", text: "Phones checked before sale" },
  { icon: "🔄", title: "Swaps welcome", text: "Trade in your old phone" },
  { icon: "⚡", title: "Data bundles", text: "Top up at fair prices" },
];

function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#e9eff7]">
      {/* Soft blue glows */}
      <div className="animate-float pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-200 blur-3xl" />
      <div
        className="animate-float pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-sky-200 blur-3xl"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-28">
        {/* Text */}
        <div className="text-center md:text-left">
          <Reveal>
            <p className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
              📍 Accra, Ghana
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Buy, Sell & Swap Phones
              <span className="block text-blue-500">with Confidence</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg font-medium text-slate-800 md:max-w-lg">
              Genuine phones at fair prices, easy swaps, data bundles and iPhone
              accessories, all in one place.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start sm:justify-center">
              <a
                href="#phones"
                className="w-full rounded-lg bg-blue-500 px-8 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600 sm:w-auto"
              >
                Browse Phones
              </a>
              <a
                href={whatsappLink("Hello, I want to swap my phone.")}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-lg bg-slate-900 px-8 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black sm:w-auto"
              >
                Swap Your Phone
              </a>
            </div>
          </Reveal>
        </div>

        {/* Phone illustration */}
        <Reveal direction="zoom" delay={200}>
          <div className="relative mx-auto w-fit">
            <div className="animate-float relative h-[420px] w-[210px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl shadow-blue-500/30">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                <span className="text-6xl">📱</span>
                <p className="mt-4 text-lg font-bold">Mr Dennis</p>
                <p className="text-sm text-blue-100">Phones</p>
              </div>
            </div>

            <div
              className="animate-float absolute -left-10 top-20 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200"
              style={{ animationDelay: "-1.5s" }}
            >
              ✅ Quality-checked
            </div>
            <div
              className="animate-float absolute -right-10 bottom-24 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200"
              style={{ animationDelay: "-4s" }}
            >
              🔄 Swaps welcome
            </div>
          </div>
        </Reveal>
      </div>

      {/* Highlights */}
      <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="h-full">
              <div className="h-full rounded-2xl border border-slate-300 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-2 font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm font-medium text-slate-700">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
