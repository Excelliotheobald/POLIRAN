"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Badge,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  MessageSquare,
  CheckCheck,
  Headphones,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleWhatsappOtp = () => {
    if (!identifier.trim()) {
      alert("Silakan masukkan nomor WhatsApp atau NIK Anda terlebih dahulu pada kolom input di atas.");
      return;
    }
    alert("Kode OTP Masuk Praktis POLIRAN telah dikirimkan ke WhatsApp resmi Anda yang terdaftar.");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 relative bg-surface">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-surface-container rounded-full blur-3xl opacity-60" />
        <div className="w-[400px] h-[400px] bg-secondary-fixed/20 rounded-full blur-2xl opacity-40 -translate-y-24 translate-x-32" />
      </div>
      <div className="w-full max-w-[460px] mx-auto flex flex-col items-center">
        <div className="w-full bg-surface-container-lowest border border-slate-200/80 rounded-2xl shadow-card-clean p-8 sm:p-10 transition-all duration-200">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#132238] text-white flex items-center justify-center shadow-md mb-4.5 ring-4 ring-surface-container-high/60">
              <Image src="/polri.png" alt="POLIRAN" width={36} height={36} className="w-9 h-9" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-on-surface">Selamat Datang Kembali</h1>
            <p className="text-sm text-on-surface-variant mt-1.5 font-normal">Masuk ke akun POLIRAN Anda</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface" htmlFor="login-identifier">
                Alamat Email atau NIK
              </label>
              <div className="relative rounded-xl border border-slate-300 focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/10 transition-all duration-150">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Badge className="w-5 h-5" />
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
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface" htmlFor="login-password">
                  Kata Sandi
                </label>
                <a className="text-xs font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors" href="#lupa-sandi">
                  Lupa Kata Sandi?
                </a>
              </div>
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

            <div className="relative py-2 flex items-center justify-center">
              <div className="w-full border-t border-slate-200" />
              <span className="absolute bg-surface-container-lowest px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">atau</span>
            </div>

            <button
              className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:bg-surface-container-low text-on-surface font-medium text-xs sm:text-sm flex items-center justify-center space-x-2.5 transition-colors duration-150"
              onClick={handleWhatsappOtp}
              type="button"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span>Masuk dengan Kode WhatsApp OTP</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-on-surface-variant">
              Belum memiliki akun?{" "}
              <a className="font-bold text-[#132238] hover:text-amber-600 transition-colors ml-1" href="/register">
                Daftar Sekarang
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xs text-slate-500 font-medium">
          <div className="flex items-center space-x-1.5">
            <CheckCheck className="w-4 h-4 text-amber-600" />
            <span>Layanan Resmi Kepolisian RI & Bebas Pungli 100%</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center space-x-1">
            <Headphones className="w-4 h-4 text-slate-400" />
            <span>Bantuan Hotline <strong className="text-slate-700">110</strong></span>
          </div>
        </div>
      </div>
    </main>
  );
}