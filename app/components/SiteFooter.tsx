export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">CariKerja AI</p>
          <p className="mt-1 text-slate-500">
            Platform pencarian lowongan kerja dari berbagai sumber web.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/about" className="hover:text-blue-700">
            Tentang
          </a>
          <a href="/contact" className="hover:text-blue-700">
            Kontak
          </a>
          <a href="/privacy-policy" className="hover:text-blue-700">
            Kebijakan Privasi
          </a>
          <a href="/disclaimer" className="hover:text-blue-700">
            Disclaimer
          </a>
          <a href="/jobs" className="hover:text-blue-700">
            Lowongan
          </a>
          <a href="/saved-jobs" className="hover:text-blue-700">
            Tersimpan
          </a>
        </div>
      </div>
    </footer>
  );
}
