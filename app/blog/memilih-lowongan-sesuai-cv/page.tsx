import AdPlaceholder from "../../components/AdPlaceholder";

export default function MemilihLowonganSesuaiCvPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <a href="/" className="text-2xl font-bold text-blue-700">
          CariKerja AI
        </a>

        <p className="mt-8 text-sm font-semibold text-blue-700">
          Strategi Melamar Kerja
        </p>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
          Cara Memilih Lowongan Kerja yang Sesuai dengan CV
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Memilih lowongan kerja bukan hanya soal melamar sebanyak mungkin.
          Lamaran yang lebih tepat sasaran biasanya punya peluang lebih baik
          karena pengalaman dan kebutuhan posisi terlihat lebih selaras.
        </p>

        <AdPlaceholder />

        <h2 className="mt-8 text-2xl font-bold">1. Cocokkan Judul Posisi</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Mulailah dari posisi yang paling dekat dengan pengalamanmu. Misalnya,
          jika CV kamu banyak berisi pengalaman rekrutmen, pelatihan, atau
          administrasi SDM, maka posisi HR, people development, atau recruitment
          bisa lebih relevan.
        </p>

        <h2 className="mt-8 text-2xl font-bold">2. Baca Tugas dan Kualifikasi</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Jangan hanya melihat nama jabatan. Baca bagian tanggung jawab dan
          kualifikasi. Kadang judul posisinya sama, tetapi isi pekerjaannya bisa
          sangat berbeda antara satu perusahaan dengan perusahaan lain.
        </p>

        <h2 className="mt-8 text-2xl font-bold">3. Perhatikan Kata Kunci Skill</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Tandai skill yang sering muncul dalam lowongan, seperti komunikasi,
          analisis data, administrasi, rekrutmen, training, project management,
          atau penggunaan tools tertentu. Setelah itu, cek apakah skill tersebut
          sudah terlihat di CV kamu.
        </p>

        <h2 className="mt-8 text-2xl font-bold">4. Jangan Abaikan Lokasi dan Sistem Kerja</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Perhatikan apakah pekerjaan dilakukan secara remote, hybrid, atau
          on-site. Lokasi dan sistem kerja bisa memengaruhi kenyamanan, biaya,
          dan keberlanjutan kerja dalam jangka panjang.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-5 text-blue-800">
          Tips: sebelum melamar, tanyakan pada diri sendiri: apakah isi CV saya
          bisa menjawab kebutuhan utama lowongan ini?
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

