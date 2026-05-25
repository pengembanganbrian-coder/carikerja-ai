import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer Lowongan",
  description:
    "Disclaimer CariKerja AI terkait sumber informasi lowongan, verifikasi mandiri, dan kewaspadaan terhadap penipuan kerja.",
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
