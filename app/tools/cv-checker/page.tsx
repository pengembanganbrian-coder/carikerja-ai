"use client";

import { useMemo, useState } from "react";
import AdPlaceholder from "../../components/AdPlaceholder";

const skillKeywords = [
  "communication",
  "leadership",
  "teamwork",
  "recruitment",
  "training",
  "human resources",
  "hr",
  "data analysis",
  "project management",
  "excel",
  "research",
  "writing",
  "administration",
  "psychology",
  "counseling",
  "interview",
  "report",
  "presentation",
  "problem solving",
  "customer service",
  "marketing",
  "sales",
  "software",
  "engineering",
  "design",
  "product",
  "management",
];

export default function CvCheckerPage() {
  const [cvText, setCvText] = useState("");
  const [jobText, setJobText] = useState("");

  const result = useMemo(() => {
    const combinedCv = cvText.toLowerCase();
    const combinedJob = jobText.toLowerCase();

    const jobKeywords = skillKeywords.filter((keyword) =>
      combinedJob.includes(keyword)
    );

    const matchedKeywords = jobKeywords.filter((keyword) =>
      combinedCv.includes(keyword)
    );

    const missingKeywords = jobKeywords.filter(
      (keyword) => !combinedCv.includes(keyword)
    );

    const score =
      jobKeywords.length === 0
        ? 0
        : Math.round((matchedKeywords.length / jobKeywords.length) * 100);

    return {
      score,
      jobKeywords,
      matchedKeywords,
      missingKeywords,
    };
  }, [cvText, jobText]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CariKerja AI
          </a>

          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="/jobs" className="hover:text-blue-700">
              Lowongan
            </a>
            <a href="/blog" className="hover:text-blue-700">
              Artikel Karier
            </a>
            <a href="/tools/cv-checker" className="text-blue-700">
              CV Checker
            </a>
          </nav>
        </header>

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold md:text-5xl">
            CV Checker
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Cek kecocokan sederhana antara isi CV dan deskripsi lowongan kerja.
            Tool ini membantu kamu melihat kata kunci yang sudah cocok dan yang
            masih perlu diperkuat.
          </p>
        </div>

        <AdPlaceholder />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Isi CV</h2>
            <p className="mt-2 text-sm text-slate-600">
              Paste ringkasan CV, pengalaman, skill, atau profil LinkedIn kamu.
            </p>

            <textarea
              value={cvText}
              onChange={(event) => setCvText(event.target.value)}
              placeholder="Contoh: Saya memiliki pengalaman di bidang HR, recruitment, training, counseling, data analysis, dan penyusunan laporan..."
              className="mt-4 min-h-72 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
            />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Deskripsi Lowongan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Paste deskripsi pekerjaan atau kualifikasi dari lowongan yang kamu
              incar.
            </p>

            <textarea
              value={jobText}
              onChange={(event) => setJobText(event.target.value)}
              placeholder="Contoh: Kandidat memiliki kemampuan recruitment, communication, project management, Excel, dan report writing..."
              className="mt-4 min-h-72 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">Hasil Kecocokan</h2>

          {cvText.trim() === "" || jobText.trim() === "" ? (
            <p className="mt-3 text-slate-600">
              Masukkan isi CV dan deskripsi lowongan terlebih dahulu untuk
              melihat hasil analisis.
            </p>
          ) : (
            <div className="mt-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-slate-600">Skor kecocokan</p>
                  <p className="mt-1 text-5xl font-extrabold text-blue-700">
                    {result.score}%
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
                  {result.score >= 70
                    ? "CV kamu cukup relevan dengan lowongan ini."
                    : result.score >= 40
                    ? "CV kamu sudah punya sebagian kecocokan, tetapi masih bisa diperkuat."
                    : "CV kamu belum terlalu selaras dengan deskripsi lowongan ini."}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="font-bold">Kata kunci yang cocok</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.matchedKeywords.length > 0 ? (
                      result.matchedKeywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                        >
                          {keyword}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500">
                        Belum ada kata kunci yang cocok.
                      </p>
                    )}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="font-bold">Kata kunci yang belum terlihat</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.missingKeywords.length > 0 ? (
                      result.missingKeywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700"
                        >
                          {keyword}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500">
                        Semua kata kunci utama sudah terlihat.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <AdPlaceholder />
      </section>
    </main>
  );
}

