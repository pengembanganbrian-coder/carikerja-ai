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
            <a href="#" className="hover:text-blue-700">
              Artikel Karier
            </a>
            <a href="/tools/cv-checker" className="hover:text-blue-700">CV Checker</a>
          </nav>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Cari lowongan kerja dari berbagai sumber web
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Temukan pekerjaan yang paling cocok untukmu
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Cari lowongan berdasarkan posisi, lokasi, jenis kerja, dan nanti akan
            dibantu dengan fitur AI untuk mencocokkan CV dengan pekerjaan.
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
            <div className="rounded-2xl bg-white p-5 text-left shadow">
              <h3 className="font-bold">Lowongan Terbaru</h3>
              <p className="mt-2 text-sm text-slate-600">
                Kumpulan lowongan dari berbagai sumber terpercaya.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-left shadow">
              <h3 className="font-bold">AI Job Matching</h3>
              <p className="mt-2 text-sm text-slate-600">
                Cocokkan CV dengan deskripsi pekerjaan secara otomatis.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-left shadow">
              <h3 className="font-bold">Artikel Karier</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tips CV, interview, dan pengembangan karier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

