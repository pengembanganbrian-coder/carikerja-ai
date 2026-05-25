export default function CvAtsFriendlyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <a href="/" className="text-2xl font-bold text-blue-700">
          CariKerja AI
        </a>

        <p className="mt-8 text-sm font-semibold text-blue-700">
          Panduan CV
        </p>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
          Cara Membuat CV ATS Friendly untuk Melamar Kerja
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          CV ATS friendly adalah CV yang mudah dibaca oleh sistem penyaring
          lamaran kerja. Banyak perusahaan menggunakan sistem ini untuk membantu
          memilah CV sebelum dibaca oleh recruiter.
        </p>

        <h2 className="mt-8 text-2xl font-bold">1. Gunakan Format yang Sederhana</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Hindari desain yang terlalu ramai, tabel yang kompleks, gambar
          berlebihan, atau elemen dekoratif yang sulit dibaca sistem. Gunakan
          struktur yang jelas seperti profil singkat, pengalaman kerja,
          pendidikan, keterampilan, dan sertifikasi.
        </p>

        <h2 className="mt-8 text-2xl font-bold">2. Sesuaikan dengan Deskripsi Lowongan</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Baca deskripsi pekerjaan dengan teliti, lalu masukkan kata kunci yang
          relevan ke dalam CV. Misalnya lowongan meminta pengalaman recruitment,
          training, HR administration, atau data analysis, maka pastikan
          pengalaman yang sesuai ditulis secara eksplisit.
        </p>

        <h2 className="mt-8 text-2xl font-bold">3. Tulis Pencapaian, Bukan Hanya Tugas</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Daripada hanya menulis daftar tugas, jelaskan hasil kerja yang pernah
          dicapai. Contohnya: mengelola proses rekrutmen, menyusun program
          pelatihan, meningkatkan partisipasi peserta, atau membuat laporan
          evaluasi berbasis data.
        </p>

        <h2 className="mt-8 text-2xl font-bold">4. Gunakan File PDF</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Setelah CV selesai, simpan dalam format PDF agar tampilannya tidak
          berubah saat dibuka di perangkat lain. Pastikan nama file juga rapi,
          misalnya CV_Nama_Posisi.pdf.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-5 text-blue-800">
          Tips: sebelum melamar, bandingkan isi CV dengan deskripsi lowongan.
          Semakin relevan isi CV dengan kebutuhan posisi, semakin besar peluang
          CV diperhatikan.
        </div>

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

