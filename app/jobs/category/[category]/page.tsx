"use client";

import { useEffect, useMemo, useState } from "react";
import AdPlaceholder from "../../../components/AdPlaceholder";
import { jobCategories } from "../../../data/jobCategories";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  source: string;
  sourceUrl: string;
};

export default function JobCategoryPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [categorySlug, setCategorySlug] = useState("");

  useEffect(() => {
    const slug = window.location.pathname.split("/").pop() || "";
    setCategorySlug(slug);

    async function loadJobs() {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Gagal mengambil data lowongan:", error);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  const selectedCategory = jobCategories.find(
    (category) => category.slug === categorySlug
  );

  const filteredJobs = useMemo(() => {
    if (!selectedCategory) return [];

    const keyword = selectedCategory.keyword.toLowerCase();

    return jobs.filter((job) => {
      const combinedText = `${job.title} ${job.company} ${job.location} ${job.type}`.toLowerCase();
      return combinedText.includes(keyword);
    });
  }, [jobs, selectedCategory]);

  if (!selectedCategory) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
        <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CariKerja AI
          </a>

          <h1 className="mt-8 text-2xl font-bold">Kategori tidak ditemukan</h1>

          <p className="mt-3 text-slate-600">
            Kategori lowongan yang kamu cari belum tersedia.
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
      <section className="mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CariKerja AI
          </a>

          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="/jobs" className="text-blue-700">
              Lowongan
            </a>
            <a href="/saved-jobs" className="hover:text-blue-700">
              Tersimpan
            </a>
            <a href="/blog" className="hover:text-blue-700">
              Artikel Karier
            </a>
            <a href="/tools/cv-checker" className="hover:text-blue-700">
              CV Checker
            </a>
          </nav>
        </header>

        <div className="mb-8">
          <a href="/jobs" className="text-sm font-semibold text-blue-700">
            ← Kembali ke semua lowongan
          </a>

          <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">
            {selectedCategory.name}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {selectedCategory.description}
          </p>
        </div>

        <AdPlaceholder />

        <div className="mb-4 text-sm text-slate-600">
          Menampilkan {filteredJobs.length} lowongan untuk kategori ini.
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-6 shadow">
            Mengambil data lowongan...
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 shadow">
            Belum ada lowongan yang cocok dengan kategori ini.
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredJobs.map((job, index) => (
              <div key={job.id}>
                <div className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <h2 className="text-xl font-bold">{job.title}</h2>

                      <p className="mt-1 font-medium text-slate-700">
                        {job.company}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
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
                    </div>

                    <a
                      href={`/jobs/${job.id}`}
                      className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
                    >
                      Lihat Detail
                    </a>
                  </div>
                </div>

                {(index + 1) % 5 === 0 && <AdPlaceholder />}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
