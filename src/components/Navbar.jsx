import { useEffect, useState } from "react";
import { whatsappLink } from "../config";

const links = [
  { label: "Home", href: "#home" },
  { label: "Phones", href: "#phones" },
  { label: "Swap", href: "#swap" },
  { label: "Data Bundles", href: "#bundles" },
  { label: "Accessories", href: "#accessories" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 10);
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-slate-200"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo / name */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-extrabold text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-lg">
            📱
          </span>
          <span>
            Mr Dennis <span className="text-blue-500">Phones</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-semibold text-slate-800 transition-colors hover:text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop button */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 md:block"
        >
          Chat on WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-lg bg-blue-500 px-4 py-3 text-center font-semibold text-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </header>
  );
}

export default Navbar;
