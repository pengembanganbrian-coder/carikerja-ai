"use client";

import { useEffect, useState } from "react";
import AdPlaceholder from "../../components/AdPlaceholder";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  source: string;
  sourceUrl: string;
  description: string;
};

export default function JobDetailPage() {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJob() {
      try {
        const id = window.location.pathname.split("/").pop();

        const response = await fetch("/api/jobs");
        const data: Job[] = await response.json();

        const foundJob = data.find((item) => String(item.id) === String(id));
        setJob(foundJob || null);
      } catch (error) {
        console.error("Gagal mengambil detail lowongan:", error);
      } finally {
        setLoading(false);
      }
    }

    loadJob();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow">
          Mengambil detail lowongan...
        </section>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow">
          <h1 className="text-2xl font-bold">Lowongan tidak ditemukan</h1>
          <p className="mt-2 text-slate-600">
            Data lowongan ini belum tersedia atau sudah tidak masuk dalam daftar terbaru.
          </p>
          <a
            href="/jobs"
            className="mt-5 inline-block rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Kembali ke Lowongan
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CariKerja AI
          </a>

          <a href="/jobs" className="text-sm font-medium text-blue-700">
            Kembali ke Lowongan
          </a>
        </header>

        <article className="rounded-2xl bg-white p-6 shadow">
          <div className="mb-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
            Informasi lowongan ini bersumber dari {job.source}. Untuk melamar,
            kamu akan diarahkan ke situs asli penyedia lowongan.
          </div>

          <h1 className="text-3xl font-extrabold">{job.title}</h1>

          <p className="mt-2 text-lg font-medium text-slate-700">
            {job.company}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1">
              {job.location}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              {job.type}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              {job.salary}
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
              {job.source}
            </span>
          </div>

          <AdPlaceholder />

          <div className="my-8 border-t border-slate-200" />

          <h2 className="text-xl font-bold">Deskripsi Lowongan</h2>

          <p className="mt-4 whitespace-pre-line leading-7 text-slate-700">
            {job.description}
          </p>

          <AdPlaceholder />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={job.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-700 px-6 py-3 text-center font-semibold text-white hover:bg-blue-800"
            >
              Lamar di Situs Asli
            </a>

            <a
              href="/jobs"
              className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
            >
              Lihat Lowongan Lain
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
