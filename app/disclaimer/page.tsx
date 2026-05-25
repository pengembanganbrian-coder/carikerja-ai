export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <a href="/" className="text-2xl font-bold text-blue-700">
          CariKerja AI
        </a>

        <h1 className="mt-8 text-3xl font-extrabold">Disclaimer Lowongan</h1>

        <p className="mt-4 leading-7 text-slate-700">
          CariKerja AI adalah platform pencarian dan agregasi informasi lowongan
          kerja yang membantu pengguna menemukan peluang kerja dari berbagai
          sumber web.
        </p>

        <h2 className="mt-6 text-xl font-bold">Sumber Informasi Lowongan</h2>
        <p className="mt-2 leading-7 text-slate-700">
          Informasi lowongan yang ditampilkan dapat berasal dari sumber pihak
          ketiga. Kami berupaya menampilkan informasi secara rapi dan mudah
          dibaca, namun detail akhir mengenai posisi, kualifikasi, batas waktu,
          dan proses lamaran tetap mengikuti situs asli penyedia lowongan.
        </p>

        <h2 className="mt-6 text-xl font-bold">Verifikasi Mandiri</h2>
        <p className="mt-2 leading-7 text-slate-700">
          Pengguna disarankan untuk selalu memeriksa kembali informasi lowongan
          pada situs asli sebelum mengirimkan lamaran, dokumen pribadi, atau
          informasi sensitif lainnya.
        </p>

        <h2 className="mt-6 text-xl font-bold">Tidak Memungut Biaya Lamaran</h2>
        <p className="mt-2 leading-7 text-slate-700">
          CariKerja AI tidak memungut biaya apa pun untuk proses melamar kerja.
          Berhati-hatilah terhadap pihak yang meminta pembayaran, transfer dana,
          atau informasi pribadi yang tidak relevan dengan proses rekrutmen.
        </p>

        <h2 className="mt-6 text-xl font-bold">Tanggung Jawab Pengguna</h2>
        <p className="mt-2 leading-7 text-slate-700">
          Keputusan untuk melamar pekerjaan, membagikan data pribadi, atau
          berkomunikasi dengan pihak penyedia lowongan sepenuhnya menjadi
          tanggung jawab pengguna.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-5 text-blue-800">
          Tips: selalu cek alamat website resmi perusahaan, hindari lowongan
          yang meminta biaya, dan pastikan proses rekrutmen terlihat wajar.
        </div>
      </section>
    </main>
  );
}
