"use client";

import { useEffect, useMemo, useState } from "react";
import AdPlaceholder from "../components/AdPlaceholder";

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

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setKeyword(params.get("keyword") || "");
    setLocation(params.get("location") || "");

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

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const keywordText = `${job.title} ${job.company} ${job.type} ${job.source}`.toLowerCase();
      const locationText = job.location.toLowerCase();

      const matchKeyword =
        keyword.trim() === "" || keywordText.includes(keyword.toLowerCase());

      const matchLocation =
        location.trim() === "" || locationText.includes(location.toLowerCase());

      return matchKeyword && matchLocation;
    });
  }, [jobs, keyword, location]);

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
            <a href="#" className="hover:text-blue-700">
              Artikel Karier
            </a>
            <a href="/tools/cv-checker" className="hover:text-blue-700">CV Checker</a>
          </nav>
        </header>

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold md:text-5xl">
            Cari Lowongan Kerja
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Data lowongan di halaman ini sudah diambil otomatis dari sumber web.
            Untuk tahap awal, sumber data masih menggunakan Remotive.
          </p>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="mb-8 rounded-2xl bg-white p-4 shadow"
        >
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <input
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Posisi, contoh: Engineer"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Lokasi, contoh: Worldwide"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <button className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
              Cari
            </button>
          </div>
        </form>

        <AdPlaceholder />

        <div className="mb-4 text-sm text-slate-600">
          Menampilkan {filteredJobs.length} dari {jobs.length} lowongan.
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-6 shadow">
            Mengambil data lowongan...
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 shadow">
            Tidak ada lowongan yang cocok dengan pencarianmu.
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

