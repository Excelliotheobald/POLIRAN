"use client";

import { Fragment, useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type ServiceCategory = {
  icon: string;
  title: string;
  description: string;
  itemClassName: string;
};

type EmploymentType = "Full Time" | "Part Time";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  employment: EmploymentType;
  logo: ReactNode;
};

type FeaturedProgram = {
  id?: string;
  icon: string;
  iconWrapClassName: string;
  title: string;
  description: string;
};

/* -------------------------------------------------------------------------- */
/*  Static data (mirrors the original homepage markup 1:1)                  */
/* -------------------------------------------------------------------------- */

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    icon: "fa-solid fa-briefcase",
    title: "Lowongan Kerja",
    description: "Temukan pekerjaan terbaik",
    itemClassName:
      "flex items-center space-x-4 p-2 pt-3 sm:pt-0 sm:px-4",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Pelatihan",
    description: "Tingkatkan keterampilan Anda",
    itemClassName:
      "flex items-center space-x-4 p-2 pt-4 sm:pt-0 sm:px-4",
  },
  {
    icon: "fa-solid fa-users",
    title: "Pencari Kerja",
    description: "Daftarkan diri dengan mudah",
    itemClassName:
      "flex items-center space-x-4 p-2 pt-4 sm:pt-0 sm:px-4",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Mitra Perusahaan",
    description: "Bergabung bersama kami",
    itemClassName:
      "flex items-center space-x-4 p-2 pt-4 sm:pt-0 sm:px-4",
  },
];

const TRENDING_KEYWORDS = ["IT Support", "Admin Staff", "Security", "Barista"];

const JOBS: Job[] = [
  {
    id: "bca-staff-it-support",
    title: "Staff IT Support",
    company: "PT Bank Central Asia Tbk",
    location: "Jakarta Selatan",
    employment: "Full Time",
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xs">
          <i className="fa-solid fa-building-columns" />
        </div>
        <span className="font-bold text-blue-800 text-base tracking-tight">
          BCA
        </span>
      </div>
    ),
  },
  {
    id: "indofood-marketing-staff",
    title: "Marketing Staff",
    company: "PT Indofood Sukses Makmur",
    location: "Tangerang",
    employment: "Full Time",
    logo: (
      <div className="flex items-center space-x-1.5">
        <span className="font-serif italic font-extrabold text-blue-600 text-lg tracking-tight">
          Indofood
        </span>
      </div>
    ),
  },
  {
    id: "astra-admin-staff",
    title: "Admin Staff",
    company: "PT Astra International Tbk",
    location: "Jakarta",
    employment: "Part Time",
    logo: (
      <div className="flex items-center space-x-1.5">
        <div className="w-5 h-3 bg-blue-700 rounded-sm" />
        <span className="font-bold text-blue-900 tracking-wider text-sm">
          ASTRA
        </span>
      </div>
    ),
  },
];

const FEATURED_PROGRAMS: FeaturedProgram[] = [
  {
    icon: "fa-solid fa-comments",
    iconWrapClassName:
      "w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-4",
    title: "Bimbingan Karier & Konseling",
    description:
      "Dukungan psikologi kerja serta konsultasi pengembangan potensi diri bersama pakar ketenagakerjaan dan jajaran Polri.",
  },
  {
    icon: "fa-solid fa-certificate",
    iconWrapClassName:
      "w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-4",
    title: "Sertifikasi Keahlian Gratis",
    description:
      "Program pelatihan vokasi gratis berstandar BNSP, mencakup keahlian teknis, administrasi, security berizin, hingga barista.",
  },
  {
    id: "mitra",
    icon: "fa-solid fa-building-user",
    iconWrapClassName:
      "w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-4",
    title: "Penyaluran Kerja Terpadu",
    description:
      "Akses langsung dengan jaringan mitra industri skala nasional untuk penempatan tenaga kerja terverifikasi dan aman.",
  },
];

/* -------------------------------------------------------------------------- */
/*  BEGIN: HeroSection                                                        */
/* -------------------------------------------------------------------------- */

