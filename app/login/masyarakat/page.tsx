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

export default function LoginMasyarakatPage() {
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
    <main className="min-h-screen flex flex-col bg-surface relative">
      <PoliranStrip />
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-surface-container rounded-full blur-3xl opacity-60" />
        <div className="w-[400px] h-[400px] bg-secondary-fixed/20 rounded-full blur-2xl opacity-40 -translate-y-24 translate-x-32" />
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-10 w-full">
      <div className="w-full max-w-[460px] mx-auto flex flex-col items-center">
        <Link
          className="self-start mb-4 flex items-center space-x-1 text-xs font-medium text-on-surface-variant hover:text-[#132238] transition-colors"
          href="/login"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Ganti jenis akun</span>
        </Link>
        <div className="w-full bg-surface-container-lowest border border-slate-200/80 rounded-2xl shadow-card-clean p-8 sm:p-10 transition-all duration-200">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-on-surface">Masuk Sebagai Masyarakat</h1>
            <p className="text-sm text-on-surface-variant mt-1.5 font-normal">Masuk ke akun POLIRAN Anda</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface" htmlFor="login-identifier">
                Alamat Email atau NIK
              </label>
              <div className="relative rounded-xl border border-slate-300 focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/10 transition-all duration-150">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  className="w-full pl-11 pr-4 py-3 bg-transparent text-sm text-on-surface placeholder:text-slate-400 border-0 focus:ring-0 focus:outline-none rounded-xl"
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

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface" htmlFor="login-password">
                Kata Sandi
              </label>
              <div className="relative rounded-xl border border-slate-300 focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/10 transition-all duration-150">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  className="w-full pl-11 pr-11 py-3 bg-transparent text-sm text-on-surface placeholder:text-slate-400 border-0 focus:ring-0 focus:outline-none rounded-xl"
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
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition"
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
                  className="w-4 h-4 rounded text-primary-container focus:ring-primary-container/20 border-slate-300 accent-[#132238] cursor-pointer"
                  type="checkbox"
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-xs text-on-surface-variant font-medium">Ingat Saya</span>
              </label>
              <a className="text-xs font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors" href="#lupa-sandi">
                Lupa Kata Sandi?
              </a>
            </div>

            <div className="pt-1">
              <button
                className="w-full py-3.5 px-4 rounded-xl bg-[#132238] hover:bg-[#0c1726] text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-150 flex items-center justify-center space-x-2"
                type="submit"
              >
                <span>Masuk Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </form>

          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-on-surface-variant">
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
