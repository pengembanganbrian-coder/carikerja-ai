import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cari Lowongan Kerja",
  description:
    "Cari lowongan kerja dari berbagai sumber web berdasarkan posisi, lokasi, dan jenis pekerjaan.",
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
