"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/lowongan-pekerjaan", label: "Lowongan Kerja" },
  { href: "/pelatihan", label: "Pelatihan" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/faq", label: "FAQ" },
];

const AUTH_LINKS = [
  { href: "/login", label: "Masuk", variant: "text" },
  { href: "/register?role=perusahaan", label: "Daftar Mitra", variant: "secondary" },
  { href: "/register?role=pelamar", label: "Daftar Pencari Kerja", variant: "primary" },
];

function MainHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Non-homepage pages get primary blue header
  const isNonHomePage = pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + compensate scrollbar width when drawer opens
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.paddingRight = mobileOpen ? `${scrollBarWidth}px` : "";
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [mobileOpen]);

  const toggleMenu = useCallback(() => setMobileOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMobileOpen(false), []);
  const isActive = (href: string) => pathname === href;

  // Header background classes based on page and scroll
  const headerClasses = isNonHomePage
    ? "fixed inset-x-0 top-0 z-50 bg-[#0A192F] border-b border-slate-800 shadow-sm"
    : `fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-out ${
        scrolled
          ? "bg-[#0f1f38]/75 backdrop-blur-lg border-b border-slate-700/50"
          : "bg-transparent backdrop-blur-0 border-b border-transparent"
      }`;

  // Text/nav color classes based on page
  const navTextClasses = isNonHomePage
    ? "text-slate-300 hover:text-amber-400"
    : "text-slate-300 hover:text-amber-400";
  const activeNavClasses = isNonHomePage
    ? "text-white font-semibold"
    : "text-white font-semibold";
  const brandTextClasses = isNonHomePage
    ? "text-white"
    : "text-white";
  const brandSubTextClasses = isNonHomePage
    ? "text-slate-300"
    : "text-slate-300";
  const burgerTextClasses = isNonHomePage
    ? "text-slate-300 hover:text-amber-400 hover:bg-white/10"
    : "text-white hover:text-amber-400 hover:bg-white/10";

  return (
    <>
      <header
        data-purpose="site-navigation"
        className={headerClasses}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 h-20 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <div className="relative z-10">
              <img src="polri.png" alt="Polri Emblem" className="w-11 h-11" />
            </div>
            <div className="w-px h-11 mx-2 aria-hidden" style={{ backgroundColor: isNonHomePage ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.4)" }} />
            <div className="flex flex-col justify-center h-full">
              <span className={`text-xl font-extrabold tracking-wider leading-none ${brandTextClasses}`}>
                POLIRAN
              </span>
              <span className={`text-[11px] font-medium tracking-wide mt-[1px] ${brandSubTextClasses}`}>
                Polisi Peduli Pengangguran
              </span>
            </div>
          </Link>

          {/* Desktop navigation (lg >= 1024px) */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-1 py-1 transition-colors ${
                  isActive(link.href)
                    ? activeNavClasses
                    : navTextClasses
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs (lg >= 1024px) */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/login"
              className={isNonHomePage
                ? "px-4 py-2 text-xs font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-150"
                : "px-4 py-2 text-xs font-semibold text-white border border-white/80 rounded-full hover:bg-white/10 hover:border-white transition-all duration-150"}
              onClick={closeMenu}
            >
              Masuk
            </a>
            <a
              href="/register?role=perusahaan"
              className={isNonHomePage
                ? "px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-full shadow-md flex items-center space-x-1.5 hover:shadow-lg transition-all duration-150"
                : "px-4 py-2 text-xs font-semibold text-white bg-[#0b172a] hover:bg-[#07101e] border border-slate-700 rounded-full shadow-md flex items-center space-x-1.5 hover:shadow-lg transition-all duration-150"}
              onClick={closeMenu}
            >
              <i className="fa-solid fa-user-plus text-[11px] text-white" />
              <span>Daftar</span>
            </a>
          </div>

          {/* Burger menu (tablet & mobile, below lg) */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 active:scale-95 focus:outline-none ${burgerTextClasses}`}
            onClick={toggleMenu}
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <i className="fa-solid fa-xmark text-lg" />
            ) : (
              <i className="fa-solid fa-bars text-lg" />
            )}
          </button>
        </div>
      </header>

      {/* Drawer overlay — always mounted for smooth opacity animation */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          isNonHomePage
            ? "bg-[#091526]/90 backdrop-blur-md"
            : "bg-[#091526]/90 backdrop-blur-md"
        } ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer panel — partial width (not full screen), slide from right */}
        <div
          className={`absolute inset-y-0 right-0 w-full sm:w-[340px] max-w-[85%] max-h-full flex flex-col shadow-2xl transition-transform duration-300 ease-out transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          } z-50 ${
            isNonHomePage
              ? "border-l border-slate-800 bg-[#0A192F]"
              : "border-l border-slate-800/50 bg-[#0a1628]/95 backdrop-blur-lg"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer header bar */}
          <div className={`flex items-center justify-between px-6 py-5 shrink-0 ${
            isNonHomePage
              ? "border-b border-slate-800 bg-[#0A192F]"
              : "border-b border-slate-800/50 bg-[#091526]/60"
          }`}>
            <span className={`text-xl font-extrabold tracking-wider ${isNonHomePage ? "text-white" : "text-white"}`}>
              POLIRAN
            </span>
            <button
              onClick={closeMenu}
              className={`p-2 rounded-lg transition-colors active:scale-95 ${
                isNonHomePage
                  ? "text-slate-300 hover:text-white hover:bg-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/10"
              }`} 
              aria-label="Tutup menu"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1 shrink-0">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                    isActive(link.href)
                      ? isNonHomePage
                        ? "bg-amber-500/10 text-white border border-amber-500/20"
                        : "bg-amber-500/10 text-white border border-amber-500/20"
                      : isNonHomePage
                        ? "text-slate-300 hover:text-amber-400 hover:bg-white/10"
                        : "text-slate-300 hover:text-amber-400 hover:bg-white/5"
                  }`}>
                  <span className="w-1 h-4 rounded-full shrink-0">
                    {isActive(link.href) ? (
                      <span className="block w-full h-full bg-amber-500" />
                    ) : null}
                  </span>
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className={`px-6 py-6 space-y-2 shrink-0 ${
            isNonHomePage
              ? "border-t border-slate-800 bg-[#0A192F]"
              : "border-t border-slate-800/50 bg-[#091526]/60"
          }`}>
            {AUTH_LINKS.map((auth) => {
              const base =
                "block text-center px-5 py-3 font-bold rounded-full text-sm transition-all duration-200";
              const styles = isNonHomePage
                ? auth.variant === "primary"
                  ? `${base} bg-amber-500 text-slate-950 hover:bg-amber-600 hover:scale-[1.02] shadow-lg shadow-amber-500/20`
                  : auth.variant === "secondary"
                  ? `${base} border border-white/30 text-white hover:bg-white/10 hover:scale-[1.02]`
                  : `${base} text-xs font-semibold text-white border border-white/80 hover:bg-white/10 hover:scale-[1.02]`
                : auth.variant === "primary"
                ? `${base} bg-amber-500 text-slate-950 hover:bg-amber-600 hover:scale-[1.02] shadow-lg shadow-amber-500/20`
                : auth.variant === "secondary"
                ? `${base} border border-white/30 text-white hover:bg-white/10 hover:scale-[1.02]`
                : `${base} text-xs font-semibold text-white border border-white/80 hover:bg-white/10 hover:scale-[1.02]`;

              return (
                <Link
                  key={auth.label}
                  href={auth.href}
                  onClick={closeMenu}
                  className={styles}
                >
                  {auth.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
