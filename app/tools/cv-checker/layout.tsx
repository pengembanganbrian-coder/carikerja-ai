import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Checker",
  description:
    "Cek kecocokan sederhana antara isi CV dan deskripsi lowongan kerja berdasarkan kata kunci penting.",
};

export default function CvCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
