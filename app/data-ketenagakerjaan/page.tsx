import Link from "next/link";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";

const summary = [
  { icon: "groups", value: "20.220 Jiwa", label: "Total Terdata" },
  { icon: "work_history", value: "14.800 Jiwa", label: "Berhasil Bekerja" },
  { icon: "trending_up", value: "73,2%", label: "Tingkat Penyerapan" },
  { icon: "speed", value: "18 Hari", label: "Rerata Waktu Salur" },
];

const areas = [
  { name: "Polsek Gambir", total: "3.120", employed: "2.410", rate: "77,2%" },
  { name: "Polsek Senen", total: "2.850", employed: "2.140", rate: "75,1%" },
  { name: "Polsek Kemayoran", total: "3.600", employed: "2.590", rate: "71,9%" },
  { name: "Polsek Sawah Besar", total: "2.410", employed: "1.780", rate: "73,8%" },
  { name: "Polsek Menteng & Lainnya", total: "8.240", employed: "5.880", rate: "71,3%" },
];

const industries = [
  { icon: "precision_manufacturing", name: "Manufaktur & Logistik", rate: 38, total: "5.624", color: "bg-primary" },
  { icon: "computer", name: "IT & Administrasi", rate: 24, total: "3.552", color: "bg-amber-400" },
  { icon: "shield_person", name: "Keamanan Gada Pratama", rate: 20, total: "2.960", color: "bg-[#132238]" },
  { icon: "storefront", name: "F&B & Ritel Modern", rate: 18, total: "2.664", color: "bg-slate-400" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const glyphs: Record<string, React.ReactNode> = {
    groups: <><circle cx="9" cy="8" r="3" /><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M16 5.5a3 3 0 0 1 0 5.8M17 14c2.5.5 4 2.2 4 5" /></>,
    work_history: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5h8v2M3 12h18m-11 0v2h4v-2" /></>,
    trending_up: <><path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" /></>,
    speed: <><path d="M4.9 19a9 9 0 1 1 14.2 0" /><path d="m12 13 4-5M6 19h12" /><circle cx="12" cy="13" r="1" /></>,
    home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" /></>,
    sync: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.5 9A7 7 0 0 1 17 6l3 6M4 12l3 6a7 7 0 0 0 11.5-3" /></>,
    verified_user: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /><path d="m9 12 2 2 4-4" /></>,
    query_stats: <><path d="M3 3v18h18M7 14l4-4 4 3 6-7" /><circle cx="19" cy="6" r="2" /></>,
    calendar_month: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></>,
    verified: <><path d="m12 3 2.3 1.4 2.7.2 1.1 2.5 2 1.8-.6 2.7.6 2.7-2 1.8-1.1 2.5-2.7.2L12 20l-2.3-1.4-2.7-.2-1.1-2.5-2-1.8.6-2.7-.6-2.7 2-1.8L7 4.4l2.7-.2z" /><path d="m8.5 11.5 2.2 2.2 4.8-5" /></>,
    work: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5h8v2M3 12h18m-11 0v2h4v-2" /></>,
    arrow_forward: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /></>,
    person_search: <><circle cx="10" cy="8" r="4" /><path d="M2 20c0-4 3-6 8-6m7 1 5 5m-2-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></>,
    update: <><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8m0-5v5h5" /><path d="M12 7v5l3 2" /></>,
    location_on: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></>,
    domain: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3" /></>,
    precision_manufacturing: <><path d="M3 21h18M5 21V9l5 3V9l5 3V5h4v16M17 8h2" /><circle cx="17" cy="3" r="1" /></>,
    computer: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
    shield_person: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /><circle cx="12" cy="9" r="2" /><path d="M8.5 15c.8-2 6.2-2 7 0" /></>,
    storefront: <><path d="M3 10v10h18V10M2 10l2-7h16l2 7M2 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 2 0M9 20v-6h6v6" /></>,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" className={`inline-block h-[1em] w-[1em] shrink-0 ${className}`} {...common}>{glyphs[name] ?? <circle cx="12" cy="12" r="8" />}</svg>;
}

function EmploymentChart() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-100 bg-white p-3 sm:p-6">
      <svg viewBox="0 0 1000 450" role="img" aria-label="Grafik tren penyerapan tenaga kerja dan pencari kerja sepanjang tahun 2026" className="h-auto min-w-[680px] w-full">
        <defs>
          <linearGradient id="employmentFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff432a" stopOpacity=".2" /><stop offset="100%" stopColor="#ff432a" stopOpacity="0" /></linearGradient>
          <linearGradient id="searchFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#42cfa5" stopOpacity=".2" /><stop offset="100%" stopColor="#42cfa5" stopOpacity="0" /></linearGradient>
        </defs>
        {[60, 135, 210, 285, 360].map((y) => <line key={y} x1="90" y1={y} x2="930" y2={y} stroke="#e2e8f0" strokeDasharray="5 6" />)}
        <polygon points="90,360 180,320 270,300 360,260 450,245 540,220 630,175 720,150 810,110 900,75 900,360" fill="url(#employmentFill)" />
        <polygon points="90,360 180,330 270,280 360,310 450,240 540,190 630,210 720,125 810,185 900,145 900,360" fill="url(#searchFill)" />
        <polyline points="90,360 180,320 270,300 360,260 450,245 540,220 630,175 720,150 810,110 900,75" fill="none" stroke="#ff432a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="90,360 180,330 270,280 360,310 450,240 540,190 630,210 720,125 810,185 900,145" fill="none" stroke="#42cfa5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt"].map((month, i) => <text key={month} x={90 + i * 90} y="395" textAnchor="middle" fill="#64748b" fontSize="13">{month}</text>)}
        {["100%", "75%", "50%", "25%", "0%"].map((label, i) => <text key={label} x="52" y={65 + i * 75} textAnchor="end" fill="#64748b" fontSize="12">{label}</text>)}
      </svg>
    </div>
  );
}

