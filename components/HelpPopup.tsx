"use client";

import { useState } from "react";
import { MessageCircleQuestionMark, X } from "lucide-react";

export default function HelpPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Popup card */}
      {open && (
        <div
          role="dialog"
          aria-label="Bantuan POLIRAN"
          className="w-72 bg-surface-container-lowest border border-slate-200/80 rounded-2xl shadow-card-clean p-5"
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2.5">
              <h2 className="text-sm font-bold text-on-surface">Butuh Bantuan</h2>
              <div className="w-9 h-9 rounded-full bg-[#132238] text-white flex items-center justify-center shadow-sm shrink-0">
                <MessageCircleQuestionMark className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>
            <button
              aria-label="Tutup bantuan"
              className="w-7 h-7 rounded-full bg-surface-container text-slate-400 hover:text-slate-700 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/40 transition-colors"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Silakan hubungi Call Center Polri 110 yang tersedia gratis selama 24 jam.
          </p>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        aria-expanded={open}
        aria-label={open ? "Tutup bantuan" : "Buka bantuan"}
        className="flex items-center gap-2 rounded-full bg-[#132238] hover:bg-[#0c1726] text-white text-xs font-semibold px-4 py-2.5 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132238]/40 active:scale-[0.98] transition-all duration-150"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span>Butuh Bantuan</span>
        <MessageCircleQuestionMark className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
