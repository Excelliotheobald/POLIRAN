"use client";

import { useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
  GraduationCap,
  Building,
  MapPin as MapPinIcon,
  Factory,
  Coffee,
  Shield,
  Truck,
  Headphones,
  Wrench,
  Palette,
  Store,
} from "lucide-react";

type Employment = "Full Time" | "Part Time";
type Experience = "Fresh Graduate" | "1–3 Tahun" | ">3 Tahun";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  employment: Employment;
  experience: Experience;
  category: string;
  salary: string;
  accent: string;
};

const JOBS: Job[] = [
  { id: 1, title: "Staff IT Support", company: "PT Bank Central Asia Tbk", location: "Jakarta Selatan", employment: "Full Time", experience: "1–3 Tahun", category: "Teknologi & IT", salary: "Rp6–8 juta", accent: "bg-blue-600" },
  { id: 2, title: "Admin Staff", company: "PT Astra International Tbk", location: "Jakarta Timur", employment: "Part Time", experience: "Fresh Graduate", category: "Administrasi", salary: "Rp3–4,5 juta", accent: "bg-indigo-600" },
  { id: 3, title: "Marketing Staff", company: "PT Indofood Sukses Makmur", location: "Tangerang", employment: "Full Time", experience: "1–3 Tahun", category: "Marketing", salary: "Rp5–7 juta", accent: "bg-rose-600" },
  { id: 4, title: "Barista", company: "Kopi Nusantara", location: "Bandung", employment: "Part Time", experience: "Fresh Graduate", category: "Kuliner", salary: "Rp2,5–3,5 juta", accent: "bg-amber-600" },
  { id: 5, title: "Security Officer", company: "PT Garda Presisi Indonesia", location: "Bekasi", employment: "Full Time", experience: ">3 Tahun", category: "Keamanan", salary: "Rp4,5–6 juta", accent: "bg-slate-700" },
  { id: 6, title: "Staff Gudang", company: "PT Logistik Cepat Indonesia", location: "Jakarta Barat", employment: "Full Time", experience: "Fresh Graduate", category: "Logistik", salary: "Rp4–5,5 juta", accent: "bg-emerald-600" },
  { id: 7, title: "Operator Produksi", company: "PT Manufaktur Maju", location: "Karawang", employment: "Full Time", experience: "1–3 Tahun", category: "Manufaktur", salary: "Rp5–7 juta", accent: "bg-orange-600" },
  { id: 8, title: "Customer Service", company: "PT Layanan Bersama", location: "Depok", employment: "Part Time", experience: "Fresh Graduate", category: "Layanan", salary: "Rp3–4 juta", accent: "bg-purple-600" },
  { id: 9, title: "Teknisi AC", company: "Sejuk Teknik Mandiri", location: "Jakarta Pusat", employment: "Full Time", experience: ">3 Tahun", category: "Teknik", salary: "Rp6–9 juta", accent: "bg-cyan-600" },
  { id: 10, title: "Content Creator", company: "Ruang Kreatif Studio", location: "Jakarta Selatan", employment: "Part Time", experience: "1–3 Tahun", category: "Kreatif", salary: "Rp4–6 juta", accent: "bg-fuchsia-600" },
  { id: 11, title: "Pramuniaga", company: "PT Ritel Sejahtera", location: "Bogor", employment: "Full Time", experience: "Fresh Graduate", category: "Perdagangan", salary: "Rp3,5–4,5 juta", accent: "bg-teal-600" },
  { id: 12, title: "Driver Operasional", company: "Mitra Distribusi Nasional", location: "Tangerang Selatan", employment: "Full Time", experience: ">3 Tahun", category: "Transportasi", salary: "Rp5–7 juta", accent: "bg-sky-600" },
];

const EMPLOYMENT_OPTIONS = ["Semua", "Full Time", "Part Time"] as const;
const EXPERIENCE_OPTIONS = ["Semua", "Fresh Graduate", "1–3 Tahun", ">3 Tahun"] as const;
const LOCATION_OPTIONS = ["Semua", ...Array.from(new Set(JOBS.map((job) => job.location)))];

const COMPANY_ICONS: Record<string, React.ElementType> = {
  "PT Bank Central Asia Tbk": Building2,
  "PT Astra International Tbk": Building2,
  "PT Indofood Sukses Makmur": Factory,
  "Kopi Nusantara": Coffee,
  "PT Garda Presisi Indonesia": Shield,
  "PT Logistik Cepat Indonesia": Truck,
  "PT Manufaktur Maju": Factory,
  "PT Layanan Bersama": Headphones,
  "Sejuk Teknik Mandiri": Wrench,
  "Ruang Kreatif Studio": Palette,
  "PT Ritel Sejahtera": Store,
  "Mitra Distribusi Nasional": Truck,
};

function getCompanyIcon(company: string) {
  const Icon = COMPANY_ICONS[company] || Building2;
  return <Icon className="h-4 w-4 sm:h-5 sm:w-5" />;
}

