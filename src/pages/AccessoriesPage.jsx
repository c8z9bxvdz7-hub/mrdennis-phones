import { useState } from "react";
import Reveal from "../components/Reveal";
import AccessoryCard from "../components/AccessoryCard";
import AccessoryModal from "../components/AccessoryModal";
import { accessories } from "../data/accessories";
import { whatsappLink } from "../config";

const categories = ["All", ...new Set(accessories.map((a) => a.category))];

function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const visibleItems =
    activeCategory === "All"
      ? accessories
      : accessories.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#dbe5f1]">
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Heading */}
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Accessories
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Phone Accessories
            </h1>
            <p className="mx-auto mt-3 max-w-xl font-medium text-slate-700">
              Tap an item to see its details, then order directly on WhatsApp.
              Prices are in Ghana cedis.
            </p>
          </div>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                    : "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {visibleItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 100} className="h-full">
              <AccessoryCard item={item} onOpen={setSelectedItem} />
            </Reveal>
          ))}
        </div>

        {/* Ask banner */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-slate-900 p-6 text-white sm:flex-row md:p-8">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-extrabold">
                Can't find what you need?
              </h2>
              <p className="mt-1 font-medium text-slate-200">
                Tell us the accessory and your phone model on WhatsApp.
              </p>
            </div>
            <a
              href={whatsappLink(
                "Hello, I am looking for an accessory for my phone.\n\nAccessory:\nPhone model:",
              )}
              target="_blank"
              rel="noreferrer"
              className="w-full shrink-0 rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
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
