"use client";

import { useState, useMemo, useCallback } from "react";
import { Search, ChevronDown, X } from "lucide-react";

type FAQCategory = "akun" | "lowongan" | "lamaran" | "perusahaan";

interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "akun-1",
    category: "akun",
    question: "Bagaimana cara membuat akun POLIRAN?",
    answer: "Klik tombol Daftar di halaman utama, pilih kategori Pelamar Kerja, lalu isi formulir pendaftaran dengan data diri lengkap. Verifikasi akun melalui OTP yang dikirim ke nomor WhatsApp atau email.",
  },
  {
    id: "akun-2",
    category: "akun",
    question: "Apakah pendaftaran akun berbayar?",
    answer: "Tidak. Pendaftaran akun POLIRAN sepenuhnya gratis. Seluruh layanan pelatihan, sertifikasi, dan penyaluran kerja tidak memungut biaya apapun.",
  },
  {
    id: "akun-3",
    category: "akun",
    question: "Bagaimana cara mengubah data profil?",
    answer: "Masuk ke akun, buka menu Profil, klik tombol Edit pada bagian yang ingin diubah, lalu simpan perubahan. Data tertentu seperti NIK memerlukan verifikasi ulang.",
  },
  {
    id: "akun-4",
    category: "akun",
    question: "Lupa kata sandi, bagaimana cara reset?",
    answer: "Di halaman login, klik Lupa Kata Sandi, masukkan email atau nomor telepon terdaftar, lalu ikuti tautan reset yang dikirim ke perangkat Anda.",
  },
  {
    id: "akun-5",
    category: "akun",
    question: "Bisakah saya memiliki lebih dari satu akun?",
    answer: "Tidak. Setiap warga hanya diperbolehkan memiliki satu akun POLIRAN yang terverifikasi dengan NIK dan nomor telepon unik.",
  },
  {
    id: "lowongan-1",
    category: "lowongan",
    question: "Bagaimana cara mencari lowongan pekerjaan?",
    answer: "Gunakan kolom pencarian di halaman Lowongan Pekerjaan dengan kata kunci posisi, perusahaan, atau lokasi. Gunakan filter Jenis Pekerjaan, Pengalaman, dan Lokasi untuk menyaring hasil.",
  },
  {
    id: "lowongan-2",
    category: "lowongan",
    question: "Apakah lowongan di POLIRAN sudah diverifikasi?",
    answer: "Ya. Semua lowongan berasal dari perusahaan mitra resmi yang telah diverifikasi oleh tim POLIRAN dan memiliki kontrak kerja yang sah sesuai ketentuan ketenagakerjaan.",
  },
  {
    id: "lowongan-3",
    category: "lowongan",
    question: "Bagaimana cara mengetahui lowongan terbaru?",
    answer: "Lowongan terbaru ditampilkan di bagian atas daftar. Anda juga dapat mengaktifkan notifikasi di pengaturan akun untuk menerima update lowongan sesuai preferensi.",
  },
  {
    id: "lowongan-4",
    category: "lowongan",
    question: "Apakah ada lowongan untuk fresh graduate?",
    answer: "Ya. Banyak perusahaan mitra menyediakan lowongan untuk Fresh Graduate. Gunakan filter Pengalaman > Fresh Graduate untuk melihat daftarnya.",
  },
  {
    id: "lowongan-5",
    category: "lowongan",
    question: "Bagaimana cara melamar lowongan di luar kota domisili?",
    answer: "Anda dapat melamar lowongan di mana saja. Pastikan siap untuk proses wawancara daring dan mempertimbangkan biaya transportasi serta akomodasi jika diterima.",
  },
  {
    id: "lamaran-1",
    category: "lamaran",
    question: "Bagaimana cara melamar pekerjaan?",
    answer: "Pilih lowongan yang diminati, klik tombol Lamar, lengkapi data lamaran (CV, surat lamaran, dokumen pendukung), lalu kirim. Status lamaran bisa dicek di dashboard akun.",
  },
  {
    id: "lamaran-2",
    category: "lamaran",
    question: "Dokumen apa yang wajib dilampirkan saat melamar?",
    answer: "Minimal: CV terbaru, surat lamaran, KTP, ijazah/sertifikat, dan SKCK yang masih berlaku. Beberapa lowongan menambahkan syarat portofolio atau sertifikat keahlian khusus.",
  },
  {
    id: "lamaran-3",
    category: "lamaran",
    question: "Bagaimana cara mengecek status lamaran?",
    answer: "Masuk ke dashboard akun, pilih menu Lamaran Saya. Status ditampilkan secara real-time: Dikirim, Ditinjau, Wawancara, Diterima, atau Ditolak.",
  },
  {
    id: "lamaran-4",
    category: "lamaran",
    question: "Bisakah melamar lebih dari satu lowongan sekaligus?",
    answer: "Ya. Anda dapat melamar beberapa lowongan secara bersamaan. Setiap lamaran diproses terpisah oleh perusahaan masing-masing.",
  },
  {
    id: "lamaran-5",
    category: "lamaran",
    question: "Berapa lama proses seleksi biasanya berlangsung?",
    answer: "Bervariasi per perusahaan, biasanya 1–3 minggu. Anda akan diberitahu melalui notifikasi aplikasi dan email pada setiap tahap seleksi.",
  },
  {
    id: "perusahaan-1",
    category: "perusahaan",
    question: "Bagaimana cara mendaftarkan perusahaan sebagai mitra POLIRAN?",
    answer: "Pilih Daftar > Perusahaan Mitra, isi formulir pendaftaran dengan data lengkap badan usaha (Akta Pendirian, NPWP, NIB, SIUP), lalu submit untuk verifikasi tim POLIRAN.",
  },
  {
    id: "perusahaan-2",
    category: "perusahaan",
    question: "Dokumen apa yang diperlukan untuk verifikasi perusahaan?",
    answer: "Akta Pendirian, NPWP, NIB/IZIN USAHA, SIUP (jika berlaku), SK Kemenkumham, surat kuasa pengurus, dan KTP pengurus bertanda tangan. File dalam format PDF/JPG maksimal 5 MB.",
  },
  {
    id: "perusahaan-3",
    category: "perusahaan",
    question: "Berapa lama proses verifikasi perusahaan?",
    answer: "Proses verifikasi umumnya 1–3 hari kerja setelah dokumen lengkap diterima. Tim akan menghubungi jika diperlukan kelengkapan dokumen.",
  },
  {
    id: "perusahaan-4",
    category: "perusahaan",
    question: "Apakah perusahaan wajib membayar untuk memasang lowongan?",
    answer: "Tidak. Pemasangan lowongan kerja bagi perusahaan mitra POLIRAN bebas biaya. Seluruh biaya administrasi ditanggung oleh program POLIRAN.",
  },
  {
    id: "perusahaan-5",
    category: "perusahaan",
    question: "Bagaimana cara mengelola lowongan yang sudah dipasang?",
    answer: "Perusahaan mendapat akses dashboard mitra untuk menambah, mengedit, menutup, atau memperpanjang lowongan. Statistik pelamar dan status seleksi tersedia secara real-time.",
  },
];

