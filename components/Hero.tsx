"use client";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
      {/* Decorative Floating Bubbles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 glossy-bubble bg-y2k-pink/50 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 glossy-bubble bg-y2k-cyan/40 animate-bounce" />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 glossy-bubble bg-y2k-yellow/60 animate-[float_4s_ease-in-out_infinite]" />

      <div className="glossy-bubble px-6 py-2 bg-xp-green/80 mb-6 relative z-10">
        <span className="font-orbitron text-sm font-black text-white drop-shadow-[0_2px_2px_#000]">
          STATUS: SURFING THE CYBERSPACE 🏄‍♂️
        </span>
      </div>

      <h1 className="font-orbitron text-6xl md:text-[8rem] font-black uppercase italic tracking-tighter chrome-text mb-6 relative z-10">
        TIMY KAKERU
      </h1>
      
      <p className="font-orbitron text-xl md:text-3xl font-bold text-white drop-shadow-[0_0_10px_#EB329A] glitch-hover relative z-10">
        GAMEDEV SURFER // PIXEL ENTHUSIAST
      </p>

      <div className="mt-12 flex gap-4 relative z-10">
        <a href="#projects" className="glossy-bubble bg-gradient-to-b from-xp-light to-xp-blue px-10 py-4 font-orbitron text-sm font-black text-white hover:scale-110 transition-transform shadow-xl">
          ENTER_PORTFOLIO.EXE
        </a>
      </div>
    </section>
  );
}