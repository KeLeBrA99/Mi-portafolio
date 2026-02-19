import Button from '../components/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* Texto */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full min-w-0">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(0,212,170,0.07)] border border-[rgba(0,212,170,0.25)] text-[#00d4aa] text-[0.6rem] tracking-widest px-3 py-1.5 rounded-full mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse-dot flex-shrink-0" />
            <span>Disponible para proyectos freelance y empleo</span>
          </div>

          {/* Saludo */}
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-[#546e7a] mb-1 animate-fade-up">
            // Hola, soy
          </p>

          {/* Nombre — tamaño fijo controlado */}
          <h1 className="font-syne font-black leading-[0.9] tracking-tighter animate-fade-up w-full">
            <span className="block text-[clamp(2.5rem,7vw,5rem)]">Jose</span>
            <span className="block text-[clamp(2.5rem,7vw,5rem)] text-outline">Salamanca</span>
          </h1>

          {/* Subtitulo */}
          <p className="font-syne font-bold text-[#546e7a] mt-5 text-[0.85rem] md:text-[1rem] leading-relaxed animate-fade-up">
            Desarrollador Full Stack &nbsp;|&nbsp; Tecnólogo SENA
            <br className="md:hidden" />
            &nbsp;|&nbsp; Ing. Software 7mo sem
            <span className="cursor-blink">_</span>
          </p>

          {/* Frase */}
          <p className="text-[#f7931a] italic text-[0.82rem] mt-3 animate-fade-up leading-relaxed">
            "Transformo problemas operativos en soluciones de software eficientes"
          </p>

          {/* Botones */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 animate-fade-up">
            <Button variant="primary" href="#projects">Ver Proyectos</Button>
            <Button variant="ghost" href="/cv-jose-salamanca.pdf" download>Descargar CV</Button>
          </div>

          {/* Scroll hint desktop */}
          <div className="hidden md:flex items-center gap-3 mt-14 text-[#546e7a] text-[0.7rem] tracking-[0.15em]">
            <span>scroll para explorar</span>
            <span className="w-12 h-px bg-[#1e2d3d]" />
          </div>
        </div>

        {/* Foto — tamaño fijo, no se expande */}
        <div className="flex-shrink-0 flex items-center justify-center animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-[#00d4aa] opacity-30 animate-ping" />
            <div className="absolute -inset-2 rounded-full border border-[#00d4aa] opacity-20" />
            <img
              src="/profile.jpg"
              alt="Jose Salamanca"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#00d4aa] shadow-[0_0_40px_rgba(0,212,170,0.25)] relative z-10"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
            <div style={{display:'none'}} className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#00d4aa] bg-[#111820] items-center justify-center relative z-10">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
