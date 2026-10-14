import { Link } from "react-router-dom";
import { whatsappLink } from "../config";
import Reveal from "./Reveal";

/* ---------- The designs ---------- */

// 1. Phone with your logo in the middle
function PhonesDesign() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Reveal direction="zoom" delay={150}>
        <div className="animate-float relative h-[290px] w-[145px] rounded-[2rem] border-[7px] border-slate-900 bg-slate-900 shadow-2xl shadow-blue-500/40 md:h-[370px] md:w-[185px] md:rounded-[2.3rem] md:border-8">
          <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-slate-900 md:h-4 md:w-16" />
          <div className="flex h-full w-full flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-blue-400 to-blue-600 px-3 pb-3 pt-7 text-white md:rounded-[1.8rem] md:px-4 md:pb-4 md:pt-8">
            <div className="grid grid-cols-3 gap-1.5 md:gap-2">
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-lg bg-white/20 md:rounded-xl"
                />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/logo.jpg"
                alt=""
                className="h-14 w-14 rounded-full object-cover shadow-lg ring-4 ring-white/40 md:h-20 md:w-20"
              />
              <p className="mt-2 text-xs font-bold md:text-sm">
                Mr Dennis Phones
              </p>
            </div>
            <div className="mx-auto h-1 w-16 rounded-full bg-white/60 md:h-1.5 md:w-20" />
          </div>
        </div>
      </Reveal>

      <Reveal
        direction="left"
        delay={350}
        className="absolute left-4 top-16 hidden sm:block"
      >
        <div className="animate-float rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200">
          🆕 Brand new
        </div>
      </Reveal>
      <Reveal
        direction="right"
        delay={500}
        className="absolute bottom-20 right-4 hidden sm:block"
      >
        <div
          className="animate-float rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200"
          style={{ animationDelay: "-2s" }}
        >
          🏷️ Discounted
        </div>
      </Reveal>
    </div>
  );
}

