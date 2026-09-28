import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-medium text-[#2f6fd6]">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-zinc-900">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-zinc-600">
        The page you are looking for may have been moved. Head back home or talk to our team.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="rounded-full bg-[#2f6fd6] px-6 py-3 text-sm font-medium text-white">
          Back to Home
        </Link>
        <Link href="/contact" className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
