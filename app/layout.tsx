import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://carikerja-ai.vercel.app"),
  title: {
    default: "CariKerja AI - Pencarian Lowongan Kerja",
    template: "%s | CariKerja AI",
  },
  description:
    "CariKerja AI membantu pengguna menemukan lowongan kerja dari berbagai sumber web, membaca artikel karier, dan mengecek kecocokan CV dengan lowongan.",
  keywords: [
    "lowongan kerja",
    "cari kerja",
    "CV checker",
    "artikel karier",
    "tips interview",
    "CV ATS",
    "fresh graduate",
    "remote jobs",
  ],
  authors: [{ name: "CariKerja AI" }],
  creator: "CariKerja AI",
  publisher: "CariKerja AI",
  openGraph: {
    title: "CariKerja AI - Pencarian Lowongan Kerja",
    description:
      "Temukan lowongan kerja, baca artikel karier, dan cek kecocokan CV dengan deskripsi pekerjaan.",
    url: "https://carikerja-ai.vercel.app",
    siteName: "CariKerja AI",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CariKerja AI - Pencarian Lowongan Kerja",
    description:
      "Temukan lowongan kerja, baca artikel karier, dan cek kecocokan CV dengan deskripsi pekerjaan.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "7Bv1F7lY2aBBzGIsgTG9I5B7fqHiOKnhi53BZfhqgQo",
  },
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
