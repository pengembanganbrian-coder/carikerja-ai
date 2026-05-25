export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <a href="/" className="text-2xl font-bold text-blue-700">
          CariKerja AI
        </a>

        <h1 className="mt-8 text-3xl font-extrabold">Tentang CariKerja AI</h1>

        <p className="mt-4 leading-7 text-slate-700">
          CariKerja AI adalah platform pencarian lowongan kerja yang membantu
          pengguna menemukan peluang kerja dari berbagai sumber web secara lebih
          mudah, cepat, dan terstruktur.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          Pada tahap awal, data lowongan yang ditampilkan berasal dari sumber
          publik pihak ketiga. Pengguna akan diarahkan ke situs asli penyedia
          lowongan untuk membaca informasi lengkap dan melakukan proses lamaran.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          Ke depan, platform ini akan dikembangkan dengan fitur pencocokan CV,
          artikel karier, dan alat bantu pencari kerja berbasis AI.
        </p>
      </section>
    </main>
  );
}