// A small phone used in the swap design
function MiniPhone({ old, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl border-[5px] border-slate-900 bg-slate-900 shadow-xl md:rounded-3xl md:border-[6px] ${className}`}
    >
      <div className="absolute left-1/2 top-1 z-10 h-2 w-8 -translate-x-1/2 rounded-full bg-slate-900" />
      <div
        className={`flex h-full w-full items-center justify-center rounded-xl md:rounded-2xl ${
          old
            ? "bg-gradient-to-br from-slate-300 to-slate-400"
            : "bg-gradient-to-br from-blue-400 to-blue-600"
        }`}
      >
        {old ? (
          <span className="text-2xl md:text-3xl">📱</span>
        ) : (
          <img
            src="/logo.jpg"
            alt=""
            className="h-14 w-14 rounded-full object-cover shadow-lg ring-4 ring-white/50 md:h-20 md:w-20"
          />
        )}
      </div>
    </div>
  );
}

// 2. Swap: your phone + cash = a different iPhone
export function SwapDesign() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 px-3 md:gap-6 md:px-6">
      <Reveal direction="left" delay={150}>
        <div className="flex flex-col items-center">
          <div className="animate-float">
            <div className="-rotate-6">
              <MiniPhone old className="h-36 w-[72px] md:h-48 md:w-24" />
            </div>
          </div>
          <p className="mt-3 text-xs font-bold text-slate-800 md:text-sm">
            Your phone
          </p>
        </div>
      </Reveal>

      <Reveal direction="zoom" delay={350}>
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl md:text-4xl">🤝</span>
          <div className="animate-float mt-2" style={{ animationDelay: "-2s" }}>
            <div className="-rotate-3 flex h-14 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-extrabold text-white shadow-lg ring-2 ring-white/60 md:h-16 md:w-28 md:text-base">
              + GH₵
            </div>
          </div>
          <span className="mt-2 text-2xl text-blue-600 md:text-3xl">➜</span>
          <p className="mt-1 text-xs font-bold text-slate-800 md:text-sm">
            Add the difference
          </p>
        </div>
      </Reveal>

      <Reveal direction="right" delay={550}>
        <div className="flex flex-col items-center">
          <div className="animate-float" style={{ animationDelay: "-1s" }}>
            <div className="rotate-6">
              <MiniPhone className="h-44 w-[88px] md:h-60 md:w-32" />
            </div>
          </div>
          <p className="mt-3 text-xs font-bold text-slate-800 md:text-sm">
            Your next iPhone
          </p>
        </div>
      </Reveal>
    </div>
  );
}

// 3. Data bundles: network cards
const NETWORKS = [
  {
    name: "MTN Ghana",
    color: "bg-yellow-400 text-slate-900",
    pos: "left-4 top-8 -rotate-6 md:left-10 md:top-12",
    dir: "left",
    delay: 150,
  },
  {
    name: "Telecel",
    color: "bg-red-600 text-white",
    pos: "right-4 top-1/2 -translate-y-1/2 rotate-3 md:right-10",
    dir: "right",
    delay: 350,
  },
  {
    name: "AirtelTigo",
    color: "bg-blue-600 text-white",
    pos: "bottom-8 left-8 -rotate-2 md:bottom-12 md:left-16",
    dir: "left",
    delay: 550,
  },
];

function DataDesign() {
  return (
    <div className="absolute inset-0">
      {NETWORKS.map((network, i) => (
        <Reveal
          key={network.name}
          direction={network.dir}
          delay={network.delay}
          className={`absolute ${network.pos}`}
        >
          <div
            className={`animate-float relative h-28 w-52 rounded-2xl p-4 shadow-xl ring-1 ring-black/10 md:h-36 md:w-64 ${network.color}`}
            style={{ animationDelay: `${-i * 1.5}s` }}
          >
            <p className="text-xl font-extrabold md:text-2xl">{network.name}</p>
            <p className="text-xs font-semibold opacity-80 md:text-sm">
              Data bundles
            </p>
            <div className="absolute bottom-3 right-4 flex items-end gap-1 opacity-70">
              <span className="h-2 w-1.5 rounded bg-current" />
              <span className="h-3 w-1.5 rounded bg-current" />
              <span className="h-4 w-1.5 rounded bg-current" />
              <span className="h-5 w-1.5 rounded bg-current" />
            </div>
          </div>
        </Reveal>
      ))}

      <div className="animate-float absolute right-6 top-6 text-3xl md:text-4xl">
        📶
      </div>
      <div
        className="animate-float absolute bottom-6 right-6 text-3xl md:text-4xl"
        style={{ animationDelay: "-2s" }}
      >
        ⚡
      </div>
    </div>
  );
}

// 4. Accessories: floating item tiles
const ACCESSORY_TILES = [
  { icon: "🔌", label: "Chargers", tilt: "-rotate-3" },
  { icon: "🔗", label: "Cables", tilt: "rotate-2" },
  { icon: "📱", label: "Cases", tilt: "-rotate-1" },
  { icon: "🛡️", label: "Screen guards", tilt: "rotate-3" },
  { icon: "🎧", label: "Earphones", tilt: "-rotate-2" },
  { icon: "🔋", label: "Power banks", tilt: "rotate-1" },
];

function AccessoriesDesign() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {ACCESSORY_TILES.map((tile, i) => (
          <Reveal key={tile.label} direction="zoom" delay={i * 100}>
            <div
              className="animate-float"
              style={{ animationDelay: `${-i * 0.8}s` }}
            >
              <div
                className={`flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 md:h-28 md:w-28 ${tile.tilt}`}
              >
                <span className="text-4xl md:text-5xl">{tile.icon}</span>
                <span className="mt-1 text-xs font-semibold text-slate-800">
                  {tile.label}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------- The text. EDIT IT HERE ---------- */

// To use your own photo instead of a drawn design, put the photo in
// public/services/ and set image: "/services/your-photo.jpg" for that service.
const SERVICES = [
  {
    label: "Phones",
    eyebrow: "Buy & Sell",
    title: "iPhones for every budget",
    paragraphs: [
      "At Mr Dennis Phones we sell iPhones to suit every budget: brand new iPhones, UK used iPhones, Ghana used iPhones, locked iPhones and discounted iPhones. We also sell Android phones.",
      "Choose brand new if you want the latest, UK used or Ghana used for a more affordable iPhone, and locked or discounted iPhones when budget comes first.",
      "Browse the Phones page to see what is available right now, with photos and prices in Ghana cedis. Tap any phone to see it bigger and order on WhatsApp, or message us if you need help choosing.",
    ],
    pills: [
      "Brand new iPhones",
      "UK used iPhones",
      "Ghana used iPhones",
      "Locked iPhones",
      "Discounted iPhones",
      "Android phones",
    ],
    cta: { text: "Browse Phones", to: "/phones" },
    Design: PhonesDesign,
    image: "",
  },
  {
    label: "Swap",
    eyebrow: "Swap & Trade-in",
    title: "Swap up to a different iPhone",
    paragraphs: [
      "Want a newer iPhone but do not want to start from zero? Swap with us. Bring the phone you have, add the difference in cash, and leave with a different iPhone.",
      "It starts with a quick WhatsApp chat. Send us your phone's model, storage and condition, and tell us which iPhone you want. We will tell you how much to add.",
    ],
    steps: [
      "Tell us your phone and the iPhone you want",
      "We tell you how much to add",
      "Add the difference and take your new iPhone",
    ],
    cta: {
      text: "Start a Swap on WhatsApp",
      href: whatsappLink("Hello, I want to swap my phone."),
    },
    Design: SwapDesign,
    image: "",
  },
  {
    label: "Data",
    eyebrow: "Data Bundles",
    title: "Data for every network",
    paragraphs: [
      "We sell data bundles for MTN Ghana, Telecel and AirtelTigo. Choose your network, pick a bundle and buy it directly from our data store in a few taps.",
      "If an order is ever delayed, message us on WhatsApp with your number and the bundle you bought, and we will look into it.",
    ],
    pills: ["MTN Ghana", "Telecel", "AirtelTigo"],
    cta: { text: "Buy Data", to: "/data-bundles" },
    Design: DataDesign,
    image: "",
  },
  {
    label: "Accessories",
    eyebrow: "Accessories",
    title: "Protect and power up your phone",
    paragraphs: [
      "Protect and power up your phone with our accessories: chargers, cables, cases, screen protectors, earphones and power banks, with a focus on iPhone accessories.",
      "Every item shows what it works with, so you can pick the right one. Not sure what fits your phone? Send us your model on WhatsApp and we will help you choose.",
    ],
    pills: [
      "Chargers",
      "Cables",
      "Cases",
      "Screen protectors",
      "Earphones",
      "Power banks",
    ],
    cta: { text: "View Accessories", to: "/accessories" },
    Design: AccessoriesDesign,
    image: "",
  },
];

/* ---------- Layout ---------- */

const ctaClass =
  "mt-6 inline-block rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600 md:mt-8";

export function Stage({ image, alt, children }) {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-white via-blue-50 to-blue-200 shadow-md ring-1 ring-slate-300 md:h-[440px]">
      {image ? (
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <>
          <div className="animate-float pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full bg-blue-300/50 blur-3xl" />
          <div
            className="animate-float pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-sky-300/50 blur-3xl"
            style={{ animationDelay: "-3s" }}
          />
          {children}
        </>
      )}
    </div>
  );
}

function ServiceBlock({ service, index }) {
  const reversed = index % 2 === 1;
  const Design = service.Design;

  return (
    <div className={index % 2 === 1 ? "bg-white/60" : ""}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-14 md:py-20">
        {/* Design */}
        <Reveal
          direction={reversed ? "right" : "left"}
          className={reversed ? "md:order-2" : ""}
        >
          <Stage image={service.image} alt={service.title}>
            <Design />
          </Stage>
        </Reveal>

        {/* Text */}
        <Reveal
          direction={reversed ? "left" : "right"}
          delay={150}
          className={reversed ? "md:order-1" : ""}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              0{index + 1} · {service.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              {service.title}
            </h3>

            <div className="mt-4 space-y-3 md:mt-5 md:space-y-4">
              {service.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="font-medium leading-relaxed text-slate-700"
                >
                  {text}
                </p>
              ))}
            </div>

            {service.steps && (
              <ol className="mt-5 space-y-3">
                {service.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 font-semibold text-slate-800">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            )}

            {service.pills && (
              <div className="mt-5 flex flex-wrap gap-2">
                {service.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-300"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            )}

            {service.cta.to ? (
              <Link to={service.cta.to} className={ctaClass}>
                {service.cta.text}
              </Link>
            ) : (
              <a
                href={service.cta.href}
                target="_blank"
                rel="noreferrer"
                className={ctaClass}
              >
                {service.cta.text}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div id="services" className="relative">
      <div className="mx-auto max-w-3xl px-4 pb-4 pt-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Everything you need, in one place
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-medium text-slate-700">
            Phones, swaps, data bundles and accessories, all in one place.
          </p>
        </Reveal>
      </div>

      {SERVICES.map((service, index) => (
        <ServiceBlock key={service.label} service={service} index={index} />
      ))}
    </div>
  );
}

export default Services;
