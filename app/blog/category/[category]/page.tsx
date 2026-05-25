import type { Metadata } from "next";
import { careerArticles } from "../../../data/careerArticles";
import { articleCategories } from "../../../data/articleCategories";

export function generateStaticParams() {
  return articleCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const selectedCategory = articleCategories.find(
    (item) => item.slug === category
  );

  if (!selectedCategory) {
    return {
      title: "Kategori Artikel Tidak Ditemukan",
      description: "Kategori artikel yang kamu cari belum tersedia.",
    };
  }

  return {
    title: `${selectedCategory.name} - Artikel Karier`,
    description: selectedCategory.description,
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const selectedCategory = articleCategories.find(
    (item) => item.slug === category
  );

  if (!selectedCategory) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
        <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CariKerja AI
          </a>

          <h1 className="mt-8 text-2xl font-bold">
            Kategori tidak ditemukan
          </h1>

          <a
            href="/blog"
            className="mt-5 inline-block rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Kembali ke Artikel
          </a>
        </section>
      </main>
    );
  }

  const filteredArticles = careerArticles.filter(
    (article) => article.category === selectedCategory.name
  );

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
            <a href="/tools/cv-checker" className="hover:text-blue-700">
              CV Checker
            </a>
          </nav>
        </header>

        <div className="mb-8">
          <a href="/blog" className="text-sm font-semibold text-blue-700">
            ← Kembali ke semua artikel
          </a>

          <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">
            {selectedCategory.name}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {selectedCategory.description}
          </p>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 shadow">
            Belum ada artikel dalam kategori ini.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {filteredArticles.map((article) => (
              <a
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
              >
                <p className="text-sm font-semibold text-blue-700">
                  {article.category}
                </p>

                <h2 className="mt-3 text-xl font-bold">{article.title}</h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-blue-700">
                  Baca artikel →
                </p>
              </a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
