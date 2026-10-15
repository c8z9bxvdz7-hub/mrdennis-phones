import { useState } from "react";
import { phones } from "../data/phones";
import PhoneCard from "./PhoneCard";
import PhoneModal from "./PhoneModal";
import Reveal from "./Reveal";

const brands = ["All", ...new Set(phones.map((p) => p.brand))];

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "low", label: "Price: low to high" },
  { value: "high", label: "Price: high to low" },
];

function Phones() {
  const [activeBrand, setActiveBrand] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [selectedPhone, setSelectedPhone] = useState(null);

  const search = query.trim().toLowerCase();
  const matches = phones.filter((p) => {
    const brandOk = activeBrand === "All" || p.brand === activeBrand;
    const text =
      `${p.brand} ${p.name} ${p.storage} ${p.condition}`.toLowerCase();
    return brandOk && (search === "" || text.includes(search));
  });

  const visiblePhones =
    sort === "low"
      ? [...matches].sort((a, b) => a.price - b.price)
      : sort === "high"
        ? [...matches].sort((a, b) => b.price - a.price)
        : matches;

  const reset = () => {
    setActiveBrand("All");
    setQuery("");
    setSort("featured");
  };

  return (
    <section id="phones" className="scroll-mt-16 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Phones
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Available phones
              </h2>
              <p className="mt-2 max-w-xl font-medium text-slate-700">
                Tap a phone to see its details, then order directly on WhatsApp.
                Prices are in Ghana cedis.
              </p>
            </div>
            <p className="text-sm font-bold text-slate-700">
              Showing {visiblePhones.length} of {phones.length} phones
            </p>
          </div>
        </Reveal>

        {/* Search, filter and sort */}
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
                placeholder="Search phones"
                aria-label="Search phones"
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 font-medium text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-1 flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    activeBrand === brand
                      ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                      : "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort phones"
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

        {/* Grid */}
        {visiblePhones.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePhones.map((phone, i) => (
              <Reveal key={phone.id} delay={(i % 3) * 120} className="h-full">
                <PhoneCard phone={phone} onOpen={setSelectedPhone} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <p className="text-4xl">🔍</p>
            <p className="mt-2 font-bold text-slate-900">
              No phones match your search
            </p>
            <button
              onClick={reset}
              className="mt-4 rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white transition hover:bg-blue-600"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Big detail card */}
      {selectedPhone && (
        <PhoneModal
          phone={selectedPhone}
          onClose={() => setSelectedPhone(null)}
        />
      )}
    </section>
  );
}

export default Phones;