function JobCard({ job }: { job: Job }) {
  return (
    <article className="flex min-h-[190px] flex-col justify-between rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md sm:min-h-[250px] sm:p-5">
      <div>
        <div className="mb-3 flex items-start justify-between gap-1.5 sm:mb-5 sm:gap-3">
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-white sm:h-11 sm:w-11 sm:rounded-xl ${job.accent}`}>
            {getCompanyIcon(job.company)}
          </div>
          <span className={`rounded-full px-1.5 py-1 text-[9px] font-semibold sm:px-2.5 sm:text-[11px] ${job.employment === "Full Time" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
            {job.employment}
          </span>
        </div>
        <h2 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 sm:text-base">{job.company}</h2>
        <div className="mt-3 space-y-1.5 text-[10px] text-slate-500 sm:mt-4 sm:space-y-2 sm:text-xs">
          <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-slate-400 sm:h-3.5 sm:w-3.5" />{job.location}</span>
          <span className="flex items-center gap-1.5 truncate"><BriefcaseBusiness className="h-3 w-3 shrink-0 text-slate-400 sm:h-3.5 sm:w-3.5" />{job.experience} · {job.category}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-1 border-t border-slate-100 pt-3 sm:mt-5 sm:pt-4">
        <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] font-semibold text-[#132238] sm:gap-1 sm:text-[11px]">Detail <span aria-hidden="true">→</span></span>
      </div>
    </article>
  );
}

export default function LowonganPekerjaanPage() {
  const [query, setQuery] = useState("");
  const [employment, setEmployment] = useState<(typeof EMPLOYMENT_OPTIONS)[number]>("Semua");
  const [experience, setExperience] = useState<(typeof EXPERIENCE_OPTIONS)[number]>("Semua");
  const [location, setLocation] = useState("Semua");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return JOBS.filter((job) => {
      const matchesQuery = !normalizedQuery || [job.title, job.company, job.location, job.category].join(" ").toLowerCase().includes(normalizedQuery);
      const matchesEmployment = employment === "Semua" || job.employment === employment;
      const matchesExperience = experience === "Semua" || job.experience === experience;
      const matchesLocation = location === "Semua" || job.location === location;
      return matchesQuery && matchesEmployment && matchesExperience && matchesLocation;
    });
  }, [employment, experience, location, query]);

  const clearFilters = () => {
    setQuery("");
    setEmployment("Semua");
    setExperience("Semua");
    setLocation("Semua");
  };

  return (
    <>
      <main className="min-h-screen bg-surface px-3 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Bursa kerja POLIRAN</span>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0b1c30] sm:text-4xl">Temukan pekerjaan yang sesuai</h1>
            <p className="mt-2 text-xs leading-relaxed text-on-surface-variant sm:mt-3 sm:text-base">Jelajahi lowongan dari perusahaan mitra yang sedang mencari talenta baru.</p>
          </div>

          <section className="mt-5 rounded-2xl bg-white p-2.5 shadow-card-clean sm:mt-7 sm:p-4" aria-label="Pencarian dan filter lowongan">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400">
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:block text-sm font-medium">Cari</span>
                </div>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-12 w-full rounded-xl bg-surface-container-low pl-[52px] sm:pl-[72px] pr-4 text-sm text-slate-800 outline-none transition focus:bg-white focus:ring-2 focus:ring-primary-container/15 placeholder:text-slate-400"
                  placeholder="Posisi, perusahaan, atau kota…"
                  aria-label="Cari lowongan"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Hapus pencarian"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <button type="button" onClick={() => setFiltersOpen((open) => !open)} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#132238] px-5 text-sm font-semibold text-white lg:hidden">
                <SlidersHorizontal className="h-4 w-4" /> Filter
              </button>
              <div className={`${filtersOpen ? "grid" : "hidden"} grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:flex-none`}>
                <label className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400 pointer-events-none">
                    <Building className="h-4 w-4" />
                  </span>
                  <span className="sr-only">Jenis pekerjaan</span>
                  <select value={employment} onChange={(event) => setEmployment(event.target.value as (typeof EMPLOYMENT_OPTIONS)[number])} className="h-12 w-full min-w-40 appearance-none rounded-xl bg-surface-container-low pl-11 pr-9 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary-container/15 lg:w-44">
                    {EMPLOYMENT_OPTIONS.map((option) => <option key={option} value={option}>{option === "Semua" ? "Semua jenis" : option}</option>)}
                  </select>
                </label>
                <label className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400 pointer-events-none">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span className="sr-only">Pengalaman</span>
                  <select value={experience} onChange={(event) => setExperience(event.target.value as (typeof EXPERIENCE_OPTIONS)[number])} className="h-12 w-full min-w-40 appearance-none rounded-xl bg-surface-container-low pl-11 pr-9 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary-container/15 lg:w-48">
                    {EXPERIENCE_OPTIONS.map((option) => <option key={option} value={option}>{option === "Semua" ? "Semua pengalaman" : option}</option>)}
                  </select>
                </label>
                <label className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400 pointer-events-none">
                    <MapPinIcon className="h-4 w-4" />
                  </span>
                  <span className="sr-only">Lokasi</span>
                  <select value={location} onChange={(event) => setLocation(event.target.value)} className="h-12 w-full min-w-40 appearance-none rounded-xl bg-surface-container-low pl-11 pr-9 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary-container/15 lg:w-48">
                    {LOCATION_OPTIONS.map((option) => <option key={option} value={option}>{option === "Semua" ? "Semua lokasi" : option}</option>)}
                  </select>
                </label>
              </div>
              {(query || employment !== "Semua" || experience !== "Semua" || location !== "Semua") && <button type="button" onClick={clearFilters} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-slate-500 hover:bg-surface-container-low hover:text-primary"><X className="h-4 w-4" /> Reset</button>}
            </div>
          </section>

          {filteredJobs.length > 0 ? (
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
              {filteredJobs.map((job) => <JobCard key={job.id} job={job} />)}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
              <Search className="mx-auto h-8 w-8 text-slate-300" />
              <h2 className="mt-3 font-bold text-slate-900">Lowongan tidak ditemukan</h2>
              <p className="mt-1 text-sm text-slate-500">Coba ubah kata kunci atau filter pencarian.</p>
              <button type="button" onClick={clearFilters} className="mt-5 rounded-full bg-[#132238] px-5 py-2.5 text-xs font-semibold text-white">Reset pencarian</button>
            </div>
          )}
</div>
       </main>
    </>
  );
}