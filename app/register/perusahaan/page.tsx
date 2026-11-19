"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Eye, EyeOff, CheckCircle, ArrowRight, Building2, User, Mail, ChevronLeft } from "lucide-react";
import PoliranStrip from "@/components/PoliranStrip";
import HelpPopup from "@/components/HelpPopup";

const STRENGTH_LEVELS = [
  { label: "Kekuatan Sandi", barColor: "bg-slate-200", textColor: "text-on-surface-variant" },
  { label: "Sandi Kurang Kuat", barColor: "bg-red-500", textColor: "text-red-600" },
  { label: "Sandi Sedang", barColor: "bg-amber-500", textColor: "text-amber-600" },
  { label: "Sandi Kuat", barColor: "bg-lime-500", textColor: "text-lime-600" },
  { label: "Sandi Sangat Kuat & Aman", barColor: "bg-emerald-600", textColor: "text-emerald-600" },
] as const;

export default function RegisterPerusahaanPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [picName, setPicName] = useState("");
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const passwordErr = validatePassword(password);
    if (passwordErr) {
      setPasswordError(passwordErr);
      return;
    }
    if (password !== passwordConfirm) return;
    if (!agreement) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Pendaftaran Perusahaan Berhasil! Tim POLIRAN akan memverifikasi legalitas instansi Anda dalam 1x24 jam kerja.");
      router.push("/login/perusahaan");
    }, 1200);
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
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">Pendaftaran Perusahaan Mitra</h1>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                Bermitra dengan POLIRAN untuk rekrutmen tenaga kerja terverifikasi
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
              {/* Field 1: Nama Perusahaan */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1" htmlFor="reg-company-name">
                  Nama Perusahaan / Instansi <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <Building2 className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none focus:bg-surface-container-lowest text-sm shadow-sm"
                    id="reg-company-name"
                    name="companyName"
                    placeholder="PT / CV Nama Perusahaan"
                    required
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>

              {/* Field 2: Nama PIC */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1" htmlFor="reg-pic-name">
                  Nama Penanggung Jawab (PIC) <span className="text-red-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none focus:bg-surface-container-lowest text-sm shadow-sm"
                    id="reg-pic-name"
                    name="picName"
                    placeholder="Nama Lengkap PIC / HRD"
                    required
                    type="text"
                    value={picName}
                    onChange={(e) => setPicName(e.target.value)}
                  />
                </div>
              </div>

              {/* Row: WhatsApp & Email Perusahaan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Field 3: WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-company-phone">
                    Nomor Kontak / WhatsApp PIC <span className="text-red-600">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs text-on-surface bg-surface-container px-2 py-0.5 rounded">+62</span>
                    <input
                      className="w-full pl-16 pr-4 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-base sm:text-sm shadow-sm"
                      id="reg-company-phone"
                      inputMode="numeric"
                      name="phone"
                      placeholder="81234567890"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                    />
                  </div>
                </div>

                {/* Field 4: Email Resmi */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1.5" htmlFor="reg-company-email">
                    Email Resmi Perusahaan <span className="text-red-600">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
                    <input
                      className="w-full pl-11 pr-4 py-3 bg-white text-on-surface rounded-lg placeholder-on-surface-variant focus:outline-none text-base sm:text-sm shadow-sm"
                      id="reg-company-email"
                      name="email"
                      placeholder="hrd@perusahaan.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
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

              {/* Agreement Checkbox */}
              <div className="pt-1 sm:pt-2 sm:mt-2">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    className="mt-1 h-5 w-5 rounded text-[#132238] focus:ring-[#132238]/30 focus:ring-offset-1 transition"
                    id="reg-company-agreement"
                    name="agreement"
                    required
                    type="checkbox"
                    checked={agreement}
                    onChange={(e) => setAgreement(e.target.checked)}
                  />
                  <span className="text-[13px] sm:text-xs text-on-surface-variant group-hover:text-on-surface leading-relaxed">
                    Saya menyatakan perwakilan sah dari perusahaan/instansi terkait dan menyetujui{" "}
                    <a className="text-xs font-bold text-[#132238] hover:underline">Syarat & Ketentuan Kemitraan</a>{" "}
                    serta{" "}
                    <a className="text-xs font-bold text-[#132238] hover:underline">Kebijakan Privasi</a>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                className={`w-full flex items-center justify-center space-x-2 bg-[#132238] hover:bg-[#000b1f] text-white py-4 px-6 rounded-lg text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200 mt-6 group ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                id="submit-register-company-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-spin" />
                    <span>Mendaftarkan Perusahaan...</span>
                  </>
                ) : (
                  <>
                    <span>Daftarkan Perusahaan</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Card Footer Navigation */}
            <div className="mt-5 pt-5 border-t border-slate-200 text-center">
              <p className="text-xs text-on-surface-variant">
                Perusahaan sudah terdaftar?{" "}
                <Link className="text-xs font-bold text-[#132238] hover:text-amber-600 inline-flex items-center space-x-1 ml-1 transition-colors" href="/login/perusahaan">
                  <span>Masuk Akun Mitra</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <HelpPopup />
    </main>
  );
}
