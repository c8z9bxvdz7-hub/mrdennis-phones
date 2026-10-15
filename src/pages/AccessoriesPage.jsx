import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import AccessoryCard from "../components/AccessoryCard";
import AccessoryModal from "../components/AccessoryModal";
import { accessories, categoryIcons } from "../data/accessories";
import { SectionHeading, FaqItem } from "../components/PageParts";
import { whatsappLink } from "../config";

/* ---------- Numbers worked out from your accessories.js ---------- */

const categories = ["All", ...new Set(accessories.map((a) => a.category))];
const shopCategories = categories.slice(1);
const lowest = accessories.length
  ? Math.min(...accessories.map((a) => a.price))
  : null;

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "low", label: "Price: low to high" },
  { value: "high", label: "Price: high to low" },
];

/* ---------- Text. EDIT IT HERE ---------- */

// The buttons use category names from your accessories.js.
// If a name does not exist there, the button shows all items instead.
const KITS = [
  {
    icons: "🔌 🔗",
    title: "Power up",
    text: "Chargers and cables keep your phone ready when you need it.",
    category: "Chargers",
    button: "Shop chargers",
    tint: "from-blue-100 to-white",
  },
  {
    icons: "📱 🛡️",
    title: "Protect it",
    text: "A case and a screen protector help guard against scratches and bumps.",
    category: "Cases",
    button: "Shop cases",
    tint: "from-sky-100 to-white",
  },
  {
    icons: "🎧",
    title: "Listen up",
    text: "Earphones for your music and your calls.",
    category: "Audio",
    button: "Shop audio",
    tint: "from-indigo-100 to-white",
  },
];

const STEPS = [
  {
    title: "Browse",
    text: "Look through the items and filter by category, or search.",
  },
  {
    title: "Tap for details",
    text: "See a bigger photo, what the item works with, and its price.",
  },
  {
    title: "Order on WhatsApp",
    text: "Send your order. The item's details are filled in for you.",
  },
];

const BENEFITS = [
  {
    icon: "📲",
    title: "Made for your phone",
    text: "Every item shows what it works with, so you can pick the right one.",
  },
  {
    icon: "💰",
    title: "Clear prices",
    text: "Prices are shown in Ghana cedis on every item.",
  },
  {
    icon: "⚡",
    title: "Order in a tap",
    text: "WhatsApp opens with the item's details already filled in.",
  },
  {
    icon: "🙋",
    title: "Help choosing",
    text: "Not sure what fits? Send us your phone model and we will help.",
  },
];

const FAQS = [
  {
    q: "How do I know an accessory fits my phone?",
    a: "Each item shows what it works with. If you are not sure, send us your phone model on WhatsApp and we will help you choose.",
  },
  {
    q: "Are the prices in Ghana cedis?",
    a: "Yes, all prices on this page are in Ghana cedis (GH₵).",
  },
  {
    q: "How do I order?",
    a: "Tap an item to see its details, then order on WhatsApp. The item's details are filled in for you.",
  },
  {
    q: "What if the accessory I want is not listed?",
    a: "Message us with the accessory and your phone model, and we will tell you what is available.",
  },
];

/* ---------- The page ---------- */

