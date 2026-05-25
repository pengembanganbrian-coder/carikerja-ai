import AdPlaceholder from "../../components/AdPlaceholder";

export default function TipsInterviewKerjaPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <a href="/" className="text-2xl font-bold text-blue-700">
          CariKerja AI
        </a>

        <p className="mt-8 text-sm font-semibold text-blue-700">
          Panduan Interview
        </p>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
          Tips Menjawab Pertanyaan Interview Kerja
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Interview kerja adalah kesempatan untuk menunjukkan bahwa pengalaman,
          kemampuan, dan cara berpikirmu sesuai dengan kebutuhan posisi yang
          dilamar.
        </p>

        <AdPlaceholder />

        <h2 className="mt-8 text-2xl font-bold">1. Pahami Posisi yang Dilamar</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Sebelum interview, baca kembali deskripsi pekerjaan. Perhatikan tugas
          utama, kualifikasi, skill yang dibutuhkan, dan karakter kandidat yang
          dicari oleh perusahaan.
        </p>

        <h2 className="mt-8 text-2xl font-bold">2. Gunakan Metode STAR</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Untuk menjawab pertanyaan berbasis pengalaman, gunakan metode STAR:
          Situation, Task, Action, dan Result. Metode ini membantu jawabanmu
          terdengar lebih jelas, runtut, dan berbasis bukti.
        </p>

        <h2 className="mt-8 text-2xl font-bold">3. Siapkan Cerita Pengalaman</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Siapkan beberapa contoh pengalaman tentang menyelesaikan masalah,
          bekerja dalam tim, menghadapi tekanan, belajar hal baru, dan mencapai
          target. Cerita seperti ini sering muncul dalam interview.
        </p>

        <h2 className="mt-8 text-2xl font-bold">4. Tanyakan Hal yang Relevan</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Di akhir interview, kamu bisa bertanya tentang ekspektasi posisi,
          budaya kerja, alur kerja tim, atau proses seleksi berikutnya. Ini
          menunjukkan bahwa kamu serius dan tertarik.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-5 text-blue-800">
          Tips: jangan menghafal jawaban terlalu kaku. Pahami poin utamanya,
          lalu sampaikan dengan bahasa yang natural.
        </div>

        <AdPlaceholder />

        <div className="mt-8 flex gap-3">
          <a
            href="/blog"
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Kembali ke Artikel
          </a>

          <a
            href="/jobs"
            className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Cari Lowongan
          </a>
        </div>
      </article>
    </main>
  );
}

