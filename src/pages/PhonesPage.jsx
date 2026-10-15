import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Phones from "../components/Phones";
import useInView from "../hooks/useInView";
import { phones } from "../data/phones";
import { SectionHeading, FaqItem } from "../components/PageParts";
import { whatsappLink } from "../config";

/* ---------- Numbers worked out from your phones.js ---------- */

const inStock = phones.filter((p) => p.inStock);
const brandCount = new Set(phones.map((p) => p.brand)).size;
const lowest = inStock.length ? Math.min(...inStock.map((p) => p.price)) : null;
const featured = (inStock.length ? inStock : phones).slice(0, 3);

const STATS = [
  { value: inStock.length, label: "phones in stock" },
  { value: brandCount, label: brandCount === 1 ? "brand" : "brands" },
  lowest !== null && {
    value: `GH₵ ${lowest.toLocaleString()}`,
    label: "starting from",
  },
].filter(Boolean);

/* ---------- Text. EDIT IT HERE ---------- */

const TRUST = [
  { icon: "💬", text: "Order on WhatsApp" },
  { icon: "💰", text: "Prices in Ghana cedis" },
  { icon: "🔄", text: "Swaps welcome" },
  { icon: "💳", text: "Pay on installment" },
];

// DRAFT: my plain-language descriptions. Change them to match how you describe each type
const TYPES = [
  {
    icon: "🆕",
    tint: "bg-blue-100",
    title: "Brand new iPhones",
    text: "A phone that has not been used before, for when you want the latest.",
    ask: "Hello, I am looking for a brand new iPhone.\n\nModel:\nMy budget:",
  },
  {
    icon: "✈️",
    tint: "bg-sky-100",
    title: "UK used iPhones",
    text: "iPhones used in the UK before coming to Ghana, a more affordable way to get an iPhone.",
    ask: "Hello, I am looking for a UK used iPhone.\n\nModel:\nMy budget:",
  },
  {
    icon: "📍",
    tint: "bg-indigo-100",
    title: "Ghana used iPhones",
    text: "iPhones used here in Ghana, a budget-friendly choice.",
    ask: "Hello, I am looking for a Ghana used iPhone.\n\nModel:\nMy budget:",
  },
  {
    icon: "🔒",
    tint: "bg-blue-100",
    title: "Locked iPhones",
    text: "iPhones tied to a particular network. Ask us how they work before you buy.",
    ask: "Hello, I would like to know about locked iPhones.\n\nModel:\nMy budget:",
  },
  {
    icon: "🏷️",
    tint: "bg-sky-100",
    title: "Discounted iPhones",
    text: "Selected iPhones at reduced prices. Offers change, so check the list or ask us.",
    ask: "Hello, I am looking for a discounted iPhone.\n\nModel:\nMy budget:",
  },
  {
    icon: "🤖",
    tint: "bg-indigo-100",
    title: "Android phones",
    text: "Android phones for those who prefer them. Ask us what is available.",
    ask: "Hello, I am looking for an Android phone.\n\nModel:\nMy budget:",
  },
];

const STEPS = [
  {
    icon: "🔎",
    title: "Browse",
    text: "Look through the phones and filter by brand, or search for a model.",
  },
  {
    icon: "👆",
    title: "Tap for details",
    text: "Tap a phone to see a bigger photo, its price and its condition.",
  },
  {
    icon: "💬",
    title: "Order on WhatsApp",
    text: "Send your order on WhatsApp. The phone's details are filled in for you.",
  },
];

const BENEFITS = [
  {
    icon: "💸",
    title: "Choice for every budget",
    text: "Brand new, UK used, Ghana used, locked and discounted iPhones.",
  },
  {
    icon: "📸",
    title: "See before you ask",
    text: "Photos and prices in Ghana cedis, and a bigger view with all the details.",
  },
  {
    icon: "⚡",
    title: "Order in a tap",
    text: "WhatsApp opens with the phone's details already filled in.",
  },
  {
    icon: "🔄",
    title: "Swap or pay in parts",
    text: "Swap your phone, or pay 40% first and the rest weekly or monthly.",
  },
];

