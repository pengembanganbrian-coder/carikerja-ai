import type { Metadata } from "next";
import AdPlaceholder from "../../components/AdPlaceholder";
import { careerArticles } from "../../data/careerArticles";

export function generateStaticParams() {
  return careerArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = careerArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Artikel tidak ditemukan",
      description: "Artikel yang kamu cari belum tersedia di CariKerja AI.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://carikerja-ai.vercel.app/blog/${article.slug}`,
      siteName: "CariKerja AI",
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function DynamicBlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = careerArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
        <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CariKerja AI
          </a>

          <h1 className="mt-8 text-2xl font-bold">Artikel tidak ditemukan</h1>
          <p className="mt-3 text-slate-600">
            Artikel yang kamu cari belum tersedia atau alamatnya tidak sesuai.
          </p>

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

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <a href="/" className="text-2xl font-bold text-blue-700">
          CariKerja AI
        </a>

        <p className="mt-8 text-sm font-semibold text-blue-700">
          {article.category}
        </p>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
          {article.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          {article.intro}
        </p>

        <AdPlaceholder />

        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mt-8 text-2xl font-bold">{section.heading}</h2>
            <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
          </section>
        ))}

        <div className="mt-8 rounded-xl bg-blue-50 p-5 text-blue-800">
          {article.tip}
        </div>

        <AdPlaceholder />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/blog"
            className="rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
          >
            Kembali ke Artikel
          </a>

          <a
            href="/jobs"
            className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Cari Lowongan
          </a>
        </div>
      </article>
    </main>
  );
}
