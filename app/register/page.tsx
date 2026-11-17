"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Eye, EyeOff, CheckCircle, ArrowRight, User, Mail, CheckCheck, Headphones, HelpCircle } from "lucide-react";

// Simple brand icon components since Lucide doesn't include them
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function RegisterPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordMatch, setPasswordMatch] = useState<"none" | "match" | "mismatch">("none");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleVisibility = (field: string) => {
    if (field === "password") setPasswordVisibility(!passwordVisibility);
    else setConfirmVisibility(!confirmVisibility);
  };

  const handlePasswordChange = (val: string) => {
    setPassword(val);
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    setPasswordStrength(score);
  };

  const handleConfirmChange = (val: string) => {
    setPasswordConfirm(val);
    if (!val) {
      setPasswordMatch("none");
      return;
    }
    if (val === password) setPasswordMatch("match");
    else setPasswordMatch("mismatch");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== passwordConfirm) return;
    if (!agreement) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Pendaftaran Berhasil! Kode aktivasi akun telah dikirimkan ke WhatsApp & Email Anda. Silakan verifikasi untuk melanjutkan ke pencarian kerja.");
      router.push("/login");
    }, 1200);
  };

  const handleQuickWaSignup = () => {
    const promptPhone = prompt("Masukkan nomor WhatsApp aktif Anda (contoh: 8123456789):", "");
    if (promptPhone) {
      const phoneVal = promptPhone.replace(/^0+/, '');
      setPhone(phoneVal);
      alert("Kode verifikasi OTP POLIRAN telah dikirimkan ke WhatsApp +62" + phoneVal + ". Silakan periksa pesan Anda.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 relative bg-surface">
      <div className="relative w-full max-w-3xl">
        {/* Ambient background glow elements */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-surface-container rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-16 -right-12 w-72 h-72 bg-secondary-fixed/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

        {/* Main Registration Card */}
        <div className="relative bg-surface-container-lowest rounded-xl shadow-card-clean p-6 sm:p-10 transition-all duration-200">
          {/* Card Brand & Title Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center shadow-sm mb-4">
              <div className="w-11 h-11 rounded-full bg-[#132238] flex items-center justify-center">
                <Image src="/polri.png" alt="POLIRAN" width={36} height={36} className="w-9 h-9" />
              </div>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-surface-container-low mb-2.5">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Portal Pelayanan Terpadu</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-on-surface">Buat Akun Pencari Kerja</h1>
            <p className="text-sm text-on-surface-variant mt-2 max-w-lg">
              Daftar untuk mengakses ratusan lowongan terverifikasi, pelatihan vokasi gratis bersertifikat, dan integrasi legalisir SKCK digital.
            </p>
          </div>

          {/* Quick Register Shortcut (WhatsApp OTP) */}
          <div className="mb-8">
            <button
              className="w-full flex items-center justify-center space-x-2.5 bg-surface-container-low hover:bg-surface-container text-on-surface py-3.5 px-5 rounded-lg transition-all duration-150 group"
              onClick={handleQuickWaSignup}
              type="button"
            >
              <WhatsAppIcon />
              <span className="text-xs sm:text-sm font-medium">Daftar Cepat dengan WhatsApp OTP</span>
            </button>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow h-[1px] bg-surface-container" />
              <span className="flex-shrink mx-4 text-xs text-on-surface-variant uppercase tracking-wider">atau isi formulir lengkap</span>
              <div className="flex-grow h-[1px] bg-surface-container" />
            </div>
          </div>

          {/* Comprehensive Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Field 1: Nama Lengkap */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-fullname">
                Nama Lengkap <span className="text-red-600">*</span>
                <span className="block text-xs text-on-surface-variant font-normal">(Sesuai e-KTP)</span>
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                <input
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none focus:bg-surface-container-lowest text-sm shadow-sm"
                  id="reg-fullname"
                  name="fullname"
                  placeholder="Contoh: Budi Santoso"
                  required
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
            </div>

            {/* Row: WhatsApp & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Field 3: WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-phone">
                  Nomor WhatsApp Aktif <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-xs text-on-surface bg-surface-container px-2 py-0.5 rounded">+62</span>
                  <input
                    className="w-full pl-16 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-sm shadow-sm"
                    id="reg-phone"
                    inputMode="numeric"
                    name="phone"
                    placeholder="81234567890"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                  />
                </div>
                <p className="mt-1 text-xs text-on-surface-variant">
                  Untuk verifikasi OTP dan notifikasi lowongan.
                </p>
              </div>
              {/* Field 4: Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-email">
                  Alamat Email <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-sm shadow-sm"
                    id="reg-email"
                    name="email"
                    placeholder="nama@email.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className="mt-1 text-xs text-on-surface-variant">
                  Bukti lamaran & sertifikat dikirim ke sini.
                </p>
              </div>
            </div>

            {/* Row: Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Field 5: Kata Sandi */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-password">
                  Kata Sandi <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-11 py-3 bg-surface-container-lowest text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-sm shadow-sm"
                    id="reg-password"
                    minLength={8}
                    name="password"
                    placeholder="Min. 8 karakter"
                    required
                    type={passwordVisibility ? "text" : "password"}
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                  />
                  <button
                    aria-label="Tampilkan sandi"
                    className="absolute right-3.5 text-on-surface-variant hover:text-on-surface transition-colors"
                    onClick={() => toggleVisibility("password")}
                    type="button"
                  >
                    {passwordVisibility ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {/* Password Strength Bar Indicator */}
                <div className="mt-2 space-y-1">
                  <div className="grid grid-cols-4 gap-1.5 h-1">
                    <div className={`bg-[#132238] rounded-full transition-colors duration-200 ${passwordStrength >= 1 ? "bg-error" : ""}`} id="bar-1" />
                    <div className={`bg-[#132238] rounded-full transition-colors duration-200 ${passwordStrength >= 2 ? "bg-secondary" : ""}`} id="bar-2" />
                    <div className={`bg-[#132238] rounded-full transition-colors duration-200 ${passwordStrength >= 3 ? "bg-on-tertiary-container" : ""}`} id="bar-3" />
                    <div className={`bg-[#132238] rounded-full transition-colors duration-200 ${passwordStrength >= 4 ? "bg-on-tertiary-container" : ""}`} id="bar-4" />
                  </div>
                  <div className="flex justify-between items-center text-xs text-on-surface-variant">
                    <span>{passwordStrength === 0 ? "Kekuatan Sandi" : passwordStrength === 1 ? "Sandi Kurang Kuat" : passwordStrength === 2 ? "Sandi Sedang" : passwordStrength === 3 ? "Sandi Kuat" : "Sandi Sangat Kuat & Aman"}</span>
                  </div>
                </div>
              </div>
              {/* Field 6: Konfirmasi Kata Sandi */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-password-confirm">
                  Konfirmasi Kata Sandi <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-11 py-3 bg-surface-container-lowest text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-sm shadow-sm"
                    id="reg-password-confirm"
                    minLength={8}
                    name="password_confirm"
                    placeholder="Ulangi kata sandi"
                    required
                    type={confirmVisibility ? "text" : "password"}
                    value={passwordConfirm}
                    onChange={(e) => handleConfirmChange(e.target.value)}
                  />
                  <button
                    aria-label="Tampilkan sandi"
                    className="absolute right-3.5 text-on-surface-variant hover:text-on-surface transition-colors"
                    onClick={() => toggleVisibility("confirm")}
                    type="button"
                  >
                    {confirmVisibility ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="mt-2 text-xs text-on-surface-variant">
                  {passwordMatch === "match" ? "Kata sandi cocok." : passwordMatch === "mismatch" ? "Kata sandi belum sama." : "Pastikan kedua kata sandi identik."}
                </p>
              </div>
            </div>

            {/* Field 8: Agreement Checkbox with Integrity Pact */}
            <div className="pt-2">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  className="mt-1 h-5 w-5 rounded text-[#132238] focus:ring-secondary focus:ring-offset-1 transition"
                  id="reg-agreement"
                  name="agreement"
                  required
                  type="checkbox"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                />
                <span className="text-xs text-on-surface-variant group-hover:text-on-surface">
                  Saya menyatakan data yang saya masukkan adalah sah dan benar, serta menyetujui{" "}
                  <a className="text-xs font-bold text-[#132238] hover:underline">Syarat & Ketentuan</a>,{" "}
                  <a className="text-xs font-bold text-[#132238] hover:underline">Kebijakan Privasi</a>, dan
                  <span className="text-on-surface font-semibold">Pakta Integritas Bebas Pungli POLIRAN</span>.
                </span>
              </label>
            </div>

            {/* Anti-Pungli Civic Notice Box */}
            <div className="bg-surface-container-low rounded-lg p-3.5 flex items-start space-x-3">
              <CheckCheck className="text-secondary w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs text-on-surface-variant space-y-0.5">
                <p className="font-bold text-on-surface">Jaminan Bebas Biaya Resmi POLRI:</p>
                <p>
                  Seluruh proses pendaftaran akun, pembuatan portofolio, pendaftaran lowongan kerja, dan pelatihan vokasi POLIRAN <strong className="text-on-surface">100% GRATIS</strong>. Laporkan segala bentuk pungutan liar melalui Call Center 110.
                </p>
              </div>
            </div>

            {/* Primary CTA: Submit Button */}
            <button
              className={`w-full flex items-center justify-center space-x-2 bg-[#132238] hover:bg-[#000b1f] text-white py-4 px-6 rounded-lg text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 mt-6 group ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              id="submit-register-btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <CheckCircle className="w-5 h-5 animate-spin" />
                  <span>Memproses Pendaftaran...</span>
                </>
              ) : (
                <>
                  <span>Lanjut ke Lengkapi Profil</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Card Footer Navigation */}
          <div className="mt-8 pt-6 border-t border-surface-container text-center">
            <p className="text-xs text-on-surface-variant">
              Sudah memiliki akun POLIRAN?{" "}
              <a className="text-xs font-bold text-[#132238] hover:text-secondary font-bold inline-flex items-center space-x-1 ml-1 transition-colors" href="/login">
                <span>Masuk Sekarang</span>
                <ArrowRight className="w-3 h-3 rotate-180" />
              </a>
            </p>
          </div>
        </div>

        {/* Below-Card Trust Badges & National Service Commitment */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant font-medium px-4 gap-3">
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-on-tertiary-container w-4 h-4" />
            <span>Layanan Resmi Kepolisian RI</span>
          </div>
          <div className="flex items-center space-x-2">
            <HelpCircle className="text-secondary w-4 h-4" />
            <span>100% Gratis Bebas Pungli</span>
          </div>
          <div className="flex items-center space-x-2">
            <Headphones className="text-red-600 w-4 h-4" />
            <span>Hotline Kepolisian Bebas Pulsa: <strong className="text-on-surface">110</strong></span>
          </div>
        </div>
      </div>
    </main>
  );
}