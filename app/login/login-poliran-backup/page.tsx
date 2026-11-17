"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Shield,
  UserPlus,
  Badge,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  MessageSquare,
  CheckCheck,
  Headphones,
  Flag,
} from "lucide-react";

// Simple brand icon components since Lucide doesn't include them
const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12 9.545 15.568z" />
  </svg>
);

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
    <>
      <header
        data-purpose="site-navigation"
        className="sticky top-0 z-50 bg-[#0f1f38]/95 backdrop-blur-md border-b border-slate-700/40 transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a className="flex items-center space-x-3.5 cursor-pointer decoration-transparent" href="#beranda">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#0c1a2e] rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white leading-none">POLIRAN</span>
              <span className="text-[11px] font-medium text-slate-300 tracking-wide mt-1">Polisi Peduli Pengangguran</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
            <a className="hover:text-amber-400 transition-colors" href="#beranda">Beranda</a>
            <a className="hover:text-amber-400 transition-colors" href="#lowongan">Lowongan Kerja</a>
            <a className="hover:text-amber-400 transition-colors" href="#pelatihan">Pelatihan</a>
            <a className="hover:text-amber-400 transition-colors" href="#tentang">Tentang Kami</a>
            <a className="hover:text-amber-400 transition-colors" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center space-x-3.5">
            <a
              className="px-5 py-2 text-xs font-semibold text-white bg-white/10 border border-slate-400/50 rounded-full transition-all duration-150"
              href="/login"
            >
              Masuk
            </a>
            <a
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0b172a] hover:bg-[#07101e] border border-slate-700 rounded-full shadow-md flex items-center space-x-1.5 hover:shadow-lg transition-all duration-150"
              href="#daftar"
            >
              <UserPlus className="w-3.5 h-3.5 text-amber-400" />
              <span>Daftar</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12 sm:py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-surface-container rounded-full blur-3xl opacity-60" />
          <div className="w-[400px] h-[400px] bg-secondary-fixed/20 rounded-full blur-2xl opacity-40 -translate-y-24 translate-x-32" />
        </div>
        <div className="w-full max-w-[460px] mx-auto flex flex-col items-center">
          <div className="w-full bg-surface-container-lowest border border-slate-200/80 rounded-2xl shadow-card-clean p-8 sm:p-10 transition-all duration-200">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary-container text-white flex items-center justify-center shadow-md mb-4.5 ring-4 ring-surface-container-high/60">
                <Shield className="w-7 h-7 text-secondary-fixed" />
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
                <a className="font-bold text-[#132238] hover:text-amber-600 transition-colors ml-1" href="#daftar">
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

      <footer
        data-purpose="site-footer"
        className="bg-[#091526] text-slate-300 border-t border-slate-800 text-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-bold shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-white tracking-wider">POLIRAN</span>
                  <p className="text-[10px] text-slate-400">Polrestabes Program</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Inisiatif kepedulian Polri untuk menekan angka pengangguran melalui pembinaan, pelatihan keterampilan, dan penyaluran kerja produktif.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">Akses Cepat</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a className="hover:text-amber-400 transition" href="#lowongan">Bursa Lowongan Kerja</a></li>
                <li><a className="hover:text-amber-400 transition" href="#pelatihan">Jadwal Pelatihan Vokasi</a></li>
                <li><a className="hover:text-amber-400 transition" href="#mitra">Registrasi Mitra Industri</a></li>
                <li><a className="hover:text-amber-400 transition" href="#">Panduan SKCK Digital</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">Pusat Bantuan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a className="hover:text-amber-400 transition" href="#faq">Tanya Jawab (FAQ)</a></li>
                <li><a className="hover:text-amber-400 transition" href="#">Syarat & Ketentuan</a></li>
                <li><a className="hover:text-amber-400 transition" href="#">Kebijakan Privasi</a></li>
                <li><a className="hover:text-amber-400 transition" href="#">Kontak Helpdesk</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">Sekretariat POLIRAN</h4>
              <p className="text-slate-400 leading-relaxed mb-3">
                Gedung Pelayanan Terpadu Polrestabes<br />
                Hotline Bebas Pulsa: <strong>110</strong>
              </p>
              <div className="flex items-center space-x-3 text-slate-400">
                <a aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition" href="#"><InstagramIcon /></a>
                <a aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition" href="#"><FacebookIcon /></a>
                <a aria-label="Twitter" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition" href="#"><TwitterIcon /></a>
                <a aria-label="YouTube" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition" href="#"><YoutubeIcon /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800/80 mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <p>© 2026 POLIRAN - Polisi Peduli Pengangguran. Hak Cipta Dilindungi.</p>
            <p className="mt-2 sm:mt-0 flex items-center space-x-1">
              <span>Menuju Indonesia Maju & Produktif</span>
              <Flag className="w-3 h-3 text-red-500 ml-1" />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}