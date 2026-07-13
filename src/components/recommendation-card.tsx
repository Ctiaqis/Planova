export function RecommendationCard() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl p-5 shadow-[0_8px_24px_rgba(59,130,246,0.3)] text-white relative overflow-hidden group hover:-translate-y-1 transition-transform">
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors"></div>
      <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-pink-400/30 rounded-full blur-xl"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl animate-pulse">💡</span>
          <h3 className="text-sm font-extrabold tracking-wide text-white">Rekomendasi Hari Ini</h3>
        </div>
        <p className="text-xs text-white/90 leading-relaxed font-medium mb-4">
          Kerjakan <strong className="text-white">Data Structures Final Project</strong> dulu karena batas waktunya tinggal hitungan jam.
        </p>
        <button className="w-full py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-extrabold transition-all backdrop-blur-md shadow-sm border border-white/10 hover:scale-[1.02]">
          Mulai Kerjakan
        </button>
      </div>
    </div>
  );
}
