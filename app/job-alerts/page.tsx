"use client";

import { useEffect, useState } from "react";

type JobAlert = {
  id: number;
  keyword: string;
  location: string;
  frequency: string;
};

export default function JobAlertsPage() {
  const [alerts, setAlerts] = useState<JobAlert[]>([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [frequency, setFrequency] = useState("Harian");

  useEffect(() => {
    const storedAlerts = localStorage.getItem("jobAlerts");
    if (storedAlerts) {
      setAlerts(JSON.parse(storedAlerts));
    }
  }, []);

  function saveAlert(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!keyword.trim()) {
      alert("Isi keyword lowongan terlebih dahulu.");
      return;
    }

    const newAlert: JobAlert = {
      id: Date.now(),
      keyword,
      location,
      frequency,
    };

    const updatedAlerts = [...alerts, newAlert];
    setAlerts(updatedAlerts);
    localStorage.setItem("jobAlerts", JSON.stringify(updatedAlerts));

    setKeyword("");
    setLocation("");
    setFrequency("Harian");
  }

  function deleteAlert(id: number) {
    const updatedAlerts = alerts.filter((alertItem) => alertItem.id !== id);
    setAlerts(updatedAlerts);
    localStorage.setItem("jobAlerts", JSON.stringify(updatedAlerts));
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-5xl">
        <header className="mb-10 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CariKerja AI
          </a>

          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="/jobs" className="hover:text-blue-700">
              Lowongan
            </a>
            <a href="/saved-jobs" className="hover:text-blue-700">
              Tersimpan
            </a>
            <a href="/job-alerts" className="text-blue-700">
              Job Alert
            </a>
            <a href="/blog" className="hover:text-blue-700">
              Artikel Karier
            </a>
          </nav>
        </header>

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold md:text-5xl">
            Job Alert
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Simpan pencarian lowongan berdasarkan keyword dan lokasi. Untuk
            tahap awal, alert disimpan di browser ini. Fitur email otomatis
            bisa ditambahkan nanti setelah ada database dan sistem login.
          </p>
        </div>

        <form
          onSubmit={saveAlert}
          className="rounded-2xl bg-white p-6 shadow"
        >
          <h2 className="text-xl font-bold">Buat Alert Baru</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Keyword
              </label>
              <input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="Contoh: Engineer"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Lokasi
              </label>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Contoh: Remote"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Frekuensi
              </label>
              <select
                value={frequency}
                onChange={(event) => setFrequency(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              >
                <option>Harian</option>
                <option>Mingguan</option>
                <option>Bulanan</option>
              </select>
            </div>
          </div>

          <button className="mt-5 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
            Simpan Alert
          </button>
        </form>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Alert Tersimpan</h2>

          {alerts.length === 0 ? (
            <div className="rounded-2xl bg-white p-6 shadow">
              Belum ada job alert tersimpan.
            </div>
          ) : (
            <div className="grid gap-4">
              {alerts.map((alertItem) => (
                <div
                  key={alertItem.id}
                  className="rounded-2xl bg-white p-6 shadow"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-xl font-bold">
                        {alertItem.keyword}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        <span className="rounded-full bg-slate-100 px-3 py-1">
                          Lokasi: {alertItem.location || "Semua lokasi"}
                        </span>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                          {alertItem.frequency}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={`/jobs?keyword=${encodeURIComponent(
                          alertItem.keyword
                        )}&location=${encodeURIComponent(alertItem.location)}`}
                        className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
                      >
                        Lihat Lowongan
                      </a>

                      <button
                        onClick={() => deleteAlert(alertItem.id)}
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
      </section>
    </main>
  );
}
