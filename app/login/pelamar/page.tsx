"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import HelpPopup from "@/components/HelpPopup";
import PoliranStrip from "@/components/PoliranStrip";

export default function LoginPelamarPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex flex-col bg-surface relative overflow-x-hidden">
      <PoliranStrip />

      {/* Back button pinned to top-left below strip */}
      <div className="w-full px-2 pt-1 pb-0">
        <Link
          className="inline-flex items-center gap-1 mt-1.5 md:text-base text-xs text-[#132238] hover:text-white bg-slate-50 hover:bg-[#132238] border border-[#132238]/30 hover:border-[#132238] pr-2 pl-1 py-1.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/20"
          href="/login"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          <span>Kembali</span>
        </Link>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-surface-container rounded-full blur-3xl opacity-60" />
        <div className="w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-2xl opacity-40 -translate-y-24 translate-x-32" />
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-4 sm:py-10 w-full">
        <div className="w-full max-w-[460px] mx-auto flex flex-col items-center">
          <div className="w-full bg-surface-container-lowest rounded-2xl shadow-card-clean p-5 sm:p-10 transition-all duration-200">
            <div className="flex -mt-25 md:mt-0 flex-col items-center text-center mb-7">
              <h1 className="md:text-2xl text-xl font-bold tracking-tight text-on-surface">Masuk Sebagai Pelamar Kerja</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="login-identifier">
                  Alamat Email atau NIK
                </label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 bg-white pr-4 py-3 bg-surface-container-lowest text-on-surface rounded-lg placeholder-on-surface-variant placeholder:text-sm focus:outline-none text-base sm:text-sm shadow-sm"
                    id="login-identifier"
                    name="identifier"
                    placeholder="nama@email.com atau 16 digit NIK"
                    required
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="login-password">
                  Kata Sandi
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-11 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant placeholder:text-sm focus:outline-none text-base sm:text-sm shadow-sm"
                    id="login-password"
                    name="password"
                    placeholder="Masukkan kata sandi"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    aria-label={showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"}
                    className="absolute right-2 w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                    id="toggle-password-btn"
                    onClick={togglePassword}
                    type="button"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2.5 cursor-pointer select-none">
                  <input
                    checked={rememberMe}
                    className="h-5 w-5 rounded text-[#132238] focus:ring-[#132238]/30 focus:ring-offset-1 border-slate-300 cursor-pointer"
                    type="checkbox"
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="text-[13px] sm:text-xs text-on-surface-variant font-medium">Ingat Saya</span>
                </label>
                <a className="text-[13px] sm:text-xs font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors" href="#lupa-sandi">
                  Lupa Kata Sandi?
                </a>
              </div>

              <button
                className="w-full flex items-center justify-center space-x-2 bg-[#132238] hover:bg-[#000b1f] text-white py-4 px-6 rounded-lg text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200"
                type="submit"
              >
                <span>Masuk Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-4 pt-6 border-t border-slate-200 text-center">
              <p className="text-xs -mt-4 text-on-surface-variant">
                Belum memiliki akun?{" "}
                <Link className="font-bold text-[#132238] hover:text-amber-600 transition-colors ml-1" href="/register">
                  Daftar Sekarang
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