const FAQS = [
  {
    q: "What is the difference between UK used and Ghana used iPhones?",
    a: "UK used iPhones were used in the UK before coming to Ghana, while Ghana used iPhones were used here. Ask us about the specific phones we have available.",
  },
  {
    q: "What is a locked iPhone?",
    a: "A locked iPhone is tied to a particular network. Ask us how it works and whether it suits you before you buy.",
  },
  {
    q: "Are the prices in Ghana cedis?",
    a: "Yes, all prices on this page are in Ghana cedis (GH₵).",
  },
  {
    q: "How do I order?",
    a: "Tap a phone to see its details, then order on WhatsApp. The phone's details are filled in for you.",
  },
  {
    q: "Is the phone I see still available?",
    a: "Availability changes. Phones marked Sold out are not available right now. Message us on WhatsApp to check.",
  },
  {
    q: "Can I swap my phone or pay in installments?",
    a: "Yes. Visit our Swap page to swap your phone, or buy on installment: pay 40% first, then pay the rest weekly or monthly.",
  },
];

/* ---------- Hero showcase ---------- */

const SHOWCASE_POSITIONS = [
  "left-0 top-14 -rotate-6",
  "left-1/2 top-0 z-10 -translate-x-1/2",
  "right-0 top-20 rotate-6",
];

