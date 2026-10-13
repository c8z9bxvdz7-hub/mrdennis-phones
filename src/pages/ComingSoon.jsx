import { Link } from "react-router-dom";
import { whatsappLink } from "../config";
import Reveal from "../components/Reveal";

function ComingSoon({ title }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <Reveal className="w-full max-w-lg">
        <div className="rounded-3xl border border-slate-300 bg-white p-10 text-center shadow-md">
          <span className="text-5xl" aria-hidden="true">
            🚧
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900">
            {title}
          </h1>
          <p className="mt-3 font-medium text-slate-700">
            This page is coming soon. In the meantime, you can reach us directly
            on WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink(`Hello, I would like to ask about ${title}.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/"
              className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ComingSoon;
