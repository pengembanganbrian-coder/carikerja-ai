import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi CariKerja AI untuk pertanyaan, masukan, kerja sama, atau permintaan terkait informasi lowongan.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
