export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white px-2 py-2 shadow-lg md:hidden">
      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-medium text-slate-600">
        <a href="/jobs" className="rounded-xl px-1 py-2 hover:bg-blue-50 hover:text-blue-700">
          <div className="text-lg">💼</div>
          <div>Lowongan</div>
        </a>

        <a href="/saved-jobs" className="rounded-xl px-1 py-2 hover:bg-blue-50 hover:text-blue-700">
          <div className="text-lg">⭐</div>
          <div>Simpan</div>
        </a>

        <a href="/job-alerts" className="rounded-xl px-1 py-2 hover:bg-blue-50 hover:text-blue-700">
          <div className="text-lg">🔔</div>
          <div>Alert</div>
        </a>

        <a href="/blog" className="rounded-xl px-1 py-2 hover:bg-blue-50 hover:text-blue-700">
          <div className="text-lg">📚</div>
          <div>Artikel</div>
        </a>

        <a href="/tools/cv-checker" className="rounded-xl px-1 py-2 hover:bg-blue-50 hover:text-blue-700">
          <div className="text-lg">📝</div>
          <div>CV</div>
        </a>
      </div>
    </nav>
  );
}