const CATEGORIES: { id: FAQCategory; label: string }[] = [
  { id: "akun", label: "Akun dan Profil" },
  { id: "lowongan", label: "Lowongan Pekerjaan" },
  { id: "lamaran", label: "Lamaran" },
  { id: "perusahaan", label: "Perusahaan" },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "all">("all");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = useMemo(() => {
    let result = FAQ_DATA;

    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const toggleItem = useCallback((id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return (
    <main className="min-h-screen bg-surface flex flex-col pt-20">
      {/* Page Header */}
      <header className="bg-surface-container-lowest border-b border-slate-200/60 px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f1f38]">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Temukan jawaban cepat seputar akun, lowongan, lamaran, dan mitra perusahaan.
          </p>
        </div>
      </header>

      <div className="flex-1 px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-3xl mx-auto w-full">
          {/* Search Bar */}
          <div className="mb-6 sm:mb-8">
            <label htmlFor="faq-search" className="sr-only">
              Cari pertanyaan
            </label>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="faq-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pertanyaan..."
                className="w-full h-12 pl-12 pr-12 rounded-xl bg-white border border-slate-200/80 text-slate-900 placeholder-slate-400 text-sm outline-none transition-all duration-200 focus:border-[#132238] focus:ring-2 focus:ring-[#132238]/10"
                aria-describedby="search-hint"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <p id="search-hint" className="sr-only">
              Ketik kata kunci untuk memfilter daftar pertanyaan
            </p>
          </div>

          {/* Category Tabs */}
          <div
            role="tablist"
            aria-label="Kategori FAQ"
            className="flex gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8 scrollbar-hide -mx-3 sm:mx-0 px-3 sm:px-0"
          >
            <button
              role="tab"
              aria-selected={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/40 ${
                activeCategory === "all"
                  ? "bg-[#132238] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200/80 hover:border-[#132238]/50 hover:text-[#132238]"
              }`}
            >
              Semua
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/40 ${
                  activeCategory === cat.id
                    ? "bg-[#132238] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200/80 hover:border-[#132238]/50 hover:text-[#132238]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
            {filteredFAQs.length > 0 ? (
              <dl className="divide-y divide-slate-200/60">
                {filteredFAQs.map((item) => {
                  const isOpen = openItems.includes(item.id);
                  return (
                    <div key={item.id} className="group">
                      <dt>
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${item.id}`}
                          id={`faq-question-${item.id}`}
                          className="w-full px-5 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/20 focus-visible:ring-inset"
                        >
                          <span className="text-base font-medium text-slate-900 pr-8 leading-relaxed">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </dt>
                      <dd
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        className={`overflow-hidden transition-all duration-200 ease-out ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 pb-4 sm:pb-5 text-slate-600 text-sm leading-relaxed">
                          {item.answer}
                        </div>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            ) : (
              <div className="px-5 py-12 sm:py-16 text-center">
                <Search className="mx-auto w-10 h-10 text-slate-300 mb-3" aria-hidden="true" />
                <p className="text-slate-500 text-sm">
                  {searchQuery
                    ? `Tidak ada pertanyaan yang cocok dengan "${searchQuery}"`
                    : "Tidak ada pertanyaan pada kategori ini"}
                </p>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="mt-3 text-sm font-semibold text-[#132238] hover:text-amber-600 inline-flex items-center gap-1 transition-colors"
                  >
                    Hapus filter pencarian
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Additional Help */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-slate-500 text-sm">
              Belum menemukan jawaban?{" "}
              <a
                href="mailto:poliran@polri.go.id"
                className="font-semibold text-[#132238] hover:text-amber-600 transition-colors"
              >
                Hubungi kami via email
              </a>
              {" atau "}
              <a
                href="tel:110"
                className="font-semibold text-[#132238] hover:text-amber-600 transition-colors"
              >
                Hubungi 110
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}