"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/lowongan-pekerjaan", label: "Lowongan Kerja" },
  { href: "/data-ketenagakerjaan", label: "Data Ketenagakerjaan" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/faq", label: "FAQ" },
];

function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomePage = mounted && pathname === "/";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-purpose="site-navigation"
      suppressHydrationWarning
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-out ${
        isHomePage
          ? scrolled
            ? "bg-[#0f1f38]/95 backdrop-blur-lg border-b border-slate-700/40"
            : "bg-transparent backdrop-blur-0 border-b border-transparent"
          : "bg-[#0A192F] border-b border-slate-800"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 h-20 flex items-center justify-between">
        {/* Brand Logo & Identity */}
        <Link className="flex items-center gap-3" href="/">
          <div>
            <img src="polri.png" alt="Polri Emblem" className="w-12 h-12" />
          </div>
          <div className={`w-px h-12 mx-2 aria-hidden ${isHomePage ? "bg-white/40" : "bg-white/20"}`} />
          <div className="flex flex-col justify-center h-12">
            <span className="text-xl font-extrabold tracking-wider text-white leading-none">
              POLIRAN
            </span>
            <span className="text-[11px] font-medium text-slate-300 tracking-wide mt-1">
              Polisi Peduli Pengangguran
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                className={`relative py-1 flex items-center space-x-1.5 transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : isHomePage
                    ? "text-slate-200 hover:text-amber-400"
                    : "text-slate-200 hover:text-amber-400"
                }`}
                href={link.href}
              >
                <span className={isActive ? "font-semibold text-white" : ""}>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA Buttons */}
        <div className="flex items-center space-x-3.5">
          <Link
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-150 ${
              isHomePage
                ? "text-white border border-white/80 hover:bg-white/10 hover:border-white"
                : "text-white border border-white/30 hover:bg-white/10 hover:border-white/50"
            }`}
            href="/login"
          >
            Masuk
          </Link>
          <Link
            className={`px-5 py-2 text-xs font-semibold text-white rounded-full shadow-md flex items-center space-x-1.5 hover:shadow-lg transition-all duration-150 ${
              isHomePage
                ? "bg-[#0b172a] hover:bg-[#07101e] border border-slate-700"
                : "bg-white/10 hover:bg-white/20 border border-white/30"
            }`}
            href="/register"
          >
            <i className="fa-solid fa-user-plus text-[11px] text-white" />
            <span>Daftar</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;