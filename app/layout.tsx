import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "CariKerja AI - Pencarian Lowongan Kerja",
  description:
    "CariKerja AI membantu pengguna menemukan lowongan kerja dari berbagai sumber web secara cepat dan terstruktur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