function ShowcaseCard({ phone }) {
  return (
    <div className="w-40 overflow-hidden rounded-2xl bg-white shadow-xl shadow-blue-500/20 ring-1 ring-slate-200 md:w-52">
      <div className="flex h-28 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 md:h-36">
        {phone.image ? (
          <img
            src={phone.image}
            alt={phone.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-5xl" aria-hidden="true">
            📱
          </span>
        )}
      </div>
      <div className="p-3 md:p-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
          {phone.brand}
        </p>
        <p className="truncate font-bold text-slate-900">{phone.name}</p>
        <p className="mt-1 text-lg font-extrabold text-slate-900">
          GH₵ {phone.price.toLocaleString()}
        </p>
        <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700">
          {phone.condition}
        </span>
      </div>
    </div>
  );
}

function Showcase() {
  const layout =
    featured.length === 1
      ? [SHOWCASE_POSITIONS[1]]
      : featured.length === 2
        ? [SHOWCASE_POSITIONS[0], SHOWCASE_POSITIONS[2]]
        : SHOWCASE_POSITIONS;

  return (
    <div className="relative mx-auto h-[330px] w-full max-w-md md:h-[420px]">
      {featured.map((phone, i) => (
        <Reveal
          key={phone.id}
          direction="zoom"
          delay={200 + i * 150}
          className={`absolute ${layout[i]}`}
        >
          <div
            className="animate-float"
            style={{ animationDelay: `${-i * 1.8}s` }}
          >
            <ShowcaseCard phone={phone} />
          </div>
        </Reveal>
      ))}

      <Reveal
        delay={700}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-lg ring-1 ring-slate-200">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
          Available now
        </span>
      </Reveal>
    </div>
  );
}

/* ---------- Installment panel (light) ---------- */

function InstallmentPanel() {
  const [ref, inView] = useInView(0.3);

  return (
    <section className="bg-[#dbe5f1] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div
            ref={ref}
            className="grid items-center gap-8 rounded-3xl border border-blue-200 bg-white p-6 shadow-lg shadow-blue-500/10 md:grid-cols-2 md:gap-12 md:p-10"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Flexible payment
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Buy on installment
              </h2>
              <p className="mt-4 font-medium leading-relaxed text-slate-700">
                Pay 40% to start, then pay the rest weekly or monthly. You do
                not need to buy everything at once.
              </p>
              <a
                href={whatsappLink(
                  "Hello, I want to buy a phone on installment.\n\nPhone I want:\nMy budget:",
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Ask about installment
              </a>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    Pay first
                  </p>
                  <p className="text-5xl font-extrabold text-blue-600 md:text-6xl">
                    40%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                    Then the rest
                  </p>
                  <p className="text-5xl font-extrabold text-slate-900 md:text-6xl">
                    60%
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    weekly or monthly
                  </p>
                </div>
              </div>

              <div className="mt-6 flex h-5 w-full overflow-hidden rounded-full bg-white ring-1 ring-blue-100">
                <div
                  className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: inView ? "40%" : "0%" }}
                />
                <div
                  className="animate-stripes h-full transition-all duration-1000 ease-out"
                  style={{
                    width: inView ? "60%" : "0%",
                    transitionDelay: "600ms",
                    backgroundColor: "#bfdbfe",
                    backgroundImage:
                      "linear-gradient(45deg, rgba(255,255,255,.6) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.6) 50%, rgba(255,255,255,.6) 75%, transparent 75%)",
                    backgroundSize: "28px 28px",
                  }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- The page ---------- */

function PhonesPage() {
  return (
    <div className="bg-[#e9eff7]">
      {/* Hero (light) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.25) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="animate-float pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-200/60 blur-3xl" />
        <div
          className="animate-float pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-24">
          <div className="text-center md:text-left">
            <Reveal>
              <nav className="text-sm font-semibold text-slate-600">
                <Link to="/" className="transition hover:text-blue-600">
                  Home
                </Link>{" "}
                <span className="mx-1">›</span>{" "}
                <span className="text-blue-600">Phones</span>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-200">
                📱 iPhones & more
              </p>
            </Reveal>
            <Reveal delay={160}>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Find the phone that{" "}
                <span className="text-blue-500">fits your budget</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-slate-700 md:mx-0">
                Brand new, UK used, Ghana used, locked and discounted iPhones,
                plus Android phones. Browse, tap for details and order on
                WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#phones-list"
                  className="w-full rounded-lg bg-blue-500 px-8 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600 sm:w-auto"
                >
                  Browse Phones
                </a>
                <Link
                  to="/swap"
                  className="w-full rounded-lg bg-white px-8 py-3 text-center font-semibold text-slate-900 ring-1 ring-slate-300 transition hover:-translate-y-0.5 hover:ring-blue-400 sm:w-auto"
                >
                  Swap Your Phone
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap justify-center gap-8 md:justify-start">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-l-4 border-blue-500 pl-4 text-left"
                  >
                    <p className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Showcase />
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-4 px-4 py-5 md:grid-cols-4 md:divide-x md:divide-slate-200">
          {TRUST.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2 text-sm font-bold text-slate-800 md:text-base"
            >
              <span className="text-xl">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Shop by type */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Shop by type"
            title="Find the phone that fits you"
            text="Whatever your budget, there is a phone for you."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TYPES.map((type, i) => (
              <Reveal key={type.title} delay={(i % 3) * 120} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-3xl transition duration-300 group-hover:scale-110 ${type.tint}`}
                  >
                    {type.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    {type.title}
                  </h3>
                  <p className="mt-2 flex-1 font-medium leading-relaxed text-slate-700">
                    {type.text}
                  </p>
                  <a
                    href={whatsappLink(type.ask)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block font-bold text-blue-600 transition group-hover:translate-x-1"
                  >
                    Ask about this →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The phone list */}
      <div id="phones-list" className="scroll-mt-20">
        <Phones />
      </div>

      {/* How to buy */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="How to buy"
            title="Getting your phone in three steps"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 150} className="h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                  <span className="absolute -right-2 -top-4 select-none text-8xl font-extrabold text-blue-100">
                    0{i + 1}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-2xl shadow-lg shadow-blue-500/30">
                    {step.icon}
                  </div>
                  <h3 className="relative mt-5 text-xl font-extrabold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 font-medium leading-relaxed text-slate-700">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why buy from us */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Why buy from us
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Buying a phone, made simple
              </h2>
              <div className="mt-5 space-y-4 font-medium leading-relaxed text-slate-700">
                <p>
                  At Mr Dennis Phones, you can browse every phone with photos,
                  prices in Ghana cedis and its condition, all in one place. Tap
                  any phone to see it bigger and read its details before you
                  decide.
                </p>
                <p>
                  When you are ready, order on WhatsApp in one tap. The phone's
                  details are filled in for you, so there is no confusion about
                  which phone you meant. You can also swap your old phone, or
                  pay in parts.
                </p>
              </div>
              <a
                href="#phones-list"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Browse Phones
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 120} className="h-full">
                <div className="h-full rounded-2xl bg-[#e9eff7] p-5 ring-1 ring-slate-300 transition hover:-translate-y-1 hover:bg-blue-50 hover:ring-blue-300">
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="mt-2 font-extrabold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">
                    {benefit.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InstallmentPanel />

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_1.6fr] md:gap-14">
          <Reveal direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Questions
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Phone questions, answered
              </h2>
              <p className="mt-3 font-medium text-slate-700">
                Can't find your answer? Message us on WhatsApp and we will help.
              </p>
            </div>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 80}>
                <FaqItem q={faq.q} a={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing banner (light) */}
      <section className="px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-blue-200 bg-white p-8 shadow-lg shadow-blue-500/10 md:flex-row md:p-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                Can't find the phone you want?
              </h2>
              <p className="mt-2 max-w-xl font-medium text-slate-700">
                Tell us the phone and your budget, and we will let you know what
                is available.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={whatsappLink(
                  "Hello, I am looking for a phone.\n\nPhone I want:\nMy budget:",
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-blue-500 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Message us on WhatsApp
              </a>
              <Link
                to="/swap"
                className="rounded-lg bg-white px-7 py-3 text-center font-semibold text-slate-900 ring-1 ring-slate-300 transition hover:-translate-y-0.5 hover:ring-blue-400"
              >
                Swap instead
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default PhonesPage;
