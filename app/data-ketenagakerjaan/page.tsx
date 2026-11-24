"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const summary = [
  { icon: "groups", value: "20.220", unit: "Jiwa", label: "Total Terdata" },
  { icon: "work_history", value: "14.800", unit: "Jiwa", label: "Berhasil Bekerja" },
  { icon: "trending_up", value: "73,2%", unit: "", label: "Tingkat Penyerapan" },
  { icon: "speed", value: "18", unit: "Hari", label: "Rerata Waktu Salur" },
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

const chartData = {
  months: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt"],
  employment: [42, 48, 52, 56, 60, 64, 67, 70, 72, 73.2],
  seekers: [85, 78, 72, 68, 62, 58, 54, 50, 47, 45],
};

function Icon({ name, className = "", "aria-label": ariaLabel, style }: { name: string; className?: string; "aria-label"?: string; style?: React.CSSProperties }) {
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

  return (
    <svg
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      className={`inline-block h-[1em] w-[1em] shrink-0 ${className}`}
      style={style}
      {...common}
    >
      {glyphs[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}

function Tooltip({ x, y, label, value, unit, color, visible }: { x: number; y: number; label: string; value: number | string; unit: string; color: string; visible: boolean }) {
  if (!visible) return null;
  return (
    <g pointer-events="none">
      <rect
        x={x - 70}
        y={y - 50}
        width="140"
        height="48"
        rx="6"
        fill="#0b1c30"
        stroke={color}
        strokeWidth="1"
        filter="drop-shadow(0 4px 12px rgba(0,0,0,0.3))"
      />
      <text x={x} y={y - 28} textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
        {label}
      </text>
      <text x={x} y={y - 12} textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">
        {value} <tspan fontSize="12" fontWeight="400" fill="#94a3b8">{unit}</tspan>
      </text>
    </g>
  );
}

function EmploymentChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [svgRect, setSvgRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    setSvgRect(rect);
    const onResize = () => setSvgRect(svg.getBoundingClientRect());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRect) return;
    const rect = svgRect;
    const x = e.clientX - rect.left;
    const chartLeft = 90;
    const chartRight = 930;
    const chartWidth = chartRight - chartLeft;
    if (x < chartLeft || x > chartRight) {
      setHoverIndex(null);
      return;
    }
    const ratio = (x - chartLeft) / chartWidth;
    const index = Math.round(ratio * (chartData.months.length - 1));
    setHoverIndex(Math.max(0, Math.min(chartData.months.length - 1, index)));
  };

  const handleMouseLeave = () => setHoverIndex(null);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setFocusIndex((i) => (i === null ? 0 : Math.min(i + 1, chartData.months.length - 1)));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setFocusIndex((i) => (i === null ? chartData.months.length - 1 : Math.max(i - 1, 0)));
    } else if (e.key === "Escape") {
      setFocusIndex(null);
    }
  };
  const handleBlur = () => setFocusIndex(null);

  const activeIndex = focusIndex !== null ? focusIndex : hoverIndex;
  const showTooltip = activeIndex !== null;

  const chartLeft = 90;
  const chartRight = 930;
  const chartTop = 60;
  const chartBottom = 360;
  const chartHeight = chartBottom - chartTop;

  const getPointX = (index: number) => chartLeft + (index / (chartData.months.length - 1)) * (chartRight - chartLeft);
  const getPointY = (value: number, minVal: number, maxVal: number) => chartBottom - ((value - minVal) / (maxVal - minVal)) * chartHeight;

  const minVal = 0;
  const maxVal = 100;

  return (
    <div className="overflow-x-auto">
      <div className="relative min-w-[650px]" role="region" aria-label="Grafik tren penyerapan tenaga kerja TA 2026" tabIndex={0} onKeyDown={handleKeyDown} onBlur={handleBlur}>
        <svg
          ref={svgRef}
          viewBox="0 0 1000 450"
          role="img"
          aria-label="Grafik garis tren penyerapan tenaga kerja (merah) dan pencari kerja terdata (hijau) bulan Jan-Okt 2026"
          className="h-auto w-full max-w-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setFocusIndex(0)}
        >
          <defs>
            <linearGradient id="employmentFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff432a" stopOpacity=".15" />
              <stop offset="100%" stopColor="#ff432a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="searchFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#42cfa5" stopOpacity=".15" />
              <stop offset="100%" stopColor="#42cfa5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="employmentStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e03822" />
              <stop offset="100%" stopColor="#ff5a3a" />
            </linearGradient>
            <linearGradient id="searchStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2db88f" />
              <stop offset="100%" stopColor="#42cfa5" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[20, 40, 60, 80, 100].map((pct) => {
            const y = getPointY(pct, minVal, maxVal);
            return <line key={pct} x1={chartLeft} y1={y} x2={chartRight} y2={y} stroke="#e2e8f0" strokeDasharray="4 6" strokeWidth="0.5" />;
          })}

          {/* Y-axis labels */}
          {["100%", "80%", "60%", "40%", "20%", "0%"].map((label, i) => {
            const y = getPointY(100 - i * 20, minVal, maxVal);
            return <text key={label} x={chartLeft - 12} y={y + 4} textAnchor="end" fill="#64748b" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="500">{label}</text>;
          })}

          {/* Area fills */}
          <polygon
            points={chartData.employment.map((v, i) => `${getPointX(i)},${getPointY(v, minVal, maxVal)}`).concat(`${chartRight},${chartBottom}`, `${chartLeft},${chartBottom}`).join(" ")}
            fill="url(#employmentFill)"
          />
          <polygon
            points={chartData.seekers.map((v, i) => `${getPointX(i)},${getPointY(v, minVal, maxVal)}`).concat(`${chartRight},${chartBottom}`, `${chartLeft},${chartBottom}`).join(" ")}
            fill="url(#searchFill)"
          />

          {/* Lines */}
          <polyline
            points={chartData.employment.map((v, i) => `${getPointX(i)},${getPointY(v, minVal, maxVal)}`).join(" ")}
            fill="none"
            stroke="url(#employmentStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points={chartData.seekers.map((v, i) => `${getPointX(i)},${getPointY(v, minVal, maxVal)}`).join(" ")}
            fill="none"
            stroke="url(#searchStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {chartData.months.map((month, i) => {
            const x = getPointX(i);
            const yEmp = getPointY(chartData.employment[i], minVal, maxVal);
            const ySeek = getPointY(chartData.seekers[i], minVal, maxVal);
            const isActive = activeIndex === i;
            return (
              <g key={month}>
                <circle
                  cx={x}
                  cy={yEmp}
                  r={isActive ? 6 : 4}
                  fill="#ff432a"
                  stroke="white"
                  strokeWidth={isActive ? 3 : 2}
                  opacity={isActive ? 1 : 0}
                  style={{ pointerEvents: "none" }}
                />
                <circle
                  cx={x}
                  cy={ySeek}
                  r={isActive ? 6 : 4}
                  fill="#42cfa5"
                  stroke="white"
                  strokeWidth={isActive ? 3 : 2}
                  opacity={isActive ? 1 : 0}
                  style={{ pointerEvents: "none" }}
                />
                {isActive && (
                  <>
                    <circle cx={x} cy={yEmp} r={6} fill="none" stroke="#ff432a" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx={x} cy={ySeek} r={6} fill="none" stroke="#42cfa5" strokeWidth="2" strokeDasharray="4 4" />
                  </>
                )}
              </g>
            );
          })}

          {/* X-axis labels */}
          {chartData.months.map((month, i) => (
            <text key={month} x={getPointX(i)} y={chartBottom + 28} textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight={activeIndex === i ? "600" : "400"}>
              {month}
            </text>
          ))}

          {/* Tooltip */}
          {showTooltip && activeIndex !== null && (
            <Tooltip
              x={getPointX(activeIndex)}
              y={getPointY(chartData.employment[activeIndex], minVal, maxVal) - 10}
              label={`Penyerapan: ${chartData.months[activeIndex]}`}
              value={chartData.employment[activeIndex].toFixed(1)}
              unit="%"
              color="#ff432a"
              visible={true}
            />
          )}
          {showTooltip && activeIndex !== null && (
            <Tooltip
              x={getPointX(activeIndex)}
              y={getPointY(chartData.seekers[activeIndex], minVal, maxVal) + 58}
              label={`Pencari kerja: ${chartData.months[activeIndex]}`}
              value={chartData.seekers[activeIndex].toFixed(1)}
              unit="%"
              color="#42cfa5"
              visible={true}
            />
          )}
        </svg>

        {/* Keyboard hint */}
        <p className="sr-only">
          Gunakan panah kiri/kanan untuk melihat detail per bulan. Tekan Escape untuk menutup.
        </p>
      </div>
    </div>
  );
}

