import Image from "next/image";

export default function PoliranStrip() {
  return (
    <div className="bg-[#0f1f38] text-white relative z-10">
      <div className="relative max-w-[520px] w-full mx-auto px-3 sm:px-4 h-14 flex flex-nowrap items-center justify-center gap-2 sm:gap-2.5">
        <Image src="/polri.png" alt="Lambang Polri" width={26} height={26} className="w-[26px] h-[26px] shrink-0" />
        <span className="text-base font-extrabold tracking-wider whitespace-nowrap">POLIRAN</span>
        <span className="w-px h-5 bg-white/30 shrink-0" aria-hidden="true" />
        <span className="text-xs font-medium text-slate-300 tracking-wide whitespace-nowrap">
          Polisi Peduli Pengangguran
        </span>
      </div>
    </div>
  );
}
