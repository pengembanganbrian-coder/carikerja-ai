import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Alert",
  description:
    "Simpan pencarian lowongan kerja berdasarkan keyword dan lokasi di CariKerja AI.",
};

export default function JobAlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
