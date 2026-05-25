export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <a href="/" className="text-2xl font-bold text-blue-700">
          CariKerja AI
        </a>

        <h1 className="mt-8 text-3xl font-extrabold">Kontak</h1>

        <p className="mt-4 leading-7 text-slate-700">
          Untuk pertanyaan, masukan, kerja sama, atau permintaan penghapusan
          informasi lowongan, silakan hubungi kami melalui email berikut:
        </p>

        <div className="mt-6 rounded-xl bg-blue-50 p-4 text-blue-800">
          contact@carikerja-ai.com
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Catatan: alamat email ini masih contoh. Nanti bisa diganti dengan
          email resmi milik kamu.
        </p>
      </section>
    </main>
  );
}

