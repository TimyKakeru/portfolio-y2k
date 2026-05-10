export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto w-full">
      <div className="y2k-window w-full">
        <div className="y2k-titlebar font-orbitron text-sm font-bold">
          <span>Guestbook.exe</span>
          <button className="w-5 h-5 rounded-sm bg-red-500 text-white font-bold flex items-center justify-center text-[10px] shadow-sm shadow-red-800 border border-white">X</button>
        </div>
        
        <div className="p-8 bg-[#ece9d8] m-1 flex flex-col gap-6">
          <h2 className="font-orbitron text-3xl font-black text-xp-blue mb-2 drop-shadow-sm">SIGN MY GUESTBOOK!</h2>
          <p className="font-rajdhani text-black font-bold -mt-4">Punya proyek menarik atau sekadar ingin nostalgia? Tinggalkan pesan di bawah!</p>
          
          <form className="space-y-4 font-rajdhani text-lg font-bold">
            <div className="flex flex-col">
              <label className="text-black mb-1">Your Name:</label>
              <input type="text" className="xp-input w-full" placeholder="John Matrix" />
            </div>
            <div className="flex flex-col">
              <label className="text-black mb-1">Email Address:</label>
              <input type="email" className="xp-input w-full" placeholder="john.matrix@cybernet.com" />
            </div>
            <div className="flex flex-col">
              <label className="text-black mb-1">Message:</label>
              <textarea rows={4} className="xp-input w-full resize-none" placeholder="Wow, website kamu mengingatkanku pada masa kejayaan internet..." />
            </div>
            
            <button type="button" className="mt-4 px-8 py-2 bg-gradient-to-b from-gray-100 to-gray-300 border-2 border-white shadow-[2px_2px_0_#000] active:translate-y-1 active:shadow-none text-black font-orbitron text-sm font-bold">
              SUBMIT DATA
            </button>
          </form>

          <div className="mt-8 border-t-2 border-gray-400 pt-4 flex gap-4 justify-center">
            {["GITHUB", "LINKEDIN", "TWITTER"].map(social => (
              <a key={social} href="#" className="font-orbitron text-xs font-bold text-xp-blue underline hover:text-y2k-pink">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}