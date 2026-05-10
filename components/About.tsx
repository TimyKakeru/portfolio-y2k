export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="y2k-window w-full">
        <div className="y2k-titlebar font-orbitron text-sm font-bold">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm bg-xp-blue border border-white" />
            About_Me.exe
          </div>
          <div className="flex gap-1">
            <button className="w-5 h-5 rounded-sm bg-white text-black font-black flex items-center justify-center text-[12px] shadow-sm">_</button>
            <button className="w-5 h-5 rounded-sm bg-white text-black font-black flex items-center justify-center text-[12px] shadow-sm">□</button>
            <button className="w-5 h-5 rounded-sm bg-red-500 text-white font-bold flex items-center justify-center text-[10px] shadow-sm shadow-red-800 border border-white">X</button>
          </div>
        </div>
        
        <div className="p-8 bg-white m-1 border border-slate-300 shadow-inner flex flex-col md:flex-row gap-10 items-center">
          <div className="w-48 h-48 glossy-bubble bg-gradient-to-br from-y2k-pink to-xp-blue flex-shrink-0 flex items-center justify-center border-4 border-white shadow-xl">
            <span className="font-orbitron text-6xl font-black text-white drop-shadow-md">TK</span>
          </div>
          
          <div>
            <h2 className="font-orbitron text-3xl font-black text-xp-blue mb-4">UPLOADING PROFILE... 100%</h2>
            <p className="font-rajdhani text-xl text-slate-700 leading-relaxed font-bold mb-6">
              Halo! Saya Timy, Saya adalah mahasiswa Informatika di ITATS yang saat ini sangat antusias mempelajari dunia pemrograman game. Fokus utama saya adalah menjadi seorang game programmer dan mendalami berbagai aspek pengembangan game.
            </p>
            <div className="flex gap-4">
              <span className="glossy-bubble bg-xp-light/20 text-xp-blue px-4 py-1 text-sm font-bold">4+ Years Exp</span>
              <span className="glossy-bubble bg-y2k-light-pink/20 text-y2k-maroon px-4 py-1 text-sm font-bold">35+ Projects Shipped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}