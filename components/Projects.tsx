const projects = [
  { 
    id: "01", 
    title: "WINAMP WEB PLAYER", 
    desc: "Aplikasi pemutar musik berbasis web yang mereplikasi antarmuka Winamp klasik dengan audio visualizer responsif.", 
    tags: ["React", "Web Audio API", "Zustand"], 
    color: "from-y2k-pink via-y2k-maroon to-y2k-maroon-dark" 
  },
  { 
    id: "02", 
    title: "CYBER MALL 2000", 
    desc: "Platform e-commerce retro-futuristik. Dilengkapi animasi loading dial-up dan integrasi payment gateway.", 
    tags: ["Next.js", "Midtrans", "Tailwind"], 
    color: "from-y2k-yellow to-orange-500" 
  },
  { 
    id: "03", 
    title: "AERO DASHBOARD", 
    desc: "Dashboard analitik interaktif dengan tema Frutiger Aero. Menggunakan chart *real-time* bergaya liquid/air.", 
    tags: ["TypeScript", "Recharts", "Framer"], 
    color: "from-xp-light to-xp-blue" 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto w-full">
      <h2 className="font-orbitron text-5xl font-black chrome-text mb-16 text-center">
        MY WEBRING
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.id} className={`glossy-card bg-gradient-to-b ${p.color} p-8 flex flex-col justify-between transform hover:-translate-y-3 transition-transform duration-300`}>
            <div>
              <h3 className="font-orbitron text-3xl font-black text-white drop-shadow-[0_2px_4px_#000] mb-4 italic">
                {p.title}
              </h3>
              <div className="bg-black/40 p-4 rounded-xl border border-white/30 backdrop-blur-sm mb-6 shadow-inner">
                <p className="font-rajdhani text-white text-lg font-bold">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="bg-white/20 px-2 py-1 text-xs font-bold rounded-md text-white drop-shadow-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <button className="glossy-bubble bg-white text-black px-6 py-3 font-orbitron text-sm font-black w-full hover:bg-y2k-yellow transition-colors shadow-lg">
              VISIT_LINK.HTML
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}