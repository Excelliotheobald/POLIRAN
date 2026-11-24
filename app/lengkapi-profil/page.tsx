"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronDown,
  Factory,
  GraduationCap,
  HardHat,
  Headphones,
  HeartPulse,
  Landmark,
  MapPin,
  Megaphone,
  Palette,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Terminal,
  Truck,
  Utensils,
  Upload,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import LocationPicker, { type SelectedLocation } from "@/components/LocationPicker";

/* ----------------------------- Static mock data ---------------------------- */

const PROVINSI_LIST = ["DKI Jakarta", "Jawa Barat", "Banten", "Jawa Tengah", "Jawa Timur"];

const KOTA_BY_PROVINSI: Record<string, string[]> = {
  "DKI Jakarta": [
    "Jakarta Pusat",
    "Jakarta Selatan",
    "Jakarta Barat",
    "Jakarta Timur",
    "Jakarta Utara",
  ],
  "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Depok", "Cirebon"],
  Banten: ["Serang", "Cilegon", "Tangerang", "Tangerang Selatan", "Lebak"],
  "Jawa Tengah": ["Semarang", "Surakarta", "Magelang", "Pekalongan", "Tegal"],
  "Jawa Timur": ["Surabaya", "Malang", "Sidoarjo", "Mojokerto", "Kediri"],
};

const KECAMATAN_BY_KOTA: Record<string, string[]> = {
  "Jakarta Pusat": ["Gambir", "Tanah Abang", "Menteng", "Senen", "Kemayoran"],
  Bandung: ["Coblong", "Sukajadi", "Cicendo", "Andir", "Cimahi Utara"],
  Bekasi: ["Bekasi Timur", "Bekasi Barat", "Bekasi Selatan", "Bekasi Utara", "Medan Satria"],
};

const KELURAHAN_BY_KECAMATAN: Record<string, string[]> = {
  Gambir: ["Gambir", "Kebon Kelapa", "Petojo Utara", "Duri Pulo", "Cideng"],
  "Tanah Abang": ["Kebon Kacang", "Bendungan Hilir", "Karet Tengsin", "Petamburan", "Blok M"],
};

const FALLBACK_WILAYAH = ["Lainnya"];

interface InterestCategory {
  id: number;
  icon: LucideIcon;
  title: string;
  iconColor: string;
  iconBackground: string;
  dotColor: string;
}

const INTEREST_CATEGORIES: InterestCategory[] = [
  { id: 1, icon: Terminal, title: "Teknologi & IT", iconColor: "text-blue-600", iconBackground: "bg-blue-50", dotColor: "bg-blue-600" },
  { id: 2, icon: Factory, title: "Manufaktur & Produksi", iconColor: "text-amber-600", iconBackground: "bg-amber-50", dotColor: "bg-amber-600" },
  { id: 3, icon: Landmark, title: "Administrasi & Perkantoran", iconColor: "text-cyan-600", iconBackground: "bg-cyan-50", dotColor: "bg-cyan-600" },
  { id: 4, icon: Truck, title: "Logistik & Pergudangan", iconColor: "text-emerald-600", iconBackground: "bg-emerald-50", dotColor: "bg-emerald-600" },
  { id: 5, icon: HardHat, title: "Konstruksi & Bangunan", iconColor: "text-orange-600", iconBackground: "bg-orange-50", dotColor: "bg-orange-600" },
  { id: 6, icon: Store, title: "Perdagangan & Ritel", iconColor: "text-teal-600", iconBackground: "bg-teal-50", dotColor: "bg-teal-600" },
  { id: 7, icon: Palette, title: "Desain Kreatif & Multimedia", iconColor: "text-fuchsia-600", iconBackground: "bg-fuchsia-50", dotColor: "bg-fuchsia-600" },
  { id: 8, icon: Megaphone, title: "Marketing & Komunikasi", iconColor: "text-rose-600", iconBackground: "bg-rose-50", dotColor: "bg-rose-600" },
  { id: 9, icon: Wrench, title: "Otomotif & Alat Berat", iconColor: "text-slate-600", iconBackground: "bg-slate-100", dotColor: "bg-slate-600" },
  { id: 10, icon: Headphones, title: "Layanan & Customer Service", iconColor: "text-purple-600", iconBackground: "bg-purple-50", dotColor: "bg-purple-600" },
  { id: 11, icon: ShieldCheck, title: "Keamanan & Kebersihan", iconColor: "text-indigo-600", iconBackground: "bg-indigo-50", dotColor: "bg-indigo-600" },
  { id: 12, icon: GraduationCap, title: "Pendidikan", iconColor: "text-blue-600", iconBackground: "bg-blue-50", dotColor: "bg-blue-600" },
  { id: 13, icon: HeartPulse, title: "Kesehatan", iconColor: "text-emerald-600", iconBackground: "bg-emerald-50", dotColor: "bg-emerald-600" },
  { id: 14, icon: Utensils, title: "Kuliner & Perhotelan", iconColor: "text-orange-600", iconBackground: "bg-orange-50", dotColor: "bg-orange-600" },
];

