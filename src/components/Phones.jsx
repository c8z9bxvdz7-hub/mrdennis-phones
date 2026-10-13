import { useState } from "react";
import { phones } from "../data/phones";
import PhoneCard from "./PhoneCard";
import PhoneModal from "./PhoneModal";
import Reveal from "./Reveal";

const brands = ["All", ...new Set(phones.map((p) => p.brand))];

function Phones() {
  const [activeBrand, setActiveBrand] = useState("All");
  const [selectedPhone, setSelectedPhone] = useState(null);

  const visiblePhones =
    activeBrand === "All"
      ? phones
      : phones.filter((p) => p.brand === activeBrand);

  return (
    <section id="phones" className="scroll-mt-16 bg-[#dbe5f1] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Phones
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Available Phones
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-medium text-slate-700">
              Tap a phone to see its details, then order directly on WhatsApp.
              Prices are in Ghana cedis.
            </p>
          </div>
        </Reveal>

        {/* Brand filter */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeBrand === brand
                    ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                    : "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePhones.map((phone, i) => (
            <Reveal key={phone.id} delay={(i % 3) * 120} className="h-full">
              <PhoneCard phone={phone} onOpen={setSelectedPhone} />
            </Reveal>
          ))}
        </div>
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
