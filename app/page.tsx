import { careerArticles } from "./data/careerArticles";
import { jobCategories } from "./data/jobCategories";

const latestArticles = careerArticles.slice(0, 6);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
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
            <a href="/blog" className="hover:text-blue-700">
              Artikel Karier
            </a>
            <a href="/tools/cv-checker" className="hover:text-blue-700">
              CV Checker
            </a>
          </nav>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Cari lowongan kerja dari berbagai sumber web
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Temukan pekerjaan yang paling cocok untukmu
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Cari lowongan berdasarkan posisi, lokasi, jenis kerja, dan gunakan
            tools karier untuk membantu menyiapkan lamaran kerja yang lebih kuat.
          </p>

          <form
            action="/jobs"
            method="GET"
            className="mt-8 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-lg"
          >
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
              <input
                name="keyword"
                type="text"
                placeholder="Posisi, contoh: Engineer"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="location"
                type="text"
                placeholder="Lokasi, contoh: Worldwide"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <button className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
                Cari
              </button>
            </div>
          </form>

          <div className="mt-10 grid w-full max-w-4xl gap-4 md:grid-cols-3">
            <a
              href="/jobs"
              className="rounded-2xl bg-white p-5 text-left shadow transition hover:shadow-lg"
            >
              <h3 className="font-bold">Lowongan Terbaru</h3>
              <p className="mt-2 text-sm text-slate-600">
                Kumpulan lowongan dari berbagai sumber terpercaya.
              </p>
            </a>

            <a
              href="/tools/cv-checker"
              className="rounded-2xl bg-white p-5 text-left shadow transition hover:shadow-lg"
            >
              <h3 className="font-bold">CV Checker</h3>
              <p className="mt-2 text-sm text-slate-600">
                Cek kecocokan CV dengan deskripsi pekerjaan secara sederhana.
              </p>
            </a>

            <a
              href="/blog"
              className="rounded-2xl bg-white p-5 text-left shadow transition hover:shadow-lg"
            >
              <h3 className="font-bold">Artikel Karier</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tips CV, interview, dan pengembangan karier.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold">Jelajahi Kategori Lowongan</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Pilih kategori lowongan yang paling sesuai dengan minat dan rencana
            kariermu.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {jobCategories.map((category) => (
            <a
              key={category.slug}
              href={`/jobs/category/${category.slug}`}
              className="rounded-2xl bg-white p-5 shadow transition hover:shadow-lg"
            >
              <h3 className="font-bold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold">Artikel Terbaru</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Baca panduan praktis untuk membuat CV, menghadapi interview, dan
              memilih lowongan kerja yang sesuai.
            </p>
          </div>

          <a href="/blog" className="font-semibold text-blue-700">
            Lihat semua artikel →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestArticles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-blue-700">
                {article.category}
              </p>

              <h3 className="mt-3 text-xl font-bold">{article.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {article.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-blue-700">
                Baca artikel →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