function HeroSection({
  query,
  onQueryChange,
  onSearch,
  onTrendingSelect,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
  onTrendingSelect: (value: string) => void;
}) {
  return (
    <section
      data-purpose="hero-banner"
      id="beranda"
      className="relative bg-[#0f1f38] text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Background Image with Realistic Polrestabes Exterior Backdrop */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Gedung Polrestabes Semarang"
          className="w-full h-full object-cover lg:object-[65%_50%] opacity-100 mix-blend-luminosity scale-100 translate-x-130"
          src="/polres.jpg"
        />
        <div className="absolute inset-0 hero-bg-overlay" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 pt-30 pb-16 lg:pt-40 lg:pb-24 w-full">
        <div className="max-w-2xl">
          {/* Headline Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-2">
            <span className="text-white tracking-wider">POLIRAN</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Polisi Peduli Pengangguran
          </h2>
          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-300 font-normal mb-8 leading-relaxed max-w-xl">
            Bersama Polri, wujudkan kesempatan kerja untuk masa depan yang lebih
            baik.
          </p>

          {/* Search Input Pill Container */}
          <form
            data-purpose="job-search-input"
            onSubmit={onSearch}
            className="bg-white rounded-full p-1.5 sm:p-2 pl-5 sm:pl-6 flex items-center justify-between max-w-xl hero-search-shadow"
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <i className="fa-solid fa-magnifying-glass text-slate-400 text-sm" />
              <input
                id="job-search"
                name="q"
                type="text"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                className="w-full text-slate-800 placeholder-slate-400 text-sm border-0 focus:ring-0 focus:outline-none bg-transparent"
                placeholder="Cari lowongan pekerjaan..."
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full flex items-center space-x-2 transition-all shadow-sm"
            >
              <i className="fa-solid fa-magnifying-glass text-xs" />
              <span>Cari</span>
            </button>
          </form>

          {/* Trending Keywords */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="flex items-center text-amber-400 font-semibold mr-1">
              <i className="fa-solid fa-fire text-amber-500 mr-1.5" /> Trending:
            </span>
            {TRENDING_KEYWORDS.map((keyword, index) => (
              <Fragment key={keyword}>
                {index > 0 && <span className="text-slate-500">|</span>}
                <a
                  className="hover:text-amber-300 transition-colors"
                  href="#lowongan"
                  onClick={() => onTrendingSelect(keyword)}
                >
                  {keyword}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
/* END: HeroSection */

/* -------------------------------------------------------------------------- */
/*  BEGIN: QuickAccessBanner                                                  */
/* -------------------------------------------------------------------------- */

function QuickAccessBanner() {
  return (
    <section
      data-purpose="service-category-cards"
      className="relative z-20 -mt-10 sm:-mt-14 max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5"
    >
      <div className="bg-white rounded-2xl shadow-card-float border border-slate-100 p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.title} className={category.itemClassName}>
              <div className="text-slate-900 flex items-center justify-center">
                <i className={`${category.icon} text-4xl`} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* END: QuickAccessBanner */

/* -------------------------------------------------------------------------- */
/*  BEGIN: JobCard                                                            */
/* -------------------------------------------------------------------------- */

function JobCard({ job }: { job: Job }) {
  const badgeClassName =
    job.employment === "Part Time"
      ? "px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-100"
      : "px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100";

  return (
    <div
      data-purpose="job-card"
      className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between"
    >
      <div>
        {/* Header: Company Logo */}
        <div className="mb-4">{job.logo}</div>
        {/* Job Title and Company */}
        <h3 className="font-bold text-slate-900 text-base hover:text-amber-600 transition-colors cursor-pointer">
          {job.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1 font-medium">{job.company}</p>
      </div>
      {/* Card Footer Meta */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 flex items-center">
          <i className="fa-solid fa-location-dot text-slate-400 mr-1.5 text-xs" />
          {job.location}
        </span>
        <span className={badgeClassName}>{job.employment}</span>
      </div>
    </div>
  );
}
/* END: JobCard */

/* -------------------------------------------------------------------------- */
/*  BEGIN: LowonganTerbaruSection                                             */
/* -------------------------------------------------------------------------- */

function LowonganTerbaruSection({ query }: { query: string }) {
  const visibleJobs = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return JOBS;
    return JOBS.filter((job) =>
      [job.title, job.company, job.location, job.employment]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [query]);

  return (
    <section
      data-purpose="latest-job-listings"
      id="lowongan"
      className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 py-14 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-7">
        <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block" />
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Lowongan Terbaru
        </h2>
      </div>

      {/* Job Cards Grid & Promo Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {visibleJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

        {visibleJobs.length === 0 && (
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Lowongan tidak ditemukan
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tidak ada lowongan yang cocok dengan kata kunci
              &ldquo;{query}&ldquo;.
            </p>
          </div>
        )}

        {/* Promotional Feature Card (POLIRAN Call to Action) */}
        <div
          data-purpose="promo-card"
          id="tentang"
          className="promo-card-bg text-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-lg"
        >
          {/* Background Subtle Officer Silhouette Overlay */}
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none transform translate-x-4 translate-y-2">
            <i className="fa-solid fa-user-shield text-8xl text-white" />
          </div>
          <div className="relative z-10">
            <h3 className="font-extrabold text-base sm:text-lg leading-snug text-white">
              Wujudkan Karier Lebih Baik Bersama POLIRAN
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
              Dapatkan informasi lowongan, pelatihan, dan berbagai program
              ketenagakerjaan dari Polrestabes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
/* END: LowonganTerbaruSection */

/* -------------------------------------------------------------------------- */
/*  BEGIN: ProgramUnggulanSection                                             */
/* -------------------------------------------------------------------------- */

function ProgramUnggulanSection() {
  return (
    <section
      data-purpose="featured-programs"
      id="pelatihan"
      className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 pb-16 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-7">
        <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block" />
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Program Unggulan
        </h2>
      </div>

      {/* Feature Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED_PROGRAMS.map((program) => (
          <div
            key={program.title}
            id={program.id}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition"
          >
            <div className={program.iconWrapClassName}>
              <i className={program.icon} />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {program.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
/* END: ProgramUnggulanSection */

/* -------------------------------------------------------------------------- */
/*  Home page                                                                 */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [query, setQuery] = useState("");

  const scrollToJobs = () => {
    document
      .getElementById("lowongan")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    scrollToJobs();
  };

  const handleTrendingSelect = (value: string) => {
    setQuery(value);
  };

  return (
    <>
      <main>
        <HeroSection
          query={query}
          onQueryChange={setQuery}
          onSearch={handleSearch}
          onTrendingSelect={handleTrendingSelect}
        />

        <QuickAccessBanner />

        <LowonganTerbaruSection query={query} />

        <ProgramUnggulanSection />
      </main>
    </>
  );
}
