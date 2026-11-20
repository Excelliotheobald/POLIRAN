"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#beranda", label: "Beranda", active: true },
  { href: "/#lowongan", label: "Lowongan Kerja", active: false },
  { href: "/data-ketenagakerjaan", label: "Data Ketenagakerjaan", active: false },
  { href: "/#tentang", label: "Tentang Kami", active: false },
  { href: "/#faq", label: "FAQ", active: false },
];

function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDataPage = pathname === "/data-ketenagakerjaan";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-purpose="site-navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-out ${
        scrolled || isDataPage
          ? "bg-[#0f1f38]/95 backdrop-blur-lg border-b border-slate-700/40"
          : "bg-transparent backdrop-blur-0 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 h-20 flex items-center justify-between">
        {/* Brand Logo & Identity */}
        <Link className="flex items-center gap-3" href="/">
          {/* Polri Emblem Badge Placeholder */}
          <div>
            <img src="polri.png" alt="Polri Emblem" className="w-12 h-12" />
          </div>
          {/* Vertical separator between Polri logo and POLIRAN text */}
          <div className="w-px h-12 bg-white/40 mx-2" aria-hidden="true" />
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
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
          {NAV_LINKS.map((link) =>
            (link.href === "/#beranda" && pathname === "/") ||
            (link.href === "/data-ketenagakerjaan" && pathname === link.href) ? (
              <Link
                key={link.label}
                className="relative text-white py-1 flex items-center space-x-1.5 transition-colors group"
                href={link.href}
              >
                <span className="font-semibold text-white">{link.label}</span>
              </Link>
            ) : (
              <Link
                key={link.label}
                className="hover:text-amber-400 transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right Action CTA Buttons */}
        <div className="flex items-center  space-x-3.5">
          {/* Login Button */}
          <Link
            className="px-5 py-2 text-xs font-semibold text-white border border-white/80 rounded-full hover:bg-white/10 hover:border-white transition-all duration-150"
            href="/login"
          >
            Masuk
          </Link>
          {/* Daftar Button */}
          <Link
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0b172a] hover:bg-[#07101e] border border-slate-700 rounded-full shadow-md flex items-center space-x-1.5 hover:shadow-lg transition-all duration-150"
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
