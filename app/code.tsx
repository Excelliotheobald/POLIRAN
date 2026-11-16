export default function Home() {
  return (
    <>
      {/* BEGIN: MainHeader */}
      <header
        data-purpose="site-navigation"
        className="sticky top-0 z-50 bg-[#0f1f38]/95 backdrop-blur-md border-b border-slate-700/40 transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Identity */}
          <div className="flex items-center space-x-3.5 cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#0c1a2e] rounded-full flex items-center justify-center">
                <i className="fa-solid fa-shield-halved text-amber-400 text-lg" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white leading-none">
                POLIRAN
              </span>
              <span className="text-[11px] font-medium text-slate-300 tracking-wide mt-1">
                Polisi Peduli Pengangguran
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
            <a
              className="relative text-white py-1 flex items-center space-x-1.5 transition-colors group"
              href="#beranda"
            >
              <i className="fa-solid fa-house text-xs text-amber-400" />
              <span className="font-semibold text-white">Beranda</span>
              <span className="absolute bottom-[-16px] left-0 right-0 h-[3px] bg-amber-400 rounded-full" />
            </a>
            <a className="hover:text-amber-400 transition-colors" href="#lowongan">
              Lowongan Kerja
            </a>
            <a className="hover:text-amber-400 transition-colors" href="#pelatihan">
              Pelatihan
            </a>
            <a className="hover:text-amber-400 transition-colors" href="#tentang">
              Tentang Kami
            </a>
            <a className="hover:text-amber-400 transition-colors" href="#faq">
              FAQ
            </a>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="flex items-center space-x-3.5">
            <button
              aria-label="Search"
              className="p-2 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-slate-800/60"
            >
              <i className="fa-solid fa-magnifying-glass text-sm" />
            </button>
            <a
              className="px-5 py-2 text-xs font-semibold text-white border border-slate-400/50 rounded-full hover:bg-white/10 hover:border-white transition-all duration-150"
              href="#login"
            >
              Login
            </a>
            <a
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0b172a] hover:bg-[#07101e] border border-slate-700 rounded-full shadow-md flex items-center space-x-1.5 hover:shadow-lg transition-all duration-150"
              href="#daftar"
            >
              <i className="fa-solid fa-user-plus text-[11px] text-amber-400" />
              <span>Daftar</span>
            </a>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      <main>
        {/* BEGIN: HeroSection */}
        <section
          data-purpose="hero-banner"
          className="relative bg-[#0f1f38] text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
          id="beranda"
        >
          {/* Background Image with Realistic Polrestabes Exterior Backdrop */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Gedung Polrestabes POLIRAN"
              className="w-full h-full object-cover object-right-top lg:object-center opacity-40 mix-blend-luminosity scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFj-hbfJ7WgFNAEfmShncFU_BYBYBh5EAgba-jqibMepR2qIsPo-4pajzuF2e3RzWXPWoMPoWHIprez80vU6UADUN-oOHC-XNzfAUW7pZQFfH3IhMsB0hghWdRLw3sufL837sL18ktBUnaWhomTCN3d8UkuOBMql0FTW8UYP5502JFBbSnPI8y8o6ZYgtcDwJy9PdNXDLU0H4nKFlSFKJweKRcL_qhgVy2KNfL9ydu6TVJD2A5pjpI"
            />
            <div className="absolute inset-0 hero-bg-overlay" />
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-2">
                <span className="gold-gradient-text tracking-wider">POLIRAN</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                Polisi Peduli Pengangguran
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal mb-8 leading-relaxed max-w-xl">
                Bersama Polri, wujudkan kesempatan kerja untuk masa depan yang
                lebih baik.
              </p>

              {/* Search Input Pill Container */}
              <div
                data-purpose="job-search-input"
                className="bg-white rounded-full p-1.5 sm:p-2 pl-5 sm:pl-6 flex items-center justify-between max-w-xl hero-search-shadow"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <i className="fa-solid fa-magnifying-glass text-slate-400 text-sm" />
                  <input
                    className="w-full text-slate-800 placeholder-slate-400 text-sm border-0 focus:ring-0 focus:outline-none bg-transparent"
                    placeholder="Cari lowongan pekerjaan..."
                    type="text"
                  />
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full flex items-center space-x-2 transition-all shadow-sm">
                  <i className="fa-solid fa-magnifying-glass text-xs" />
                  <span>Cari</span>
                </button>
              </div>

              {/* Trending Keywords */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center text-amber-400 font-semibold mr-1">
                  <i className="fa-solid fa-fire text-amber-500 mr-1.5" /> Trending:
                </span>
                <a className="hover:text-amber-300 transition-colors" href="#">
                  IT Support
                </a>
                <span className="text-slate-500">|</span>
                <a className="hover:text-amber-300 transition-colors" href="#">
                  Admin Staff
                </a>
                <span className="text-slate-500">|</span>
                <a className="hover:text-amber-300 transition-colors" href="#">
                  Security
                </a>
                <span className="text-slate-500">|</span>
                <a className="hover:text-amber-300 transition-colors" href="#">
                  Barista
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: QuickAccessBanner */}
        <section
          data-purpose="service-category-cards"
          className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white rounded-2xl shadow-card-float border border-slate-100 p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <a
                className="flex items-center space-x-4 group pt-3 sm:pt-0 sm:px-4 cursor-pointer hover:bg-slate-50/80 rounded-xl transition p-2"
                href="#lowongan"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors shrink-0">
                  <i className="fa-solid fa-briefcase text-lg group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                    Lowongan Kerja
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Temukan pekerjaan terbaik
                  </p>
                </div>
              </a>

              <a
                className="flex items-center space-x-4 group pt-4 sm:pt-0 sm:px-4 cursor-pointer hover:bg-slate-50/80 rounded-xl transition p-2"
                href="#pelatihan"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors shrink-0">
                  <i className="fa-solid fa-graduation-cap text-lg group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                    Pelatihan
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Tingkatkan keterampilan Anda
                  </p>
                </div>
              </a>

              <a
                className="flex items-center space-x-4 group pt-4 sm:pt-0 sm:px-4 cursor-pointer hover:bg-slate-50/80 rounded-xl transition p-2"
                href="#pencari-kerja"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors shrink-0">
                  <i className="fa-solid fa-users text-lg group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                    Pencari Kerja
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Daftarkan diri dengan mudah
                  </p>
                </div>
              </a>

              <a
                className="flex items-center space-x-4 group pt-4 sm:pt-0 sm:px-4 cursor-pointer hover:bg-slate-50/80 rounded-xl transition p-2"
                href="#mitra"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors shrink-0">
                  <i className="fa-solid fa-handshake text-lg group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                    Mitra Perusahaan
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bergabung bersama kami
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* END: QuickAccessBanner */}

        {/* BEGIN: LowonganTerbaruSection */}
        <section
          data-purpose="latest-job-listings"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
          id="lowongan"
        >
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center space-x-3">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Lowongan Terbaru
              </h2>
            </div>
            <a
              className="text-xs sm:text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center space-x-1 group"
              href="#all-jobs"
            >
              <span>Lihat Semua</span>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Job Card 1: Staff IT Support (BCA) */}
            <div
              data-purpose="job-card"
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xs">
                      <i className="fa-solid fa-building-columns" />
                    </div>
                    <span className="font-bold text-blue-800 text-base tracking-tight">
                      BCA
                    </span>
                  </div>
                  <button
                    aria-label="Simpan Lowongan"
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    <i className="fa-regular fa-bookmark text-sm" />
                  </button>
                </div>
                <h3 className="font-bold text-slate-900 text-base hover:text-amber-600 transition-colors cursor-pointer">
                  Staff IT Support
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  PT Bank Central Asia Tbk
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center">
                  <i className="fa-solid fa-location-dot text-slate-400 mr-1.5 text-xs" />
                  Jakarta Selatan
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Full Time
                </span>
              </div>
            </div>

            {/* Job Card 2: Marketing Staff (Indofood) */}
            <div
              data-purpose="job-card"
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-serif italic font-extrabold text-blue-600 text-lg tracking-tight">
                      Indofood
                    </span>
                  </div>
                  <button
                    aria-label="Simpan Lowongan"
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    <i className="fa-regular fa-bookmark text-sm" />
                  </button>
                </div>
                <h3 className="font-bold text-slate-900 text-base hover:text-amber-600 transition-colors cursor-pointer">
                  Marketing Staff
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  PT Indofood Sukses Makmur
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center">
                  <i className="fa-solid fa-location-dot text-slate-400 mr-1.5 text-xs" />
                  Tangerang
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Full Time
                </span>
              </div>
            </div>

            {/* Job Card 3: Admin Staff (Astra) */}
            <div
              data-purpose="job-card"
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-5 h-3 bg-blue-700 rounded-sm" />
                    <span className="font-bold text-blue-900 tracking-wider text-sm">
                      ASTRA
                    </span>
                  </div>
                  <button
                    aria-label="Simpan Lowongan"
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    <i className="fa-regular fa-bookmark text-sm" />
                  </button>
                </div>
                <h3 className="font-bold text-slate-900 text-base hover:text-amber-600 transition-colors cursor-pointer">
                  Admin Staff
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  PT Astra International Tbk
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center">
                  <i className="fa-solid fa-location-dot text-slate-400 mr-1.5 text-xs" />
                  Jakarta
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                  Part Time
                </span>
              </div>
            </div>

            {/* Promotional Feature Card (POLIRAN Call to Action) */}
            <div
              data-purpose="promo-card"
              className="promo-card-bg text-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-lg"
            >
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
              <div className="relative z-10 mt-6">
                <a
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-full transition-all duration-150 shadow"
                  href="#pelajari-lebih-lanjut"
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* END: LowonganTerbaruSection */}

        {/* BEGIN: ProgramUnggulanSection */}
        <section
          data-purpose="featured-programs"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
          id="pelatihan"
        >
          <div className="flex items-center space-x-3 mb-7">
            <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Program Unggulan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-comments" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Bimbingan Karier &amp; Konseling
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dukungan psikologi kerja serta konsultasi pengembangan potensi
                diri bersama pakar ketenagakerjaan dan jajaran Polri.
              </p>
              <a
                className="inline-flex items-center text-xs font-bold text-amber-600 mt-4 hover:text-amber-700"
                href="#"
              >
                Daftar Konseling{" "}
                <i className="fa-solid fa-chevron-right ml-1.5 text-[10px]" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-certificate" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Sertifikasi Keahlian Gratis
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Program pelatihan vokasi gratis berstandar BNSP, mencakup
                keahlian teknis, administrasi, security berizin, hingga barista.
              </p>
              <a
                className="inline-flex items-center text-xs font-bold text-blue-600 mt-4 hover:text-blue-700"
                href="#"
              >
                Lihat Jadwal Kelas{" "}
                <i className="fa-solid fa-chevron-right ml-1.5 text-[10px]" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-building-user" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Penyaluran Kerja Terpadu
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Akses langsung dengan jaringan mitra industri skala nasional
                untuk penempatan tenaga kerja terverifikasi dan aman.
              </p>
              <a
                className="inline-flex items-center text-xs font-bold text-emerald-600 mt-4 hover:text-emerald-700"
                href="#"
              >
                Cek Mitra Rekanan{" "}
                <i className="fa-solid fa-chevron-right ml-1.5 text-[10px]" />
              </a>
            </div>
          </div>
        </section>
        {/* END: ProgramUnggulanSection */}
      </main>

      {/* BEGIN: MainFooter */}
      <footer
        data-purpose="site-footer"
        className="bg-[#091526] text-slate-300 border-t border-slate-800 text-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: Brand & Office */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                  <i className="fa-solid fa-shield-halved" />
                </div>
                <div>
                  <span className="text-base font-extrabold text-white tracking-wider">
                    POLIRAN
                  </span>
                  <p className="text-[10px] text-slate-400">Polrestabes Program</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Inisiatif kepedulian Polri untuk menekan angka pengangguran
                melalui pembinaan, pelatihan keterampilan, dan penyaluran kerja
                produktif.
              </p>
            </div>

            {/* Col 2: Akses Cepat */}
            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
                Akses Cepat
              </h4>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-amber-400 transition" href="#lowongan">
                    Bursa Lowongan Kerja
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="#pelatihan">
                    Jadwal Pelatihan Vokasi
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="#mitra">
                    Registrasi Mitra Industri
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="#">
                    Panduan Pembuatan SKCK
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Layanan Bantuan */}
            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
                Pusat Bantuan
              </h4>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-amber-400 transition" href="#faq">
                    Tanya Jawab (FAQ)
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="#">
                    Syarat &amp; Ketentuan
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="#">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="#">
                    Kontak Helpdesk
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Posko & Kontak Polrestabes */}
            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
                Sekretariat POLIRAN
              </h4>
              <p className="text-slate-400 leading-relaxed mb-2">
                Gedung Pelayanan Terpadu Polrestabes
                <br />
                Hotline Bantuan: <strong>110</strong> / 0812-POLIRAN-OK
              </p>
              <div className="flex items-center space-x-3 mt-4 text-slate-400">
                <a
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
                  href="#"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
                  href="#"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
                  href="#"
                >
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
                  href="#"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <p>
              © 2026 POLIRAN - Polisi Peduli Pengangguran. Hak Cipta Dilindungi
              Undang-Undang.
            </p>
            <p className="mt-2 sm:mt-0 flex items-center space-x-1">
              <span>Menuju Indonesia Maju &amp; Produktif</span>
              <i className="fa-solid fa-flag text-red-500 ml-1" />
            </p>
          </div>
        </div>
      </footer>
      {/* END: MainFooter */}
    </>
  );
}
