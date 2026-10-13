import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg rounded-3xl border border-slate-300 bg-white p-10 text-center shadow-md">
        <p className="text-6xl font-extrabold text-blue-500">404</p>
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 font-medium text-slate-700">
          The page you are looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Back to Home
          </Link>
          <Link
            to="/phones"
            className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
          >
            Browse Phones
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
