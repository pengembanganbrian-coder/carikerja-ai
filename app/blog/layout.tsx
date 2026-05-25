import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel Karier",
  description:
    "Kumpulan artikel karier tentang CV, interview, fresh graduate, lowongan kerja, dan strategi melamar kerja.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
