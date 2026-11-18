import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  Users,
} from "lucide-react";
import HelpPopup from "@/components/HelpPopup";

const ROLE_OPTIONS = [
  {
    href: "/login/masyarakat",
    icon: <Users className="w-6 h-6" aria-hidden="true" />,
    iconWrapClassName:
      "w-12 h-12 rounded-xl bg-[#132238] text-white flex items-center justify-center shadow-md shrink-0",
    title: "Masyarakat",
    titleSuffix: "Pencari Kerja",
    description:
      "Cari lowongan kerja atau ikuti pelatihan gratis.",
  },
  {
    href: "/login/perusahaan",
    icon: <Building2 className="w-6 h-6" aria-hidden="true" />,
    iconWrapClassName:
      "w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shrink-0",
    title: "Perusahaan",
    titleSuffix: "Mitra Polri",
    description:
      "Tayangkan lowongan & bekerja sama dengan POLIRAN.",
  },
] as const;

export default function LoginRolePage() {
  return (
    <main className="min-h-screen flex flex-col bg-surface relative">
      {/* Official instansi strip — brand centered */}
      <div className="bg-[#0f1f38] text-white relative z-10">
        <div className="relative max-w-[520px] w-full mx-auto px-3 sm:px-4 h-14 flex flex-nowrap items-center justify-center gap-2 sm:gap-2.5">
          <Image src="/polri.png" alt="Lambang Polri" width={26} height={26} className="w-[26px] h-[26px] shrink-0" />
          <span className="text-base font-extrabold tracking-wider whitespace-nowrap">POLIRAN</span>
          <span className="w-px h-5 bg-white/30 shrink-0" aria-hidden="true" />
          <span className="text-xs font-medium text-slate-300 tracking-wide whitespace-nowrap">
            Polisi Peduli Pengangguran
          </span>
        </div>
      </div>

      {/* Decorative soft background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-surface-container rounded-full blur-3xl opacity-60" />
      </div>

      {/* Centered compact card */}
      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-[460px]">
          <Link
            className="self-start mb-4 flex items-center space-x-1 text-xs font-medium text-on-surface-variant hover:text-[#132238] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/40 rounded-lg transition-colors"
            href="/"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <span>Beranda</span>
          </Link>

          <div className="w-full bg-surface-container-lowest border border-slate-200/80 rounded-2xl shadow-card-clean p-8 sm:p-10 transition-all duration-200">
            {/* Greeting & step indicator */}
            <div className="flex flex-col items-center text-center mb-8">
              <p className="text-sm text-on-surface-variant font-normal leading-relaxed">
                Pilih jenis akun Anda, lalu masuk dengan email dan kata sandi.
              </p>
            </div>

            {/* Role options — large button-like tap targets */}
            <div className="space-y-4" role="navigation" aria-label="Pilihan jenis akun">
              {ROLE_OPTIONS.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  className="group flex items-center gap-4 w-full p-5 rounded-2xl border-2 border-slate-200 hover:border-[#132238] hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/40 focus-visible:border-[#132238] active:scale-[0.99] transition-all duration-150"
                >
                  <div className={option.iconWrapClassName}>{option.icon}</div>
                  <div className="flex-1 text-left min-w-0">
                    <h2 className="text-base font-bold text-on-surface leading-snug">
                      {option.title}
                      <span className="block text-xs font-semibold text-on-surface-variant mt-0.5">
                        ({option.titleSuffix})
                      </span>
                    </h2>
                    <p className="text-sm text-on-surface-variant mt-1 leading-snug">
                      {option.description}
                    </p>
                  </div>
                  <span
                    className="w-10 h-10 rounded-full bg-surface-container text-slate-400 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center shrink-0 transition-all duration-150"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating help popup — bottom right corner */}
      <HelpPopup />
    </main>
  );
}
