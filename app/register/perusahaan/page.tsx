"use client";

import { FormEvent, ReactNode, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Eye,
  EyeOff,
  FileText,
  KeyRound,
  LockKeyhole,
  Mail,
  Phone,
  Save,
  ShieldCheck,
  Upload,
  UserRound,
} from "lucide-react";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";

const STEPS = [
  { number: "01", title: "Akun & Identitas PIC", description: "Kredensial dan penanggung jawab" },
  { number: "02", title: "Profil & Legalitas", description: "Badan usaha, lokasi, dan dokumen" },
  { number: "03", title: "Review & Verifikasi", description: "Pernyataan dan pemeriksaan" },
] as const;

const PASSWORD_STRENGTH_COLORS = ["bg-red-500", "bg-orange-500", "bg-yellow-400", "bg-emerald-600"] as const;

export default function RegisterCompanyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [authorityFile, setAuthorityFile] = useState("");
  const [identityFile, setIdentityFile] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [truthAccepted, setTruthAccepted] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const passwordIsConfirmed = password.length > 0 && password === passwordConfirmation;
  const passwordStrength = [
    password.length >= 8,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormMessage("");
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const returnToAccountStep = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const completeProfileLegalStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage("Tahap review dan verifikasi belum tersedia. Data pada tahap ini belum dikirim ke server.");
  };

  const stepTitle = currentStep === 1 ? "Buat akun & identitas PIC" : "Profil, lokasi & legalitas perusahaan";
  const stepDescription = currentStep === 1
    ? "Daftarkan akun pengelola lowongan dan penanggung jawab resmi yang mewakili perusahaan Anda."
    : "Lengkapi profil badan usaha, alamat operasional, NIB, NPWP, akta, serta izin sektoral perusahaan.";

  return (
    <>
      <MainHeader />
      <main className="min-h-screen bg-slate-50 pt-20" id="main-content">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#132238] bg-[#132238] px-3 py-1 text-xs font-bold tracking-wide text-white">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  TAHAP {currentStep} DARI 3 · PENDAFTARAN MITRA PERUSAHAAN
                </p>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#132238] sm:text-4xl">
                  {stepTitle}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  {stepDescription}
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 lg:min-w-60">
                <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-[#132238] text-xs font-extrabold text-[#132238]">
                  {currentStep}/3
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Progres pendaftaran</p>
                  <p className="mt-0.5 text-lg font-extrabold text-[#132238]">{currentStep === 1 ? "33%" : "67%"} · Tahap {currentStep}</p>
                  <p className="text-xs text-slate-500">{currentStep === 1 ? "Akun dan PIC" : "Profil dan legalitas"}</p>
                </div>
              </div>
            </div>

            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Tahapan pendaftaran">
              {STEPS.map((step, index) => {
                const active = index === currentStep - 1;
                const completed = index < currentStep - 1;
                return (
                  <li
                    key={step.number}
                    className={`rounded-xl border p-4 ${active ? "border-[#132238] bg-[#132238] text-white shadow-sm" : "border-slate-200 bg-white text-slate-700"}`}
                    aria-current={active ? "step" : undefined}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-extrabold ${active ? "text-amber-300" : "text-slate-400"}`}>{step.number}</span>
                      <span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${active ? "bg-[#fdc425] text-slate-950" : "bg-slate-100 text-slate-500"}`}>
                        {active ? "Sedang diisi" : completed ? "Selesai" : "Berikutnya"}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-bold">{step.title}</p>
                    <p className={`mt-1 text-xs ${active ? "text-slate-300" : "text-slate-500"}`}>{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:px-8" hidden={currentStep !== 1}>
          <form className="space-y-6 lg:col-span-12" onSubmit={handleSubmit} noValidate>
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="account-heading">
              <div className="flex items-start gap-3 border-b border-slate-100 pb-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#132238] text-amber-300">
                  <KeyRound className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-[#132238]" id="account-heading">1. Kredensial akun pengelola</h2>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Akun ini dipakai PIC untuk mengelola lowongan perusahaan di POLIRAN.</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-bold text-slate-800" htmlFor="company-email">Email aktif PIC <span className="text-red-700">*</span></label>
                  <p className="mt-1 text-xs leading-5 text-slate-500" id="company-email-help">Gunakan email yang dapat diakses oleh penanggung jawab perusahaan.</p>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                    <div className="relative flex-1">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input className="h-12 w-full rounded-lg border border-slate-300 bg-[#edf4ff] pl-11 pr-3 text-sm text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="company-email" name="email" type="email" inputMode="email" autoComplete="email" aria-describedby="company-email-help" placeholder="nama@perusahaan.co.id" required />
                    </div>
                    <button className="h-12 rounded-lg border border-slate-300 bg-slate-100 px-4 text-sm font-bold text-slate-500" type="button" disabled title="Layanan OTP belum terhubung">
                      Kirim OTP (belum aktif)
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Verifikasi OTP email akan diaktifkan saat layanan backend tersedia.</p>
                  <div className="mt-3 flex flex-col gap-3 rounded-lg bg-[#e8f0ff] p-3 sm:flex-row sm:items-center sm:justify-between" aria-label="Verifikasi kode OTP email">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#d7e6ff] text-[#132238]">
                        <KeyRound className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <label className="text-xs font-bold text-[#132238]" htmlFor="company-email-otp">Kode OTP Email:</label>
                      <input
                        className="h-8 w-28 rounded-md border border-slate-300 bg-white px-2 text-center text-sm font-extrabold tracking-[0.2em] text-[#132238] outline-none transition placeholder:tracking-widest focus:border-[#132238] focus:ring-2 focus:ring-[#132238]/20"
                        id="company-email-otp"
                        name="emailOtp"
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern="[0-9]{6}"
                        maxLength={6}
                        value={emailOtp}
                        onChange={(event) => setEmailOtp(event.target.value.replace(/\D/g, ""))}
                        placeholder="______"
                        aria-describedby="company-email-otp-status"
                      />
                    </div>
                    <p className={`inline-flex items-center gap-1 self-start rounded-full px-2.5 py-1 text-xs font-bold sm:self-auto ${emailOtp.length === 6 ? "bg-emerald-100 text-emerald-800" : "bg-[#d7e6ff] text-[#132238]"}`} id="company-email-otp-status" aria-live="polite">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {emailOtp.length === 6 ? "Kode siap diverifikasi" : "Menunggu kode OTP"}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-bold text-slate-800" htmlFor="company-password">Kata sandi <span className="text-red-700">*</span></label>
                    <p className="mt-1 min-h-10 text-xs text-slate-500">Minimal 8 karakter; gunakan huruf besar, angka, dan simbol.</p>
                    <div className="relative mt-2">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input className="h-12 w-full rounded-lg border border-slate-300 bg-[#edf4ff] pl-11 pr-12 text-sm text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="company-password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} required />
                      <button aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"} className="absolute right-1 top-1 grid h-10 w-10 place-items-center rounded-md text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132238]" onClick={() => setShowPassword((visible) => !visible)} type="button">
                        {showPassword ? <EyeOff className="h-5 w-5" aria-hidden="true" /> : <Eye className="h-5 w-5" aria-hidden="true" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-800" htmlFor="company-password-confirmation">Ulangi kata sandi <span className="text-red-700">*</span></label>
                    <p className="mt-1 min-h-10 text-xs text-slate-500">Masukkan ulang kata sandi untuk memastikan tidak ada salah ketik.</p>
                    <div className="relative mt-2">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input className={`h-12 w-full rounded-lg border bg-[#edf4ff] pl-11 pr-12 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 ${passwordConfirmation && !passwordIsConfirmed ? "border-red-600 focus:border-red-700 focus:ring-red-100" : "border-slate-300 focus:border-[#132238] focus:ring-[#132238]/20"}`} id="company-password-confirmation" name="passwordConfirmation" type={showConfirmation ? "text" : "password"} autoComplete="new-password" minLength={8} value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} required aria-invalid={Boolean(passwordConfirmation && !passwordIsConfirmed)} />
                      <button aria-label={showConfirmation ? "Sembunyikan konfirmasi kata sandi" : "Tampilkan konfirmasi kata sandi"} className="absolute right-1 top-1 grid h-10 w-10 place-items-center rounded-md text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132238]" onClick={() => setShowConfirmation((visible) => !visible)} type="button">
                        {showConfirmation ? <EyeOff className="h-5 w-5" aria-hidden="true" /> : <Eye className="h-5 w-5" aria-hidden="true" />}
                      </button>
                    </div>
                    {passwordConfirmation && !passwordIsConfirmed && <p className="mt-2 text-xs font-medium text-red-700">Kata sandi belum sama.</p>}
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-bold text-[#132238]">Kekuatan kata sandi</span>
                    <span className="text-xs font-semibold text-slate-500">{passwordStrength}/4 kriteria terpenuhi</span>
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-2" aria-label={`Kekuatan kata sandi: ${passwordStrength} dari 4`}>
                    {[1, 2, 3, 4].map((level) => <span className={`h-2 rounded-full ${passwordStrength >= level ? PASSWORD_STRENGTH_COLORS[level - 1] : "bg-slate-200"}`} key={level} />)}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="pic-heading">
              <div className="flex items-start gap-3 border-b border-slate-100 pb-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#132238] text-amber-300"><UserRound className="h-5 w-5" aria-hidden="true" /></div>
                <div><h2 className="text-lg font-extrabold text-[#132238]" id="pic-heading">2. Identitas penanggung jawab (PIC)</h2><p className="mt-1 text-sm leading-5 text-slate-600">Masukkan data individu yang diberi kuasa mewakili perusahaan.</p></div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2"><label className="text-sm font-bold text-slate-800" htmlFor="pic-name">Nama lengkap PIC Sesuai identitas resmi <span className="text-red-700">*</span></label><input className="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-[#edf4ff] px-3 text-sm text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="pic-name" name="picName" autoComplete="name" placeholder="Sesuai e-KTP" required /></div>
                <div><label className="text-sm font-bold text-slate-800" htmlFor="pic-role">Jabatan PIC <span className="text-red-700">*</span></label><input className="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-[#edf4ff] px-3 text-sm text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="pic-role" name="picRole" placeholder="Contoh: Manajer HR" required /></div>
                <div><label className="text-sm font-bold text-slate-800" htmlFor="pic-relation">Status penunjukan <span className="text-red-700">*</span></label><select className="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-[#edf4ff] px-3 text-sm text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="pic-relation" name="picRelation" defaultValue="" required><option value="" disabled>Pilih status PIC</option><option value="director">Direktur / pemilik</option><option value="employee">Karyawan yang ditunjuk</option><option value="representative">Perwakilan resmi</option></select></div>
                <div className="md:col-span-2"><label className="text-sm font-bold text-slate-800" htmlFor="pic-phone">Nomor WhatsApp PIC <span className="text-red-700">*</span></label><div className="relative mt-2"><Phone className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" /><input className="h-12 w-full rounded-lg border border-slate-300 bg-[#edf4ff] pl-11 pr-3 text-sm text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="pic-phone" name="picPhone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Contoh: 0812 3456 7890" required /></div></div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="documents-heading">
              <div className="flex items-start gap-3 border-b border-slate-100 pb-5"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#132238] text-amber-300"><FileText className="h-5 w-5" aria-hidden="true" /></div><div><h2 className="text-lg font-extrabold text-[#132238]" id="documents-heading">3. Dokumen pendukung PIC</h2><p className="mt-1 text-sm leading-5 text-slate-600">Dokumen hanya dipilih di perangkat pada versi UI ini; belum diunggah atau disimpan.</p></div></div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <FilePicker id="authority-letter" label="Surat kuasa / penunjukan PIC" help="PDF, JPG, atau PNG · maksimal 5 MB" fileName={authorityFile} onChange={setAuthorityFile} />
                <FilePicker id="pic-identity" label="Foto e-KTP PIC" help="PDF, JPG, atau PNG · maksimal 5 MB" fileName={identityFile} onChange={setIdentityFile} />
              </div>
              <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-950"><strong>Catatan:</strong> kebijakan retensi, enkripsi, OCR, dan verifikasi dokumen belum diterapkan karena backend belum tersedia.</p>
            </section>

            <section className="border-t border-slate-200 pt-5" aria-labelledby="consent-heading">
              <h2 className="text-sm font-extrabold text-[#132238]" id="consent-heading">Persetujuan PIC</h2>
              <fieldset className="mt-3 space-y-2"><legend className="sr-only">Pernyataan persetujuan</legend>
                <label className="flex gap-2.5 py-1"><input className="mt-0.5 h-4 w-4 shrink-0 accent-[#132238]" checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)} type="checkbox" required /><span className="text-xs leading-5 text-slate-700">Saya menyetujui pemrosesan data untuk keperluan pendaftaran dan verifikasi mitra POLIRAN.</span></label>
                <label className="flex gap-2.5 py-1"><input className="mt-0.5 h-4 w-4 shrink-0 accent-[#132238]" checked={truthAccepted} onChange={(event) => setTruthAccepted(event.target.checked)} type="checkbox" required /><span className="text-xs leading-5 text-slate-700">Saya menyatakan informasi yang saya berikan benar dan dapat dipertanggungjawabkan.</span></label>
              </fieldset>
            </section>

            <div aria-live="polite" aria-atomic="true" className="min-h-6 text-sm font-medium text-[#132238]">{formMessage}</div>
            <div className="flex flex-col-reverse gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132238]" type="button" onClick={() => setFormMessage("Penyimpanan draf akan tersedia setelah backend pendaftaran dibuat.")}><Save className="h-4 w-4" aria-hidden="true" />Simpan draf (belum aktif)</button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#132238] px-5 text-sm font-bold text-white transition hover:bg-[#0b172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132238]" type="submit">Lanjut ke profil perusahaan<ChevronRight className="h-5 w-5" aria-hidden="true" /></button>
            </div>
          </form>

        </div>
        <CompanyProfileLegalStep
          hidden={currentStep !== 2}
          onBack={returnToAccountStep}
          onSubmit={completeProfileLegalStep}
        />
      </main>
      <section className="bg-slate-50 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl bg-[#132238] p-5 text-white shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="font-extrabold text-amber-300">Layanan bebas biaya</h2>
            <p className="mt-2 text-sm leading-6 text-slate-200">Pendaftaran mitra tidak dipungut biaya. Jangan memberikan uang atau data kepada pihak yang tidak terverifikasi.</p>
          </div>
          <div className="mt-4 flex shrink-0 items-center gap-2 text-sm font-bold text-white sm:mt-0"><CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />Call Center Polri 110</div>
        </div>
      </section>
      <MainFooter />
    </>
  );
}

function FilePicker({ id, label, help, fileName, onChange, required = true }: { id: string; label: string; help: string; fileName: string; onChange: (fileName: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-bold text-slate-800" htmlFor={id}>{label} <span className="text-red-700">*</span></label>
      <p className="mt-1 text-xs text-slate-500">{help}</p>
      <label className="mt-3 flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-[#edf4ff] p-4 text-center transition hover:border-[#132238] hover:bg-[#e3efff] focus-within:border-[#132238] focus-within:ring-2 focus-within:ring-[#132238]/20" htmlFor={id}>
        <Upload className="h-6 w-6 text-[#132238]" aria-hidden="true" />
        <span className="mt-2 text-sm font-bold text-[#132238]">Pilih dokumen</span>
        <span className="mt-1 break-all text-xs text-slate-500">{fileName || "Belum ada file dipilih"}</span>
        <input accept=".pdf,.jpg,.jpeg,.png" className="sr-only" id={id} name={id} onChange={(event) => onChange(event.target.files?.[0]?.name ?? "")} required={required} type="file" />
      </label>
    </div>
  );
}

function CompanyProfileLegalStep({ hidden, onBack, onSubmit }: { hidden: boolean; onBack: () => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  const [logoFile, setLogoFile] = useState("");
  const [nibFile, setNibFile] = useState("");
  const [npwpFile, setNpwpFile] = useState("");
  const [aktaFile, setAktaFile] = useState("");
  const [licenseFile, setLicenseFile] = useState("");
  const fieldClass = "mt-2 h-12 w-full rounded-lg border border-slate-300 bg-[#edf4ff] px-3 text-sm text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20";

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:px-8" hidden={hidden}>
      <form className="space-y-6 lg:col-span-12" onSubmit={onSubmit} noValidate>
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="company-profile-heading">
          <SectionHeading icon={<FileText className="h-5 w-5" aria-hidden="true" />} title="Profil & identitas perusahaan" description="Identitas resmi dan karakteristik badan usaha yang akan tampil pada portal mitra POLIRAN." id="company-profile-heading" />
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Nama resmi perusahaan" id="official-name" hint="Sesuai Akta Pendirian atau NIB" required><input className={fieldClass} id="official-name" name="officialName" placeholder="Contoh: PT Nusantara Perkasa Utama" required /></Field>
            <Field label="Nama perusahaan yang ditampilkan di portal POLIRAN" id="display-name" required><input className={fieldClass} id="display-name" name="displayName" placeholder="Contoh: Nusantara Perkasa" required /></Field>
            <Field label="Bentuk badan usaha" id="legal-entity" required><select className={fieldClass} id="legal-entity" name="legalEntity" defaultValue="" required><option value="" disabled>Pilih bentuk badan usaha</option><option>PT</option><option>CV</option><option>Firma</option><option>UD</option><option>Koperasi</option><option>Yayasan</option></select></Field>
            <Field label="Bidang / sektor industri" id="sector" required><select className={fieldClass} id="sector" name="sector" defaultValue="" required><option value="" disabled>Pilih sektor industri</option><option>Manufaktur</option><option>Perdagangan</option><option>Jasa</option><option>Teknologi</option><option>Konstruksi</option><option>Logistik</option><option>Lainnya</option></select></Field>
            <Field label="Tahun berdiri perusahaan" id="established-year" hint="Opsional"><input className={fieldClass} id="established-year" name="establishedYear" type="number" inputMode="numeric" min="1900" max="2026" placeholder="Contoh: 2012" /></Field>
            <Field label="Perkiraan jumlah karyawan" id="employee-count" required><select className={fieldClass} id="employee-count" name="employeeCount" defaultValue="" required><option value="" disabled>Pilih jumlah karyawan</option><option>1–10 karyawan</option><option>11–50 karyawan</option><option>51–200 karyawan</option><option>201–500 karyawan</option><option>Lebih dari 500 karyawan</option></select></Field>
            <Field label="Website resmi perusahaan" id="website" hint="Opsional"><input className={fieldClass} id="website" name="websiteUrl" type="url" placeholder="https://www.perusahaan.co.id" /></Field>
            <div className="md:col-span-2"><label className="text-sm font-bold text-slate-800" htmlFor="company-description">Deskripsi singkat profil perusahaan <span className="text-red-700">*</span></label><p className="mt-1 text-xs text-slate-500">Ceritakan sejarah, budaya kerja, fokus operasional, dan komitmen penyerapan tenaga kerja.</p><textarea className="mt-2 min-h-32 w-full rounded-lg border border-slate-300 bg-[#edf4ff] p-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="company-description" name="companyDescription" rows={5} required /></div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="company-location-heading">
          <SectionHeading icon={<Upload className="h-5 w-5" aria-hidden="true" />} title="Logo & lokasi operasional" description="Logo mendukung pengenalan perusahaan; alamat dipakai untuk kebutuhan verifikasi wilayah dan penempatan kerja." id="company-location-heading" />
          <div className="mt-6">
            <FilePicker id="company-logo" label="Logo perusahaan" help="PNG, JPG, atau JPEG · maksimal 5 MB · opsional" fileName={logoFile} onChange={setLogoFile} required={false} />
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Negara" id="country" required><select className={fieldClass} id="country" name="country" defaultValue="Indonesia" required><option>Indonesia</option></select></Field>
            <Field label="Provinsi" id="province" required><select className={fieldClass} id="province" name="province" defaultValue="" required><option value="" disabled>Pilih provinsi</option><option>DKI Jakarta</option><option>Jawa Barat</option><option>Jawa Tengah</option><option>Jawa Timur</option><option>Banten</option><option>Lainnya</option></select></Field>
            <Field label="Kota / Kabupaten" id="city" required><select className={fieldClass} id="city" name="city" defaultValue="" required><option value="" disabled>Pilih kota atau kabupaten</option><option>Jakarta Selatan</option><option>Jakarta Timur</option><option>Bandung</option><option>Semarang</option><option>Surabaya</option></select></Field>
            <Field label="Kecamatan" id="district" required><select className={fieldClass} id="district" name="district" defaultValue="" required><option value="" disabled>Pilih kecamatan</option><option>Setiabudi</option><option>Tebet</option><option>Menteng</option><option>Lainnya</option></select></Field>
            <Field label="Kode pos" id="postal-code" required><input className={fieldClass} id="postal-code" name="postalCode" type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} placeholder="Contoh: 12920" required /></Field>
            <div className="md:col-span-2"><label className="text-sm font-bold text-slate-800" htmlFor="full-address">Alamat lengkap kantor / gedung operasional <span className="text-red-700">*</span></label><textarea className="mt-2 min-h-24 w-full rounded-lg border border-slate-300 bg-[#edf4ff] p-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-[#132238] focus:bg-white focus:ring-2 focus:ring-[#132238]/20" id="full-address" name="fullAddress" rows={3} placeholder="Nama jalan, nomor gedung/kantor, RT/RW, kelurahan" required /></div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-[#e8f0ff] p-4" aria-label="Titik lokasi kantor">
            <div className="flex flex-col gap-3 sm:flex-row"><input className="h-10 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#132238] focus:ring-2 focus:ring-[#132238]/20" placeholder="Cari nama gedung, jalan, atau patokan" aria-label="Cari lokasi kantor" /><div className="flex gap-2"><button className="h-10 rounded-lg bg-[#132238] px-3 text-xs font-bold text-white" type="button">Peta</button><button className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-xs font-bold text-slate-700" type="button">Satelit</button></div></div>
            <div className="mt-3 grid min-h-48 place-items-center rounded-lg border border-dashed border-[#132238]/30 bg-[#d7e6ff] text-center"><div><p className="font-bold text-[#132238]">Titik presisi lokasi kantor</p><p className="mt-1 text-xs text-slate-600">Peta interaktif dan GPS akan tersedia saat layanan lokasi terhubung.</p><button className="mt-3 h-10 rounded-lg border border-[#132238] bg-white px-4 text-xs font-bold text-[#132238]" type="button">Gunakan GPS / lokasi saat ini</button></div></div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="legal-heading">
          <SectionHeading icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />} title="Dokumen legalitas & NIB OSS" description="Masukkan data legalitas perusahaan dan pilih salinan dokumen untuk kebutuhan verifikasi berikutnya." id="legal-heading" />
          <div className="mt-6 space-y-8">
            <LegalBlock title="Nomor Induk Berusaha (NIB) OSS" number="01"><div className="grid gap-5 md:grid-cols-2"><Field label="Nomor Induk Berusaha (NIB) 13 digit" id="nib-number" required><input className={fieldClass} id="nib-number" name="nib" inputMode="numeric" pattern="[0-9]{13}" maxLength={13} placeholder="Contoh: 1294000381024" required /></Field><Field label="Tanggal terbit NIB OSS" id="nib-date" required><input className={fieldClass} id="nib-date" name="nibDate" type="date" required /></Field><Field label="Status modal perusahaan" id="modal-status" required><input className={`${fieldClass} cursor-not-allowed bg-slate-100 text-slate-600`} id="modal-status" name="modalStatus" value="Pilih setelah validasi OSS" readOnly /></Field><div className="flex items-end"><button className="h-12 w-full rounded-lg border border-slate-300 bg-slate-100 px-4 text-sm font-bold text-slate-500" type="button" disabled>Validasi NIB OSS (belum aktif)</button></div></div><div className="mt-5"><FilePicker id="nib-document" label="Berkas salinan NIB resmi OSS" help="PDF · maksimal 5 MB" fileName={nibFile} onChange={setNibFile} /></div></LegalBlock>
            <LegalBlock title="Nomor Pokok Wajib Pajak (NPWP) badan usaha" number="02"><div className="grid gap-5 md:grid-cols-2"><Field label="NPWP badan usaha" id="npwp-number" hint="Format 16 digit" required><input className={fieldClass} id="npwp-number" name="npwp" placeholder="Contoh: 01.234.567.8-012.000" required /></Field><Field label="Nama wajib pajak" id="npwp-name" hint="Sesuai kartu NPWP" required><input className={fieldClass} id="npwp-name" name="npwpName" required /></Field></div><div className="mt-5"><FilePicker id="npwp-document" label="Berkas NPWP badan usaha" help="PDF, JPG, atau PNG · maksimal 5 MB" fileName={npwpFile} onChange={setNpwpFile} /></div></LegalBlock>
            <LegalBlock title="Akta pendirian & SK Kemenkumham RI" number="03"><div className="grid gap-5 md:grid-cols-2"><Field label="Nomor & tanggal akta notaris" id="akta-number" required><input className={fieldClass} id="akta-number" name="aktaNumber" placeholder="Contoh: No. 42 tanggal 18 Januari 2018" required /></Field><Field label="Nama notaris pembuat akta" id="notaris-name" required><input className={fieldClass} id="notaris-name" name="notarisName" required /></Field><div className="md:col-span-2"><Field label="Nomor SK pengesahan Kemenkumham RI" id="sk-kemenkumham" required><input className={fieldClass} id="sk-kemenkumham" name="skKemenkumham" placeholder="Contoh: AHU-0012948.AH.01.01.TAHUN 2018" required /></Field></div></div><div className="mt-5"><FilePicker id="akta-document" label="Berkas Akta Pendirian & SK Kemenkumham" help="PDF · maksimal 5 MB" fileName={aktaFile} onChange={setAktaFile} /></div></LegalBlock>
            <LegalBlock title="Izin operasional & sertifikasi sektoral" number="04"><div className="grid gap-5 md:grid-cols-2"><Field label="Jenis lisensi / sertifikasi sektoral" id="license-type"><select className={fieldClass} id="license-type" name="licenseType" defaultValue=""><option value="">Pilih jenis izin bila ada</option><option>SIUP</option><option>Izin Usaha Jasa Konstruksi</option><option>Sertifikasi halal</option><option>Sertifikasi K3</option><option>Lainnya</option></select></Field><Field label="Nomor izin / masa berlaku dokumen" id="license-number"><input className={fieldClass} id="license-number" name="licenseNumber" placeholder="Contoh: 021/IUJK-SBY/2022 (berlaku s.d. 2027)" /></Field></div><div className="mt-5"><FilePicker id="license-document" label="Unggah dokumen pendukung izin sektoral" help="PDF · maksimal 5 MB · opsional bila tidak memiliki izin sektoral" fileName={licenseFile} onChange={setLicenseFile} required={false} /></div></LegalBlock>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-5" aria-labelledby="compliance-heading"><h2 className="text-sm font-extrabold text-[#132238]" id="compliance-heading">Pernyataan kepatuhan & integritas perburuhan</h2><fieldset className="mt-3 space-y-3"><legend className="sr-only">Pernyataan kepatuhan</legend><label className="flex gap-2.5 py-1"><input className="mt-0.5 h-4 w-4 shrink-0 accent-[#132238]" type="checkbox" required /><span className="text-xs leading-5 text-slate-700">Perusahaan mematuhi UMR/UMK, BPJS Ketenagakerjaan, dan BPJS Kesehatan untuk tenaga kerja yang direkrut.</span></label><label className="flex gap-2.5 py-1"><input className="mt-0.5 h-4 w-4 shrink-0 accent-[#132238]" type="checkbox" required /><span className="text-xs leading-5 text-slate-700">Entitas usaha beroperasi aktif secara sah dan tidak sedang dalam sengketa pidana perburuhan, penipuan ketenagakerjaan, TPPO, atau kepailitan.</span></label></fieldset></section>

        <div className="flex flex-col-reverse gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-col gap-3 sm:flex-row"><button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-bold text-slate-700 hover:bg-slate-50" type="button" onClick={onBack}>Kembali ke akun PIC</button><button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-bold text-slate-700 hover:bg-slate-50" type="button" disabled>Simpan draf (belum aktif)</button></div><button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#132238] px-5 text-sm font-bold text-white hover:bg-[#0b172a]" type="submit">Lanjut ke review & verifikasi<ChevronRight className="h-5 w-5" aria-hidden="true" /></button></div>
      </form>

    </div>
  );
}

function SectionHeading({ icon, title, description, id }: { icon: ReactNode; title: string; description: string; id: string }) {
  return <div className="flex items-start gap-3 border-b border-slate-100 pb-5"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#132238] text-amber-300">{icon}</div><div><h2 className="text-lg font-extrabold text-[#132238]" id={id}>{title}</h2><p className="mt-1 text-sm leading-5 text-slate-600">{description}</p></div></div>;
}

function Field({ label, id, hint, required, children }: { label: string; id: string; hint?: string; required?: boolean; children: ReactNode }) {
  return <div><label className="text-sm font-bold text-slate-800" htmlFor={id}>{label} {required && <span className="text-red-700">*</span>}</label>{hint ? <p className="mt-1 min-h-5 text-xs text-slate-500">{hint}</p> : <div className="mt-1 min-h-5" aria-hidden="true" />}{children}</div>;
}

function LegalBlock({ title, number, children }: { title: string; number: string; children: ReactNode }) {
  return <div className="border-t border-slate-200 pt-6 first:border-t-0 first:pt-0"><div className="mb-5 flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#132238] text-xs font-bold text-amber-300">{number}</span><h3 className="font-extrabold text-[#132238]">{title}</h3></div>{children}</div>;
}
