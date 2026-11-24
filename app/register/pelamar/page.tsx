"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Eye, EyeOff, CheckCircle, ArrowRight, User, Mail, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

// Password strength levels: index matches the computed score (0-4)
const STRENGTH_LEVELS = [
  { label: "Kekuatan Sandi", barColor: "bg-slate-200", textColor: "text-on-surface-variant" },
  { label: "Sandi Kurang Kuat", barColor: "bg-red-500", textColor: "text-red-600" },
  { label: "Sandi Sedang", barColor: "bg-afmber-500", textColor: "text-amber-600" },
  { label: "Sandi Kuat", barColor: "bg-lime-500", textColor: "text-lime-600" },
  { label: "Sandi Sangat Kuat & Aman", barColor: "bg-emerald-600", textColor: "text-emerald-600" },
] as const;
import PoliranStrip from "@/components/PoliranStrip";
import HelpPopup from "@/components/HelpPopup";

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
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
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
    setPasswordError(val && validatePassword(val));
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

  const validatePassword = (val: string): string | null => {
    if (!/[0-9]/.test(val)) {
      return "Kata sandi harus mengandung minimal 1 angka.";
    }
    if (!/[A-Z]/.test(val)) {
      return "Kata sandi harus mengandung minimal 1 huruf kapital.";
    }
    return null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    const passwordError = validatePassword(password);
    if (passwordError) {
      setPasswordError(passwordError);
      return;
    }
    if (password !== passwordConfirm) {
      setPasswordError("Kata sandi tidak cocok");
      return;
    }
    if (!agreement) {
      setFormError("Anda harus menyetujui syarat & ketentuan");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/register/pelamar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          phone,
          email,
          password,
          passwordConfirm,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || "Gagal mendaftar");
        setIsSubmitting(false);
        return;
      }
      sessionStorage.setItem("poliranUserId", data.user.id);
      sessionStorage.setItem("poliranUserName", data.user.name);
      toast.success("Pendaftaran berhasil! Selanjutnya lengkapi profil pekerjaan.");
      router.push("/lengkapi-profil");
    } catch (err) {
      console.error(err);
      setFormError("Terjadi kesalahan jaringan. Silakan coba lagi.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-surface relative overflow-x-hidden">
      <PoliranStrip />

      {/* Back button pinned to top-left below strip */}
      <div className="w-full px-2 pt-1 pb-0">
        <Link
          className="inline-flex items-center gap-1 mt-1.5 md:text-base text-xs text-[#132238] hover:text-white bg-slate-50 hover:bg-[#132238] border border-[#132238]/30 hover:border-[#132238] pr-2 pl-1 py-1.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/20"
          href="/register"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          <span>Kembali</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-4 sm:py-10 w-full">
        <div className="w-full max-w-3xl">
          {/* Ambient background glow elements */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-surface-container rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-16 -right-12 w-72 h-72 bg-slate-200/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

        {/* Main Registration Card */}
        <div className="relative bg-surface-container-lowest rounded-2xl shadow-card-clean p-4 sm:p-10 transition-all duration-200">
          {/* Card Brand & Title Header */}
          <div className="flex flex-col items-center text-center mb-5 sm:mb-7">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">Buat Akun Pelamar Kerja</h1>
          </div>

          {/* Comprehensive Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
            {/* Field 1: Nama Lengkap */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1" htmlFor="reg-fullname">
                Nama Lengkap <span className="text-red-600">*</span>
                <span className="hidden sm:block text-xs text-on-surface-variant font-normal">(Sesuai e-KTP)</span>
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                <input
                  className="w-full pl-11 pr-4 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none focus:bg-surface-container-lowest text-sm shadow-sm"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Field 3: WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-phone">
                  Nomor WhatsApp Aktif <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-xs text-on-surface bg-surface-container px-2 py-0.5 rounded">+62</span>
                  <input
                    className="w-full pl-16 pr-4 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-base sm:text-sm shadow-sm"
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
                <p className="hidden sm:block mt-1 text-xs text-on-surface-variant">
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
                    className="w-full pl-11 pr-4 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-base sm:text-sm shadow-sm"
                    id="reg-email"
                    name="email"
                    placeholder="nama@email.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className="hidden sm:block mt-1 text-xs text-on-surface-variant">
                  Bukti lamaran & sertifikat dikirim ke sini.
                </p>
              </div>
            </div>

            {/* Row: Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Field 5: Kata Sandi */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-password">
                  Kata Sandi <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-11 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-base sm:text-sm shadow-sm"
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
                    className="absolute right-2 w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                    onClick={() => toggleVisibility("password")}
                    type="button"
                  >
                    {passwordVisibility ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {/* Password Strength Bar Indicator */}
                {(() => {
                  const level = STRENGTH_LEVELS[passwordStrength];
                  return (
                    <div className="mt-2 space-y-1">
                      <div className="grid grid-cols-4 gap-1.5 h-1" aria-hidden="true">
                        {[1, 2, 3, 4].map((step) => (
                          <div
                            key={step}
                            className={`rounded-full transition-colors duration-200 ${
                              step <= passwordStrength ? level.barColor : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className={`font-medium ${level.textColor}`}>
                          {level.label}
                        </span>
                      </div>
                    </div>
                  );
                })()}
                {passwordError && (
                  <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
                    {passwordError}
                  </p>
                )}
              </div>
              {/* Field 6: Konfirmasi Kata Sandi */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-password-confirm">
                  Konfirmasi Kata Sandi <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-11 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-base sm:text-sm shadow-sm"
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
                    className="absolute right-2 w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
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
            <div className="pt-1 sm:pt-2 sm:mt-2">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  className="mt-1 h-5 w-5 rounded text-[#132238] focus:ring-[#132238]/30 focus:ring-offset-1 transition"
                  id="reg-agreement"
                  name="agreement"
                  required
                  type="checkbox"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                />
                <span className="text-[13px] sm:text-xs text-on-surface-variant group-hover:text-on-surface leading-relaxed">
                  Saya menyatakan data yang saya masukkan adalah sah dan benar, serta menyetujui{" "}
                  <a className="text-xs font-bold text-[#132238] hover:underline">Syarat & Ketentuan</a>{" "}
                  dan{" "}
                  <a className="text-xs font-bold text-[#132238] hover:underline">Kebijakan Privasi</a>.
                </span>
              </label>
            </div>

            {formError && (
              <div
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                role="alert"
              >
                {formError}
              </div>
            )}

            {/* Primary CTA: Submit Button */}
            <button
              className={`w-full flex items-center justify-center space-x-2 bg-[#132238] hover:bg-[#000b1f] text-white py-4 px-6 rounded-lg text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200 mt-6 group ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
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
          <div className="mt-5 pt-5 border-t border-slate-200 text-center">
            <p className="text-xs text-on-surface-variant">
              Sudah memiliki akun POLIRAN?{" "}
              <a className="text-xs font-bold text-[#132238] hover:text-secondary font-bold inline-flex items-center space-x-1 ml-1 transition-colors" href="/login">
                <span>Masuk Sekarang</span>
                <ArrowRight className="w-3 h-3 rotate-180" />
              </a>
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