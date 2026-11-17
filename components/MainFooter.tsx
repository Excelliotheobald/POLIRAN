const QUICK_LINKS = [
  { href: "#lowongan", label: "Bursa Lowongan Kerja" },
  { href: "#pelatihan", label: "Jadwal Pelatihan Vokasi" },
  { href: "#mitra", label: "Registrasi Mitra Industri" },
];

const HELP_LINKS = [
  { href: "#faq", label: "Tanya Jawab (FAQ)" },
];

function MainFooter() {
  return (
    <footer
      data-purpose="site-footer"
      className="bg-[#091526] text-slate-300 border-t border-slate-800 text-xs"
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 py-12">
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
              Inisiatif kepedulian Polri untuk menekan angka pengangguran melalui
              pembinaan, pelatihan keterampilan, dan penyaluran kerja produktif.
            </p>
          </div>

          {/* Col 2: Akses Cepat */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Akses Cepat
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-amber-400 transition"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Layanan Bantuan */}
          <div>
            <h4
              id="faq"
              className="font-semibold text-white uppercase tracking-wider text-xs mb-3"
            >
              Pusat Bantuan
            </h4>
            <ul className="space-y-2">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-amber-400 transition"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Posko & Kontak Polrestabes */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Sekretariat POLIRAN
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Gedung Pelayanan Terpadu Polrestabes
              <br />
              Hotline Bantuan: <strong>110</strong> / 0812-POLIRAN-OK
            </p>
          </div>
        </div>

        {/* Copyright Note */}
        <div className="border-t border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <p>
            © 2026 POLIRAN - Polisi Peduli Pengangguran. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Menuju Indonesia Maju &amp; Produktif</span>
            <i className="fa-solid fa-flag text-red-500 ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
