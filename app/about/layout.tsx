import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang CariKerja AI",
  description:
    "Tentang CariKerja AI, platform pencarian lowongan kerja dan artikel karier.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