function StatCard({ icon, value, unit, label }: { icon: string; value: string; unit: string; label: string }) {
  return (
    <article className="min-w-0 border-slate-200 px-4 py-4 first:border-l-0 sm:px-5 xl:border-l">
      <div className="min-w-0">
        <p className="text-2xl font-extrabold leading-none tracking-tight text-[#0b1c30] sm:text-[27px]">
          {value} {unit && <span className="text-xs font-medium text-slate-500">{unit}</span>}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
          <Icon name={icon} className="text-sm text-amber-600" aria-hidden="true" />
          {label}
        </p>
      </div>
    </article>
  );
}

function AreaRow({ area }: { area: (typeof areas)[0] }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-100 py-2.5 text-xs last:border-b-0">
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-semibold text-[#0b1c30] truncate">{area.name}</span>
        <span className="text-slate-500 whitespace-nowrap">{area.total} terdata</span>
      </div>
      <div className="flex items-center justify-end gap-2 text-slate-600">
        <span className="font-medium">{area.employed} bekerja</span>
        <span className="min-w-12 rounded bg-amber-50 px-2 py-1 text-center font-bold text-amber-900">{area.rate}</span>
      </div>
    </div>
  );
}

function IndustryBar({ industry }: { industry: (typeof industries)[0] }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-2 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-[#0b1c30]">
          <Icon name={industry.icon} className="text-sm text-slate-500" aria-hidden="true" />
          {industry.name} <span className="text-slate-500 font-normal">({industry.rate}%)</span>
        </span>
        <span className="font-bold text-[#0b1c30]">{industry.total}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuenow={industry.rate} aria-valuemin={0} aria-valuemax={100} aria-label={`${industry.name}: ${industry.rate}%`}>
        <div className={`h-full rounded-full ${industry.color}`} style={{ width: `${industry.rate}%` }} aria-hidden="true">
          <span className="sr-only">{industry.rate}%</span>
        </div>
      </div>
    </div>
  );
}

