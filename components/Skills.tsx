const skills = [
  "Next.js 14", "React.js", "TypeScript", 
  "Tailwind CSS", "Framer Motion", "Zustand", 
  "Figma", "Node.js", "REST API"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full text-center">
      <h2 className="font-orbitron text-5xl font-black chrome-text mb-12 inline-block">
        TECH_ARSENAL
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <div key={skill} className="glossy-bubble bg-gradient-to-b from-y2k-cyan to-xp-blue px-8 py-3 text-white font-orbitron text-lg font-bold border-2 border-white drop-shadow-lg hover:scale-110 hover:-translate-y-2 transition-all cursor-pointer">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}