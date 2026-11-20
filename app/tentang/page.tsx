"use client";

import Link from "next/link";

export default function TentangKami() {
  return (
    <main className="flex-1 bg-[#FBFBFA]">
      {/* SECTION 1: HERO SECTION - ASYMMETRIC & DIAGONAL THREE-PHOTO COLLAGE */}
      <section className="relative pb-16 md:pb-24 overflow-hidden bg-[#FBFBFA] border-b border-sand-border pt-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Center Heading & Subtext */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Mengenal <span className="text-amber-500">POLIRAN</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Sinergi nyata Polri bersama balai latihan dan industri membuka akses pelatihan vokasi serta penyaluran kerja produktif bebas biaya.
            </p>
          </div>

          {/* Asymmetric 3-Photo Collage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center max-w-6xl mx-auto">
            {/* Left Photo (Medium Height ~340px, angled corner) */}
            <div className="md:col-span-3 rounded-3xl overflow-hidden border border-sand-border bg-slate-900 shadow-md relative group h-64 sm:h-80 md:h-[340px] transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Bhabinkamtibmas Menyapa Warga"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6OqwNHXkRxvGesoZtyRVperlZsjp1P-VCi_-_QtaiW82kKwKMR2NXRjeDsa3l2P20jw6z6CGEyQANeTxIWLlx4ky2S32qW_sZ8HHQqbwvhkrrqLsE4EHMbZ1tfqb-BNbePMOcIfNbcFNfdsoZ_cg9XMNFNYHsMhDNedLdowL0hHFkPVveqGFzY2fIG1titu8FXDyQKfDEL5xZFptY28fI8dgGqtBmADoOsCo396I"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider inline-block mb-1">
                    Aparatur Presisi
                  </span>
                  <p className="text-white text-xs font-bold">
                    Pusat Layanan Warga Bhabinkamtibmas
                  </p>
                </div>
              </div>
            </div>

            {/* Center Photo (Taller 420px with subtle geometric framing) */}
            <div className="md:col-span-6 rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-slate-900 shadow-xl relative group h-80 sm:h-96 md:h-[420px] z-10">
              <img
                alt="Pelatihan Industri dan Manufaktur Bersertifikasi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCniBrNZJBtZm-cjSR76iunMMLE1ID6ARnB6EC6m9CRXU0bi5JuLc2wmJbyaA-fYqabZ6qXfRe5MlzTHECqqYP24tSV4c-R549KbH7uLKrtcsoUxwNJQIvlA640TAHWFpvKAAtDXd7gwfH3hUZP_45AaRJk12IRJ_ipSaQj3cx-NmfrAeLpvDaIkP9xe0qszaZMnz_EPX-dQIgIdkZapoB9o3CEs769ZPfjEcvBh6M"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-6 sm:p-8">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider mb-2 shadow-sm">
                    <span className="material-symbols-outlined text-sm font-bold">verified</span>
                    Program Unggulan
                  </div>
                  <h3 className="text-white text-lg sm:text-2xl font-extrabold leading-snug">
                    Pelatihan Keterampilan Siap Kerja Bersama BLK & Mitra Industri
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Kurikulum vokasi terpadu disesuaikan langsung dengan kriteria perusahaan rekanan.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photo (Medium Height ~340px, angled corner) */}
            <div className="md:col-span-3 rounded-3xl overflow-hidden border border-sand-border bg-slate-900 shadow-md relative group h-64 sm:h-80 md:h-[340px] transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Penyaluran Kerja dan Kontrak Resmi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMmlyNRijVL1R49vS8rSMMyWjLfFcAq0zjHfgQ555lrJXX42R3AA_MS2qDz-5qi7ksej9EDUhb-F7ljUtK-Zyas8sRv9XkwcuzN4qCPOk6lvz9cDoMa_uzv9lnR8WvRFIUTBf6a70MiZofDIsyEFdkMcd_ePjnbc70L32WmFYnkHyl1N55GjZav3XVn8Dnxupk3IH_A-tryfCbk-NgeNbNBYSLzoBkJVoz4auWSTg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider inline-block mb-1">
                    Mitra BUMN & Swasta
                  </span>
                  <p className="text-white text-xs font-bold">
                    Penyaluran Resmi Tanpa Biaya Calo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MENGENAL POLIRAN / ASYMMETRIC BENTO GRID */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-sand-border gap-2">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                Data & Ekosistem Program
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                Capaian & Pilar Ekosistem POLIRAN
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Validasi penyerapan kerja dan akuntabilitas program secara nyata dan berkelanjutan.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Kartu 1 (Kiri, Tinggi & Besar, span 1 col md:row-span-2) */}
            <div className="md:col-span-1 md:row-span-2 rounded-3xl p-7 bg-[#0A192F] text-white border border-slate-800 shadow-md flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[180px]">verified_user</span>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <span className="material-symbols-outlined text-2xl">badge</span>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                    Statistik Utama
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2">
                    14.800<span className="text-amber-400">+</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1">
                    Warga Terserap Kerja
                  </h3>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Masyarakat pencari kerja telah berhasil ditempatkan di sektor manufaktur, logistik, ritel terkemuka, hingga mitra BUMN berbadan hukum resmi.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800 relative z-10 flex items-center justify-between text-xs text-slate-400">
                <span>Terdata Sistem SIPP</span>
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Terverifikasi
                </span>
              </div>
            </div>

            {/* Kartu 2 (Tengah Atas, Sedang, span 2 col) */}
            <div className="md:col-span-2 rounded-3xl p-6 bg-white border border-sand-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wide">
                    <span className="material-symbols-outlined text-xs">location_city</span>
                    Sentra Layanan Terpadu
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    Pendampingan Bhabinkamtibmas di 24 Polsek
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md">
                    Petugas Bhabinkamtibmas siap mendampingi pendaftaran akun, validasi data, hingga bantuan fisik ke kantor RT/RW agar calon tenaga kerja tidak kebingungan.
                  </p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-sand-border">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Jangkauan 24 Jam Bebas Antre</span>
                <span className="text-slate-900 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-500 text-sm">headset_mic</span>
                  Hotline 110
                </span>
              </div>
            </div>

            {/* Kartu 4 (Kanan, Tinggi & Besar, span 1 col md:row-span-2) */}
            <div className="md:col-span-1 md:row-span-2 rounded-3xl p-7 bg-white border-2 border-amber-400/40 shadow-md flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <span className="material-symbols-outlined text-2xl">lock_reset</span>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600">
                    Jaminan Integritas
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mt-2">
                    Rp 0
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mt-1">
                    Nol Pungutan Sepenuhnya
                  </h3>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                    Seluruh tahapan dari pendaftaran, pelatihan, psikotes, hingga penempatan dijamin bebas biaya dan diawasi ketat Satgas Saber Pungli.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-sand-border flex items-center justify-between text-xs">
                <span className="text-slate-500">Integritas Mutlak</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">security</span>
                  Presisi Polri
                </span>
              </div>
            </div>

            {/* Kartu 3 (Tengah Bawah, Sedang, span 2 col) */}
            <div className="md:col-span-2 rounded-3xl p-6 bg-white border border-sand-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wide">
                    <span className="material-symbols-outlined text-xs">domain_verification</span>
                    Kemitraan Terverifikasi
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    Sinergi 185+ Perusahaan Rekanan & BUMN
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md">
                    Lowongan pekerjaan terintegrasi langsung dengan standar kompetensi kerja nasional, menjamin kontrak kerja resmi serta perlindungan ketenagakerjaan berjangka panjang.
                  </p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-sand-border">
                  <span className="material-symbols-outlined text-2xl">handshake</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Sertifikasi Standar BNSP</span>
                <span className="text-slate-900 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-600 text-sm">verified</span>
                  100% Legal & Resmi
                </span>
              </div>
            </div>

            {/* Kartu 5 (Bawah Memanjang / Pendukung, span full 4 col) */}
            <div className="md:col-span-4 rounded-3xl p-6 bg-sand-card border border-sand-border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-amber-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    Layanan Sertifikasi Vokasi & Akselerasi Pelamar Siap Kerja
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Materi kejuruan mencakup manufaktur otomotif, administrasi logistik digital, perhotelan, hingga keahlian teknik kelistrikan.
                  </p>
                </div>
              </div>
              <Link
                href="#lowongan"
                className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-all flex items-center gap-1.5"
              >
                <span>Lihat Kejuruan</span>
                <span className="material-symbols-outlined text-sm text-amber-400">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEGIATAN POLIRAN (ASYMMETRIC PHOTO COLLAGE) */}
      <section className="py-16 md:py-24 bg-white border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-sand-border gap-2">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                Dokumentasi Program
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                Aksi Nyata di Lapangan
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Potret pendampingan humanis kepolisian bersama mitra industri dan balai vokasi di berbagai penjuru.
            </p>
          </div>

          {/* Asymmetric Gallery: 1 Large Left (60%), 2 Stacked Right (40%) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Large Main Photo (60% / md:col-span-7) */}
            <div className="md:col-span-7 rounded-3xl overflow-hidden border border-sand-border bg-slate-900 shadow-md relative group h-80 sm:h-96 md:h-auto min-h-[360px]">
              <img
                alt="Pendampingan Bhabinkamtibmas dan Pembekalan Pelatihan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvCiXojwOm1Fj74AKSeoo9CC3jaDsohRh_WYqTAtBbBiKoGeGsfAj1dBNRp1FKSO2bxn03KxD3gIAWfQ7Sx-3P9R_ppCvqF6nVXSTeuvjJnYJJdROr3ArZo39txgrXvDWY5COd_9ujO9cgD13xp6BO1PxrsRCvtMLj7YgnVDwFxHha616fXpBbXNgvZRAq55Rlp5Z2VXGcgnapZDuiuUoQGuDIru1qCZIHg5KoWTg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider inline-block mb-2">
                    Pendampingan Langsung
                  </span>
                  <h3 className="text-white text-base sm:text-xl font-bold leading-snug">
                    Penyuluhan & Pelatihan Vokasi di Sentra Balai Latihan Kerja
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    Pendampingan intensif bersama instruktur berlisensi untuk mempersiapkan calon pekerja siap adaptasi.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 Stacked Smaller Photos (40% / md:col-span-5) */}
            <div className="md:col-span-5 flex flex-col gap-5">
              {/* Top Photo */}
              <div className="rounded-3xl overflow-hidden border border-sand-border bg-slate-900 shadow-sm relative group h-48 sm:h-52">
                <img
                  alt="Pembekalan Materi Teknis dan Digital"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXPfILx39wXNGrsHJWVEoYO0zezzKVZI7zOYAC-nh7LuCVwgR6gMWxbsFoeiqEd2671V5DJxDknOBbNyPaii8zBR22WRfR---y5Y43KNKm1TIPSt7czhtoGUUyZCFEeVI3rPP-z34ywewo2Q_HQEzSGvowdPmDretwdtgMiufYmjAv5Rgg_EiWUtr-c4nIWM1Jmk8JqPLGUQ3D3i-FfnW_B02Xx1y-9xmmSbwOCvA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider inline-block mb-1">
                      Sertifikasi Vokasi
                    </span>
                    <h4 className="text-white text-sm font-bold">
                      Kelas Pembekalan Keterampilan Teknis
                    </h4>
                  </div>
                </div>
              </div>

              {/* Bottom Photo */}
              <div className="rounded-3xl overflow-hidden border border-sand-border bg-slate-900 shadow-sm relative group h-48 sm:h-52">
                <img
                  alt="Penandatanganan Kontrak Kerja Mitra Resmi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVlPCw-teEjXJuknpAynCghHuWWpaUUsmk13Fnd-0zm860PB-orjBRUWX_Z4b5alsWtr6CBg6cvSc68cVHE-BHfuz41h1NzISyHdcsLapdgwu6lmeuS4LSYvZ0dXymTmWUBviAH1l-8GXXBFlq_dxBHmMVMix-bcDmClkuhYoPy6h_y4_4laZ4zIYBY9pIifqcz9vv69zujgZyR2t9KLsTBR1bHG1L1lFR-lhbn7w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider inline-block mb-1">
                      Penempatan Kerja
                    </span>
                    <h4 className="text-white text-sm font-bold">
                      Serah Terima & Penandatanganan Kontrak
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}