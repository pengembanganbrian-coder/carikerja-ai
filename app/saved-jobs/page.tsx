"use client";

import { useEffect, useState } from "react";

type SavedJob = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  source: string;
  sourceUrl: string;
};

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("savedJobs");
    if (storedJobs) {
      setSavedJobs(JSON.parse(storedJobs));
    }
  }, []);

  function removeSavedJob(id: number) {
    const updatedJobs = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  }

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
            <a href="/saved-jobs" className="text-blue-700">
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
          <h1 className="text-3xl font-extrabold md:text-5xl">
            Lowongan Tersimpan
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Daftar lowongan yang kamu simpan di browser ini. Fitur ini belum
            menggunakan akun login, jadi data tersimpan hanya di perangkat yang
            sedang kamu gunakan.
          </p>
        </div>

        {savedJobs.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow">
            <h2 className="text-xl font-bold">Belum ada lowongan tersimpan</h2>
            <p className="mt-2 text-slate-600">
              Buka halaman lowongan dan klik tombol Simpan untuk menyimpan
              lowongan yang menarik.
            </p>

            <a
              href="/jobs"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Cari Lowongan
            </a>
          </div>
        ) : (
          <div className="grid gap-4">
            {savedJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
              >
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

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`/jobs/${job.id}`}
                      className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
                    >
                      Lihat Detail
                    </a>

                    <button
                      onClick={() => removeSavedJob(job.id)}
                      className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