/* --------------------------------- Page ----------------------------------- */

export default function LengkapiProfilPage() {
  const router = useRouter();

  // Wizard state
  const [step, setStep] = useState(1);

  // Step 1: NIK verification
  const [nik, setNik] = useState(["", "", "", ""]);
  const nikRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Step 2: Domisili wilayah
  const [provinsi, setProvinsi] = useState("DKI Jakarta");
  const [kota, setKota] = useState("Jakarta Pusat");
  const [kecamatan, setKecamatan] = useState("Gambir");
  const [kelurahan, setKelurahan] = useState("Gambir");
  const [rt, setRt] = useState("003");
  const [rw, setRw] = useState("002");
  const [alamat, setAlamat] = useState("Jl. Taman Kebon Sirih III No. 18");
  const [locationSelected, setLocationSelected] = useState(false);

  // Step 3: Minat & bakat
  const [interests, setInterests] = useState<number[]>([]);

  const nikComplete = nik.every((segment) => segment.length === 4);
  const step2Complete = Boolean(
    locationSelected &&
    provinsi &&
      kota &&
      kecamatan &&
      kelurahan &&
      rt.length === 3 &&
      rw.length === 3 &&
      alamat.trim()
  );
  const step3Complete = interests.length > 0;

  const isStepComplete = (stepNumber: number) => {
    if (stepNumber === 1) return nikComplete;
    if (stepNumber === 2) return step2Complete;
    return step3Complete;
  };

  const goToStep = (nextStep: number) => {
    if (nextStep < 1 || nextStep > 3) return;

    if (nextStep > step) {
      for (let requiredStep = step; requiredStep < nextStep; requiredStep += 1) {
        if (!isStepComplete(requiredStep)) {
          const message = requiredStep === 1
            ? "Lengkapi 16 digit NIK terlebih dahulu."
            : "Pilih titik lokasi dan lengkapi seluruh alamat domisili terlebih dahulu.";
          alert(message);
          return;
        }
      }
    }

    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (step === 1) {
      router.push("/register");
      return;
    }
    goToStep(step - 1);
  };

  const handleNikChange = (index: number, value: string) => {
    const digits = value.replace(/[^0-9]/g, "").slice(0, 4);
    setNik((prev) => {
      const next = [...prev];
      next[index] = digits;
      return next;
    });
    if (digits.length === 4 && index < 3) {
      nikRefs.current[index + 1]?.focus();
    }
  };

  const toggleInterest = (id: number) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLocationSelect = (location: SelectedLocation) => {
    setLocationSelected(true);
    if (location.province) setProvinsi(location.province);
    if (location.city) setKota(location.city);
    if (location.district) setKecamatan(location.district);
    if (location.village) setKelurahan(location.village);
    if (location.rt) setRt(location.rt.replace(/[^0-9]/g, "").slice(0, 3));
    if (location.rw) setRw(location.rw.replace(/[^0-9]/g, "").slice(0, 3));
    if (location.road || location.houseNumber) {
      setAlamat([location.road, location.houseNumber].filter(Boolean).join(" "));
    }
  };

  const finishOnboarding = () => {
    if (interests.length === 0) {
      alert("Mohon pilih setidaknya 1 bidang pekerjaan yang Anda minati.");
      return;
    }
    alert("Selamat! Profil Anda berhasil diverifikasi oleh sistem POLIRAN. Mengalihkan ke dashboard pencari kerja...");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-start justify-center px-2 py-4 sm:px-4 sm:py-8 relative bg-surface">
      <div className="w-full max-w-5xl mx-auto py-1 sm:py-4 md:py-8">
        {/* Onboarding Context Banner / Meta Header */}
        <div className="flex items-center gap-3 mb-3 sm:mb-5">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Kembali"
            className="inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-on-surface truncate">Lengkapi Profil Pencari Kerja</h1>
          </div>
        </div>

        {/* Stepper Tabs Indicator */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 mb-4 sm:mb-7">
          {[
            { num: 1, label: "NIK" },
            { num: 2, label: "Domisili" },
            { num: 3, label: "Minat & Bakat" },
          ].map(({ num, label }) => {
            const isActive = num === step;
            const isComplete = num === 1 ? nikComplete : num === 2 ? step2Complete : step3Complete;
            return (
              <button
                key={num}
                type="button"
                onClick={() => goToStep(num)}
                className={`p-2 sm:p-3 min-h-[58px] sm:min-h-0 rounded-lg sm:rounded-xl transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 ${
                  isActive
                    ? "bg-surface-container-lowest shadow-sm"
                    : "bg-surface-container-low opacity-75 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-semibold shrink-0 ${
                    isActive
                      ? "bg-primary text-on-primary"
                      : isComplete
                        ? "bg-on-tertiary-container text-white"
                        : "bg-surface-container-highest text-on-surface-variant"
                  }`}
                >
                  {isComplete ? <Check className="w-3.5 h-3.5" /> : num}
                </div>
                <div className="min-w-0 flex flex-col items-center sm:items-start">
                  <span className="hidden sm:block text-[10px] sm:text-xs text-on-surface-variant">Tahap {num}</span>
                  <span className={`text-[10px] sm:text-sm leading-tight text-center sm:text-left ${isActive ? "text-on-surface font-semibold" : "text-on-surface"}`}>
                    {label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Wizard Main Card Content Container */}
        <div className="relative">

          {/* ================= SLIDE 1: Verifikasi NIK ================= */}
          <section className={step === 1 ? "block" : "hidden"}>
            <div className="space-y-2 mb-5 sm:mb-6">
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <BadgeCheck className="w-4 h-4" />
                <span>Identitas Kependudukan Resmi</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-on-surface">Langkah 1: Verifikasi NIK KTP Anda</h2>
              
            </div>

            {/* NIK Input Module */}
            <div className="space-y-2.5 mb-5 sm:mb-6">
              <div className="flex items-center justify-between gap-3">
                <label className="text-sm font-semibold text-on-surface" htmlFor="nik-segment-0">
                  NIK KTP <span className="text-red-600">*</span>
                </label>
                <span className="text-[11px] text-on-surface-variant">16 digit</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 rounded-xl bg-surface-container-low p-2 sm:p-2.5">
                {["Prov/Kab", "Kecamatan", "Tgl Lahir", "Nomor Urut"].map((segmentLabel, index) => (
                  <div key={segmentLabel}>
                    <input
                      ref={(el) => {
                        nikRefs.current[index] = el;
                      }}
                      aria-label={`NIK ${segmentLabel}`}
                      id={`nik-segment-${index}`}
                      className="w-full text-center font-mono text-base sm:text-lg font-semibold bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-3.5 px-1.5 sm:px-2 shadow-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/15"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="0000"
                      type="text"
                      value={nik[index]}
                      onChange={(e) => handleNikChange(index, e.target.value)}
                    />
                    <span className="text-center block text-[9px] sm:text-[10px] text-on-surface-variant mt-1">{segmentLabel}</span>
                  </div>
                ))}
              </div>
              {nikComplete ? (
                <div className="flex items-center gap-2 text-on-tertiary-container text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Format NIK valid dan belum terdaftar di lowongan aktif lainnya</span>
                </div>
              ) : (
                <p className="text-xs text-on-surface-variant">Lengkapi 16 digit NIK sesuai e-KTP Anda.</p>
              )}
            </div>

            {/* Optional e-KTP Upload */}
            <div className="space-y-2 mb-5 sm:mb-6">
              <span className="block text-sm font-semibold text-on-surface">Dokumen pendukung <span className="text-xs font-normal text-on-surface-variant">(opsional)</span></span>
              <button
                type="button"
                aria-label="Unggah foto e-KTP"
                className="w-full bg-surface-container-lowest hover:bg-surface-container-low transition-colors rounded-xl p-3.5 sm:p-4 flex items-center gap-3 text-left cursor-pointer group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                  <ScanLine className="w-5 h-5" />
                </div>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-on-surface">Unggah foto e-KTP</span>
                  <span className="mt-0.5 flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <Upload className="w-3.5 h-3.5" /> JPG, PNG, atau PDF · Maks. 5 MB
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-on-surface-variant group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Slide 1 CTA Navigation */}
            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={() => goToStep(2)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span>Lanjut: Data Domisili</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* ================= SLIDE 2: Domisili Wilayah ================= */}
          <section className={step === 2 ? "block" : "hidden"}>
            <div className="space-y-1 mb-3 sm:mb-5">
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Pemetaan Wilayah Tempat Tinggal</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-on-surface">Langkah 2: Lengkapi Alamat Domisili Tinggal</h2>
              
            </div>

            <LocationPicker onLocationSelect={handleLocationSelect} />

            <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* Provinsi */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-on-surface" htmlFor="dom-provinsi">
                  Provinsi
                </label>
                <div className="relative">
                  <select
                    id="dom-provinsi"
                    className="w-full bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-2.5 px-2 sm:px-3 text-xs sm:text-sm appearance-none shadow-sm focus:bg-surface-container-low focus:outline-none"
                    value={provinsi}
                    onChange={(e) => {
                      const nextProvinsi = e.target.value;
                      setProvinsi(nextProvinsi);
                      const nextKota = (KOTA_BY_PROVINSI[nextProvinsi] ?? FALLBACK_WILAYAH)[0];
                      setKota(nextKota);
                      const nextKecamatan = (KECAMATAN_BY_KOTA[nextKota] ?? FALLBACK_WILAYAH)[0];
                      setKecamatan(nextKecamatan);
                      setKelurahan((KELURAHAN_BY_KECAMATAN[nextKecamatan] ?? FALLBACK_WILAYAH)[0]);
                    }}
                  >
                    {[...new Set([...PROVINSI_LIST, provinsi])].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 sm:right-3 top-3 text-on-surface-variant pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              {/* Kota / Kabupaten */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-on-surface" htmlFor="dom-kota">
                  Kota / Kabupaten
                </label>
                <div className="relative">
                  <select
                    id="dom-kota"
                    className="w-full bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-2.5 px-2 sm:px-3 text-xs sm:text-sm appearance-none shadow-sm focus:bg-surface-container-low focus:outline-none"
                    value={kota}
                    onChange={(e) => {
                      const nextKota = e.target.value;
                      setKota(nextKota);
                      const nextKecamatan = (KECAMATAN_BY_KOTA[nextKota] ?? FALLBACK_WILAYAH)[0];
                      setKecamatan(nextKecamatan);
                      setKelurahan((KELURAHAN_BY_KECAMATAN[nextKecamatan] ?? FALLBACK_WILAYAH)[0]);
                    }}
                  >
                    {[...new Set([...(KOTA_BY_PROVINSI[provinsi] ?? FALLBACK_WILAYAH), kota])].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 sm:right-3 top-3 text-on-surface-variant pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* Kecamatan */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-on-surface" htmlFor="dom-kecamatan">
                  Kecamatan
                </label>
                <div className="relative">
                  <select
                    id="dom-kecamatan"
                    className="w-full bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-2.5 px-2 sm:px-3 text-xs sm:text-sm appearance-none shadow-sm focus:bg-surface-container-low focus:outline-none"
                    value={kecamatan}
                    onChange={(e) => {
                      const nextKecamatan = e.target.value;
                      setKecamatan(nextKecamatan);
                      setKelurahan((KELURAHAN_BY_KECAMATAN[nextKecamatan] ?? FALLBACK_WILAYAH)[0]);
                    }}
                  >
                    {[...new Set([...(KECAMATAN_BY_KOTA[kota] ?? FALLBACK_WILAYAH), kecamatan])].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 sm:right-3 top-3 text-on-surface-variant pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              {/* Kelurahan */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-on-surface" htmlFor="dom-kelurahan">
                  Kelurahan
                </label>
                <div className="relative">
                  <select
                    id="dom-kelurahan"
                    className="w-full bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-2.5 px-2 sm:px-3 text-xs sm:text-sm appearance-none shadow-sm focus:bg-surface-container-low focus:outline-none"
                    value={kelurahan}
                    onChange={(e) => setKelurahan(e.target.value)}
                  >
                    {[...new Set([...(KELURAHAN_BY_KECAMATAN[kecamatan] ?? FALLBACK_WILAYAH), kelurahan])].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 sm:right-3 top-3 text-on-surface-variant pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* RT / RW & Detail Jalan */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-on-surface" htmlFor="dom-rt">
                  RT
                </label>
                <input
                  className="w-full bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-2.5 px-2 sm:px-3 text-sm shadow-sm focus:bg-surface-container-low focus:outline-none"
                  id="dom-rt"
                  inputMode="numeric"
                  placeholder="004"
                  type="text"
                  value={rt}
                  onChange={(e) => setRt(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))}
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-on-surface" htmlFor="dom-rw">
                  RW
                </label>
                <input
                  className="w-full bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-2.5 px-2 sm:px-3 text-sm shadow-sm focus:bg-surface-container-low focus:outline-none"
                  id="dom-rw"
                  inputMode="numeric"
                  placeholder="002"
                  type="text"
                  value={rw}
                  onChange={(e) => setRw(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))}
                />
              </div>
              <div className="col-span-2 md:col-span-2 space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-on-surface" htmlFor="dom-alamat">
                  Alamat Lengkap / Nama Jalan
                </label>
                <input
                  className="w-full bg-surface-container-lowest text-on-surface rounded-lg py-3 sm:py-2.5 px-2 sm:px-3 text-sm shadow-sm focus:bg-surface-container-low focus:outline-none"
                  id="dom-alamat"
                  placeholder="Jl. Medan Merdeka Barat Timur No. 12"
                  type="text"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
            </div>

            {/* Slide 2 CTA Navigation */}
            <div className="flex justify-end pt-5 sm:pt-6">
              <button
                type="button"
                onClick={() => goToStep(3)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold px-6 sm:px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span>Lanjut: Minat & Bakat Karier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* ================= SLIDE 3: Minat & Bakat ================= */}
          <section className={step === 3 ? "block" : "hidden"}>
            <div className="space-y-1 mb-3 sm:mb-5">
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <Briefcase className="w-4 h-4" />
                <span>Penyesuaian Minat Pelamar</span>
              </div>
              <h2 className="text-sm sm:text-lg font-bold text-on-surface">
                Langkah 3: Pilih Bidang Pekerjaan & Keahlian Minat Anda
              </h2>
            </div>

            {/* Selected Counter and Active Preference Chips */}
            <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-primary-container text-on-primary shadow-sm w-fit">
                <SlidersHorizontal className="text-secondary-fixed w-4 h-4" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wide">
                  {interests.length} Bidang Dipilih
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-on-surface-variant text-right">
                Ketuk kartu untuk memilih
              </span>
            </div>

            {/* Job Interest Cards Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-8">
              {INTEREST_CATEGORIES.map((category) => {
                const selected = interests.includes(category.id);
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => toggleInterest(category.id)}
                    aria-pressed={selected}
                    className={`relative min-h-[102px] sm:min-h-[130px] p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-200 flex flex-col items-center justify-between text-center group ${
                      selected
                        ? "bg-surface-container-lowest ring-2 ring-primary-container shadow-md"
                        : "bg-surface-container-lowest shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center shadow-sm ${
                        selected ? "bg-primary-container text-secondary-fixed" : "bg-surface-container-high text-transparent"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${category.iconBackground} flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2`}>
                      <Icon className={`w-4 h-4 sm:w-6 sm:h-6 ${category.iconColor}`} strokeWidth={1.8} />
                    </div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-on-surface leading-tight mt-1.5 sm:mt-2 mb-0.5 line-clamp-2">
                      {category.title}
                    </h4>
                  </button>
                );
              })}
            </div>

            {/* Slide 3 CTA Navigation */}
            <div className="flex justify-end pt-5 sm:pt-6">
              <button
                type="button"
                onClick={finishOnboarding}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-container hover:bg-secondary-fixed text-primary text-sm font-bold px-5 sm:px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span>Selesaikan & Buka Dashboard Pelamar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