function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [selectedItem, setSelectedItem] = useState(null);

  const search = query.trim().toLowerCase();
  const matches = accessories.filter((a) => {
    const categoryOk =
      activeCategory === "All" || a.category === activeCategory;
    const text =
      `${a.name} ${a.category} ${a.compatibility || ""}`.toLowerCase();
    return categoryOk && (search === "" || text.includes(search));
  });

  const visibleItems =
    sort === "low"
      ? [...matches].sort((a, b) => a.price - b.price)
      : sort === "high"
        ? [...matches].sort((a, b) => b.price - a.price)
        : matches;

  const showCategory = (category) => {
    setActiveCategory(categories.includes(category) ? category : "All");
    setQuery("");
    document
      .getElementById("accessories-list")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const reset = () => {
    setActiveCategory("All");
    setQuery("");
    setSort("featured");
  };

  return (
    <div className="bg-[#e9eff7]">
      {/* Hero (light, centered) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-blue-50 to-white">
        <span className="animate-float absolute left-[8%] top-24 hidden text-5xl opacity-70 md:block">
          🔌
        </span>
        <span
          className="animate-float absolute right-[10%] top-20 hidden text-5xl opacity-70 md:block"
          style={{ animationDelay: "-1.5s" }}
        >
          🎧
        </span>
        <span
          className="animate-float absolute bottom-28 left-[12%] hidden text-5xl opacity-70 md:block"
          style={{ animationDelay: "-3s" }}
        >
          🔋
        </span>
        <span
          className="animate-float absolute bottom-24 right-[12%] hidden text-5xl opacity-70 md:block"
          style={{ animationDelay: "-4.5s" }}
        >
          🛡️
        </span>

        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center md:py-24">
          <Reveal>
            <nav className="text-sm font-semibold text-slate-600">
              <Link to="/" className="transition hover:text-blue-600">
                Home
              </Link>{" "}
              <span className="mx-1">›</span>{" "}
              <span className="text-blue-600">Accessories</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-200">
              🎧 Accessories
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Accessories that keep your phone
              <span className="block text-blue-500">safe and powered up</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-700">
              Chargers, cables, cases, screen protectors, earphones and power
              banks, with a focus on iPhone accessories. Pick a category to get
              started.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-slate-800 shadow-sm ring-1 ring-slate-200">
                📦 {accessories.length} items
              </span>
              {lowest !== null && (
                <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-slate-800 shadow-sm ring-1 ring-slate-200">
                  🏷️ From GH₵ {lowest.toLocaleString()}
                </span>
              )}
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8">
            {shopCategories.map((category, i) => (
              <Reveal key={category} direction="zoom" delay={350 + i * 80}>
                <button
                  type="button"
                  onClick={() => showCategory(category)}
                  className="group flex w-24 flex-col items-center gap-2 md:w-28"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-md ring-1 ring-blue-200 transition duration-300 group-hover:-translate-y-1.5 group-hover:bg-blue-500 group-hover:shadow-xl group-hover:shadow-blue-500/30 md:h-20 md:w-20 md:text-4xl">
                    {categoryIcons[category] || "🛍️"}
                  </span>
                  <span className="text-sm font-bold text-slate-800 transition group-hover:text-blue-600">
                    {category}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Complete your setup */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Complete your setup"
            title="Just got a new phone?"
            text="A charger, a case and a screen protector are a good start."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {KITS.map((kit, i) => (
              <Reveal key={kit.title} delay={i * 150} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-3xl bg-gradient-to-br ${kit.tint} p-7 shadow-md ring-1 ring-slate-300 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10`}
                >
                  <p className="text-5xl">{kit.icons}</p>
                  <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                    {kit.title}
                  </h3>
                  <p className="mt-2 flex-1 font-medium leading-relaxed text-slate-700">
                    {kit.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => showCategory(kit.category)}
                    className="mt-6 self-start rounded-lg bg-slate-900 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-500"
                  >
                    {kit.button}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The item list */}
      <div id="accessories-list" className="scroll-mt-20 bg-white">
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Shop
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
                  All accessories
                </h2>
                <p className="mt-2 max-w-xl font-medium text-slate-700">
                  Tap an item to see its details, then order directly on
                  WhatsApp. Prices are in Ghana cedis.
                </p>
              </div>
              <p className="text-sm font-bold text-slate-700">
                Showing {visibleItems.length} of {accessories.length} items
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-300 bg-slate-50 p-4 shadow-sm lg:flex-row lg:items-center">
              <div className="relative lg:w-72">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                  🔍
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search accessories"
                  aria-label="Search accessories"
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 font-medium text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-1 flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      activeCategory === category
                        ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                        : "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort accessories"
                className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-semibold text-slate-800 outline-none focus:border-blue-500"
              >
                {SORTS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </Reveal>

          {visibleItems.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {visibleItems.map((item, i) => (
                <Reveal key={item.id} delay={(i % 4) * 100} className="h-full">
                  <AccessoryCard item={item} onOpen={setSelectedItem} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
              <p className="text-4xl">🔍</p>
              <p className="mt-2 font-bold text-slate-900">
                No accessories match your search
              </p>
              <button
                onClick={reset}
                className="mt-4 rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white transition hover:bg-blue-600"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>

      {/* How to order */}
      <section className="bg-blue-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            eyebrow="How to order"
            title="Ordering in three steps"
          />
          <Reveal delay={100}>
            <div className="mt-10 rounded-3xl border border-blue-200 bg-white p-6 shadow-md md:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                {STEPS.map((step, i) => (
                  <div key={step.title} className="relative">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500 text-lg font-extrabold text-white shadow-lg shadow-blue-500/30">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-extrabold text-slate-900">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">
                          {step.text}
                        </p>
                      </div>
                    </div>
                    {i < STEPS.length - 1 && (
                      <span className="absolute -right-4 top-2 hidden text-xl text-blue-400 md:block">
                        ➜
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why shop with us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Why shop with us"
            title="Accessories, made simple"
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-300">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 120}>
                <div className="px-6 text-center">
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
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            eyebrow="Questions"
            title="Accessory questions, answered"
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

      {/* Closing card (light) */}
      <section className="px-4 py-16 md:py-24">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-8 text-center shadow-lg shadow-blue-500/10 md:p-12">
            <p className="text-4xl">🔌 🎧 🔋</p>
            <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-3xl">
              Can't find what you need?
            </h2>
            <p className="mx-auto mt-2 max-w-xl font-medium text-slate-700">
              Tell us the accessory and your phone model, and we will let you
              know what is available.
            </p>
            <a
              href={whatsappLink(
                "Hello, I am looking for an accessory for my phone.\n\nAccessory:\nPhone model:",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* Big detail card */}
      {selectedItem && (
        <AccessoryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default AccessoriesPage;
