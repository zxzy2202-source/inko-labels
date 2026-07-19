import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F2744] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-4">404 — Page Not Found</div>
      <h1
        className="font-display text-8xl font-black text-white uppercase leading-none mb-6"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        404
      </h1>
      <p className="text-white/70 text-lg max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Contact Us <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
