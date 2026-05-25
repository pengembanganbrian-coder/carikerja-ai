const articles = [
  {
    title: "Cara Membuat CV ATS Friendly untuk Melamar Kerja",
    slug: "cv-ats-friendly",
    description:
      "Panduan sederhana membuat CV yang mudah dibaca sistem ATS dan tetap menarik bagi recruiter.",
  },
  {
    title: "Tips Menjawab Pertanyaan Interview Kerja",
    slug: "tips-interview-kerja",
    description:
      "Contoh cara menjawab pertanyaan interview dengan lebih terstruktur dan meyakinkan.",
  },
  {
    title: "Cara Memilih Lowongan Kerja yang Sesuai dengan CV",
    slug: "memilih-lowongan-sesuai-cv",
    description:
      "Strategi membaca deskripsi lowongan dan mencocokkannya dengan pengalaman kerja.",
  },
];

export default function BlogPage() {
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
            <a href="/blog" className="text-blue-700">
              Artikel Karier
            </a>
            <a href="/tools/cv-checker" className="hover:text-blue-700">CV Checker</a>
          </nav>
        </header>

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold md:text-5xl">
            Artikel Karier
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Kumpulan panduan praktis seputar CV, interview, pencarian kerja,
            dan pengembangan karier.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <h2 className="text-xl font-bold">{article.title}</h2>
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

