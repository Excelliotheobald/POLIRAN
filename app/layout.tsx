import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "POLIRAN - Polisi Peduli Pengangguran",
  description:
    "Bersama Polri, wujudkan kesempatan kerja untuk masa depan yang lebih baik.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={jakarta.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#f8fafc] text-slate-800 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
