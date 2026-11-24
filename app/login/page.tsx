import Link from "next/link";
import {
  Building2,
  ChevronLeft,
  Users,
  ArrowRight,
} from "lucide-react";
import HelpPopup from "@/components/HelpPopup";
import PoliranStrip from "@/components/PoliranStrip";

const ROLE_OPTIONS = [
  {
    href: "/login/pelamar",
    categoryBadge: "Masyarakat Umum",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200/70",
    icon: (
      <Users
        className="w-5 h-5 sm:w-6 sm:h-6 text-[#132238] group-hover:text-white transition-colors"
        aria-hidden="true"
      />
    ),
    iconWrapStyle:
      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 group-hover:bg-[#132238] flex items-center justify-center shrink-0 transition-colors duration-200",
    title: "Pelamar Kerja",
    subtitle: "Pencari Kerja & Peserta Pelatihan",
    description:
      "Akses lowongan pekerjaan terverifikasi, pelatihan kejuruan, dan sertifikasi resmi Polri.",
    ctaText: "Masuk sebagai Pelamar",
  },
  {
    href: "/login/perusahaan",
    categoryBadge: "Badan Usaha / Mitra",
    badgeStyle: "bg-amber-50 text-amber-800 border-amber-200/70",
    icon: (
      <Building2
        className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 group-hover:text-white transition-colors"
        aria-hidden="true"
      />
    ),
    iconWrapStyle:
      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100/70 group-hover:bg-amber-500 flex items-center justify-center shrink-0 transition-colors duration-200",
    title: "Perusahaan Mitra",
    subtitle: "Penyedia Kerja & Rekanan",
    description:
      "Publikasikan lowongan kerja, verifikasi kompetensi calon tenaga kerja, dan kelola seleksi kandidat.",
    ctaText: "Masuk sebagai Mitra",
  },
] as const;

export default function LoginRolePage() {
  return (
    <main className="min-h-screen flex flex-col bg-surface relative overflow-x-hidden">
      {/* Official instansi strip */}
      <PoliranStrip />

      {/* Back button pinned to top-left below strip */}
      <div className="w-full px-2 pt-1 pb-0">
        <Link
          className="inline-flex items-center gap-1 mt-1.5 md:text-base text-xs text-[#132238] hover:text-white bg-slate-50 hover:bg-[#132238] border border-[#132238]/30 hover:border-[#132238] pr-2 pl-1 py-1.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/20"
          href="/"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          <span>Kembali</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start sm:justify-center px-3 sm:px-6 pt-2 pb-6 sm:py-6 w-full">
        <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">

          {/* Ambient background glow elements */}
          <div className="absolute -top-6 -left-8 w-48 h-48 bg-surface-container rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute -bottom-10 -right-8 w-56 h-56 bg-slate-200/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

          {/* Main Card */}
          <div className="relative w-full bg-surface-container-lowest rounded-2xl shadow-card-clean pt-20 md:pt-0 pb-3 px-3 sm:p-8 transition-all duration-200">
            {/* Card Brand & Title Header */}
            <div className="flex flex-col items-center text-center mb-2.5 sm:mb-4">
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-on-surface">
                PILIH KATEGORI AKUN
              </h1>
              <p className="text-[11px] sm:text-sm text-on-surface-variant mt-0.5 leading-relaxed">
                Silakan pilih kategori yang sesuai dengan profil Anda.
              </p>
            </div>

            {/* Role options: compact horizontal on mobile, rich grid on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-4">
              {ROLE_OPTIONS.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  className="group flex flex-col justify-between p-2.5 sm:p-5 rounded-xl bg-white hover:bg-slate-50/80 border-2 border-slate-200/80 hover:border-[#132238] hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/40 active:scale-[0.99]"
                >
                  {/* Mobile Compact Layout */}
                  <div className="flex sm:hidden items-center gap-2.5 text-left">
                    <div className={option.iconWrapStyle}>{option.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h2 className="text-sm font-bold text-slate-900 group-hover:text-[#132238] transition-colors leading-tight">
                          {option.title}
                        </h2>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${option.badgeStyle}`}
                        >
                          {option.categoryBadge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-snug">
                        {option.description}
                      </p>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#132238] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Desktop Rich Layout */}
                  <div className="hidden sm:block text-left">
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className={option.iconWrapStyle}>{option.icon}</div>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${option.badgeStyle}`}
                      >
                        {option.categoryBadge}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#132238] transition-colors leading-snug">
                      {option.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#132238]/80 mt-0.5">
                      {option.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* CTA Bar at bottom (Desktop only) */}
                  <div className="hidden sm:flex mt-5 pt-3.5 border-t border-slate-100 items-center justify-between text-sm font-bold text-[#132238]">
                    <span>{option.ctaText}</span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#132238] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-on-surface-variant">
                Belum memiliki akun POLIRAN?{" "}
                <Link className="text-xs font-bold text-[#132238] hover:text-amber-600 inline-flex items-center space-x-1 ml-1 transition-colors" href="/register">
                  <span>Daftar Sekarang</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating help popup — bottom right corner */}
      <HelpPopup />
    </main>
  );
}
