"use client";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl glossy-bubble px-6 py-3 flex justify-between items-center bg-xp-blue/40">
      <a href="#" className="font-orbitron font-black text-xl italic drop-shadow-[0_0_8px_#fff]">
        TIMY<span className="text-y2k-light-pink">.</span>WEB
      </a>
      <div className="hidden md:flex gap-6 font-orbitron text-xs font-bold">
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-y2k-yellow transition-colors drop-shadow-md uppercase">
            {link}
          </a>
        ))}
      </div>
      <a href="#contact" className="glossy-bubble bg-xp-green px-4 py-1.5 font-orbitron text-[10px] font-black uppercase text-white hover:scale-105 transition-transform">
        Hire Me
      </a>
    </nav>
  );
}