export default function DataKetenagakerjaanPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20 text-[#0b1c30]">
      <section className="border-b border-slate-200 bg-[#eef3ff]">
        <div className="mx-auto max-w-[1280px] px-4 pb-0 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end">
            <div className="max-w-2xl pb-7">
              <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-800">
                <span className="h-px w-7 bg-amber-500" aria-hidden="true" />
                Ringkasan ketenagakerjaan
              </p>
              <h1 className="max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0b1c30] sm:text-5xl">Data Ketenagakerjaan POLIRAN</h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">Pantauan penyaluran kerja dan pembinaan pencari kerja di wilayah hukum Polrestabes.</p>
            </div>
            <aside className="relative overflow-hidden bg-[#0b1c30] px-5 pb-5 pt-4 text-white lg:mb-0" aria-label="Sorotan utama">
              <span className="absolute right-4 top-3 text-5xl font-black leading-none text-white/5" aria-hidden="true">01</span>
              <p className="relative text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300">Tingkat penyerapan</p>
              <p className="relative mt-2 text-5xl font-extrabold tracking-tight">73,2<span className="text-2xl text-amber-300">%</span></p>
              <p className="relative mt-1 text-xs text-slate-300">14.800 dari 20.220 jiwa berhasil bekerja</p>
            </aside>
          </div>
          <div className="grid grid-cols-2 border-t border-slate-300/80 bg-white/60 sm:grid-cols-4">
            {summary.map((item) => (
              <StatCard key={item.label} icon={item.icon} value={item.value} unit={item.unit} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-[1280px] space-y-9 px-4 sm:px-6 lg:px-8">
          <section className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_230px]" aria-labelledby="trend-title">
            <div className="min-w-0 border-t-2 border-[#0b1c30] pt-4">
              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 id="trend-title" className="text-xl font-bold text-[#0b1c30]">Tren penyerapan tenaga kerja</h2>
                  <p className="mt-1 text-xs text-slate-500">Persentase kumulatif per bulan · TA 2026</p>
                </div>
                <span className="text-xs font-semibold text-slate-500">Jan — Okt 2026</span>
              </div>
              <EmploymentChart />
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200 pt-3 text-xs" role="group" aria-label="Legenda grafik">
                <span className="flex items-center gap-2 font-medium text-[#0b1c30]"><span className="h-1.5 w-5 rounded-full" style={{ background: "#e03822" }} aria-hidden="true" />Penyerapan tenaga kerja</span>
                <span className="flex items-center gap-2 text-slate-600"><span className="h-1.5 w-5 rounded-full" style={{ background: "#2db88f" }} aria-hidden="true" />Pencari kerja terdata</span>
              </div>
            </div>
            <aside className="border-t border-slate-300 pt-4 lg:border-l lg:border-t-0 lg:pl-6" aria-label="Catatan grafik">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-700">Bacaan singkat</p>
              <p className="mt-3 text-2xl font-extrabold tracking-tight text-[#0b1c30]">+31,2 poin</p>
              <p className="mt-1 text-xs leading-5 text-slate-600">Kenaikan tingkat penyerapan dari Januari sampai Oktober.</p>
              <div className="mt-6 border-t border-slate-200 pt-3 text-xs text-slate-500">
                <p className="font-semibold text-[#0b1c30]">Cara membaca</p>
                <p className="mt-1 leading-5">Garis merah menunjukkan penyerapan. Garis hijau menunjukkan pencari kerja terdata.</p>
              </div>
            </aside>
          </section>

          <section className="border-y border-slate-200 py-5" aria-labelledby="status-title">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-700">Komposisi data</p><h2 id="status-title" className="mt-1 text-xl font-bold text-[#0b1c30]">Status penyaluran</h2></div>
              <span className="hidden text-xs text-slate-500 sm:block">20.220 jiwa terdata</span>
            </div>
            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 py-4 sm:grid-cols-[180px_130px_minmax(0,1fr)_80px] sm:items-center">
                <div className="flex items-center gap-2 font-semibold text-[#0b1c30]"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />Sudah bekerja</div>
                <p className="text-2xl font-extrabold text-[#0b1c30]">14.800 <span className="text-xs font-medium text-slate-500">Jiwa</span></p>
                <div><div className="mb-1.5 flex justify-between text-[11px] text-slate-500"><span>Proporsi terdata</span><span className="font-bold text-amber-700">73,2%</span></div><div className="h-2 bg-slate-100"><div className="h-full bg-amber-400" style={{ width: "73.2%" }} /></div></div>
                <Link href="#industri" className="text-xs font-bold text-[#0b1c30] hover:text-amber-700">Lihat sektor →</Link>
              </div>
              <div className="grid gap-3 py-4 sm:grid-cols-[180px_130px_minmax(0,1fr)_80px] sm:items-center">
                <div className="flex items-center gap-2 font-semibold text-[#0b1c30]"><span className="h-2.5 w-2.5 rounded-full bg-slate-400" aria-hidden="true" />Belum bekerja</div>
                <p className="text-2xl font-extrabold text-[#0b1c30]">5.420 <span className="text-xs font-medium text-slate-500">Jiwa</span></p>
                <div><div className="mb-1.5 flex justify-between text-[11px] text-slate-500"><span>Dalam pembinaan</span><span className="font-bold text-slate-600">26,8%</span></div><div className="h-2 bg-slate-100"><div className="h-full bg-slate-400" style={{ width: "26.8%" }} /></div></div>
                <Link href="/#pelatihan" className="text-xs font-bold text-[#0b1c30] hover:text-amber-700">Pelatihan →</Link>
              </div>
            </div>
          </section>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <section aria-labelledby="area-title">
              <div className="mb-3 flex items-end justify-between gap-3 border-b-2 border-[#0b1c30] pb-3">
                <h2 id="area-title" className="flex items-center gap-2 text-lg font-bold text-[#0b1c30]"><Icon name="location_on" className="text-lg text-amber-600" aria-hidden="true" />Sebaran wilayah Polsek</h2>
                <span className="text-xs text-slate-500">Serapan domisili</span>
              </div>
              <div>{areas.map((area) => <AreaRow key={area.name} area={area} />)}</div>
              <div className="mt-3 flex justify-between gap-3 border-t border-slate-200 pt-3 text-xs text-slate-500"><span>Validasi domisili</span><span className="font-semibold text-[#0b1c30]">100% sesuai KTP</span></div>
            </section>
            <section id="industri" className="scroll-mt-24" aria-labelledby="industry-title">
              <div className="mb-3 flex items-end justify-between gap-3 border-b-2 border-[#0b1c30] pb-3">
                <h2 id="industry-title" className="flex items-center gap-2 text-lg font-bold text-[#0b1c30]"><Icon name="domain" className="text-lg text-amber-600" aria-hidden="true" />Sektor industri</h2>
                <span className="text-xs text-slate-500">14.800 pekerja</span>
              </div>
              <div className="space-y-4">{industries.map((industry) => <IndustryBar key={industry.name} industry={industry} />)}</div>
              <div className="mt-4 flex justify-between gap-3 border-t border-slate-200 pt-3 text-xs text-slate-500"><span>Mitra resmi</span><span className="font-bold text-amber-700">185+ perusahaan</span></div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