export default function DataKetenagakerjaanPage() {
  return (
    <>
      <MainHeader />
      <main className="min-h-screen bg-[#f8f9ff] pt-20 text-[#0b1c30]">
        <section className="bg-[#eff4ff] py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-slate-900"><Icon name="home" className="text-sm" />Beranda</Link>
              <span aria-hidden="true">/</span><span className="font-semibold text-[#0b1c30]">Data Ketenagakerjaan & Statistik POLIRAN</span>
            </nav>
            <div className="flex flex-col gap-3 rounded-xl bg-[#000b1f] p-3 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
              <div className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300 text-[#000b1f]"><Icon name="sync" /></span><p className="text-sm"><strong className="text-amber-300">Data Real-Time:</strong> Terintegrasi Polrestabes, Bhabinkamtibmas, dan Disnaker RI.</p></div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#132238] px-3 py-2 text-[11px] font-semibold text-amber-300"><Icon name="verified_user" className="text-sm" />Status Data: Terverifikasi Presisi 2026</span>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e5eeff] py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-900"><Icon name="query_stats" className="text-sm" />Statistik Presisi 2026</span>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Data Ketenagakerjaan POLIRAN</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-lg">Pantauan data penyaluran kerja dan pengurangan angka pengangguran terverifikasi di wilayah hukum Polrestabes.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {summary.map((item) => <article key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm"><Icon name={item.icon} className="text-3xl text-amber-600" /><div><p className="text-lg font-bold leading-tight sm:text-xl">{item.value}</p><p className="mt-1 text-xs text-slate-500">{item.label}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
            <section className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm sm:p-7" aria-labelledby="trend-title">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div><h2 id="trend-title" className="text-xl font-bold sm:text-2xl">Tren Penyerapan Tenaga Kerja</h2><p className="mt-1 text-sm text-slate-500">Rasio kumulatif penyerapan tenaga kerja per bulan (TA 2026)</p></div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold"><Icon name="calendar_month" className="text-base text-amber-600" />TA 2026</span>
              </div>
              <EmploymentChart />
              <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 text-xs sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-x-5 gap-y-2"><span className="flex items-center gap-2 font-semibold"><i className="h-1.5 w-5 rounded-full bg-[#ff432a]" />Tren sudah bekerja</span><span className="flex items-center gap-2 text-slate-600"><i className="h-1.5 w-5 rounded-full bg-[#42cfa5]" />Fluktuasi pencari kerja terdata</span></div>
                <span className="flex items-center gap-1.5 font-semibold text-amber-700"><Icon name="verified" className="text-sm" />Data terverifikasi Disnaker & Bhabinkamtibmas</span>
              </div>
            </section>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="flex flex-col justify-between rounded-2xl border-2 border-amber-300 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#000b1f] text-amber-300"><Icon name="work" /></span><div><p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Status Tersalurkan</p><h2 className="text-lg font-bold">Sudah Bekerja</h2></div></div><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold">73,2%</span></div>
                <div className="my-5"><p className="text-3xl font-extrabold text-amber-600">14.800 <span className="text-base text-[#0b1c30]">Jiwa</span></p><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[73.2%] rounded-full bg-amber-400" /></div><p className="mt-2 text-xs leading-5 text-slate-500">Tersalurkan ke 185+ mitra industri binaan Polrestabes dengan kontrak kerja resmi.</p></div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs"><span className="flex items-center gap-1 text-slate-500"><Icon name="shield" className="text-sm" />Kontrak Kerja Sah</span><a href="#industri" className="flex items-center gap-1 font-bold hover:underline">Lihat Sektor <Icon name="arrow_forward" className="text-sm" /></a></div>
              </article>
              <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500"><Icon name="person_search" /></span><div><p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Status Pembinaan</p><h2 className="text-lg font-bold">Belum Bekerja</h2></div></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">26,8%</span></div>
                <div className="my-5"><p className="text-3xl font-extrabold">5.420 <span className="text-base text-slate-500">Jiwa</span></p><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[26.8%] rounded-full bg-slate-400" /></div><p className="mt-2 text-xs leading-5 text-slate-500">Dalam proses pembinaan vokasi BLK, pemetaan minat, dan fasilitas SKCK Presisi.</p></div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs"><span className="flex items-center gap-1 text-slate-500"><Icon name="update" className="text-sm" />Update Berkala</span><Link href="/#pelatihan" className="flex items-center gap-1 font-bold hover:underline">Lihat Pelatihan <Icon name="arrow_forward" className="text-sm" /></Link></div>
              </article>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="area-title">
                <div className="mb-5 flex items-center justify-between gap-3"><h2 id="area-title" className="flex items-center gap-2 text-lg font-bold"><Icon name="location_on" className="text-2xl text-amber-600" />Sebaran Wilayah Polsek</h2><span className="text-xs text-slate-500">Serapan domisili</span></div>
                <div className="space-y-2">{areas.map((area) => <div key={area.name} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#f3f6fc] p-3 text-xs"><div><span className="font-bold">{area.name}</span><span className="ml-2 text-slate-500">({area.total} terdata)</span></div><div className="flex items-center gap-2 text-slate-600"><span>{area.employed} bekerja</span><span className="rounded bg-amber-100 px-2 py-1 font-bold text-amber-900">{area.rate}</span></div></div>)}</div>
                <div className="mt-4 flex justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500"><span>Validasi Bhabinkamtibmas</span><span className="font-semibold text-[#0b1c30]">100% sesuai domisili KTP</span></div>
              </section>
              <section id="industri" className="scroll-mt-24 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="industry-title">
                <div className="mb-5 flex items-center justify-between gap-3"><h2 id="industry-title" className="flex items-center gap-2 text-lg font-bold"><Icon name="domain" className="text-2xl text-amber-600" />Sektor Industri</h2><span className="text-xs text-slate-500">14.800 pekerja</span></div>
                <div className="space-y-5">{industries.map((industry) => <div key={industry.name}><div className="mb-2 flex items-center justify-between gap-2 text-xs"><span className="flex items-center gap-1.5 font-semibold"><Icon name={industry.icon} className="text-sm" />{industry.name} ({industry.rate}%)</span><span className="font-bold">{industry.total}</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${industry.color}`} style={{ width: `${industry.rate}%` }} /></div></div>)}</div>
                <div className="mt-5 flex justify-between border-t border-slate-100 pt-3 text-xs text-slate-500"><span>Mitra resmi</span><span className="font-bold text-amber-700">185+ perusahaan</span></div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <MainFooter />
    </>
  );
}
