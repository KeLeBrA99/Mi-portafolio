import Button from '../components/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-12"
    >
      {/* Foto — arriba en mobile, derecha en desktop */}
      <div className="flex justify-center mb-8 md:hidden">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-2 border-[#00d4aa] opacity-30 animate-ping" />
          <img
            src="/profile.jpg"
            alt="Jose Salamanca"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#00d4aa] shadow-[0_0_30px_rgba(0,212,170,0.3)] relative z-10"
            onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
          />
          <div style={{display:'none'}} className="w-32 h-32 rounded-full border-4 border-[#00d4aa] bg-[#111820] items-center justify-center relative z-10">
            <span className="text-5xl">👨‍💻</span>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-16">

        {/* Texto */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(0,212,170,0.07)] border border-[rgba(0,212,170,0.25)] text-[#00d4aa] text-[0.6rem] tracking-widest px-3 py-1.5 rounded-full mb-5 animate-fade-up max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse-dot flex-shrink-0" />
            <span className="truncate">Disponible para proyectos freelance y empleo</span>
          </div>

          {/* Saludo */}
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-[#546e7a] mb-1 animate-fade-up">
            // Hola, soy
          </p>

          {/* Nombre — tamaño controlado en mobile */}
          <h1 className="font-syne font-black leading-[0.9] tracking-tighter animate-fade-up w-full">
            <span className="block text-[clamp(2.4rem,11vw,6rem)]">Jose</span>
            <span className="block text-[clamp(2.4rem,11vw,6rem)] text-outline">Salamanca</span>
          </h1>

          {/* Subtitulo */}
          <p className="font-syne font-bold text-[#546e7a] mt-4 text-[0.8rem] md:text-[1rem] leading-relaxed animate-fade-up">
            Desarrollador Full Stack
            <span className="hidden md:inline"> &nbsp;|&nbsp; Tecnólogo SENA &nbsp;|&nbsp; Ing. Sistemas 7mo sem</span>
            <span className="md:hidden"><br />Tecnólogo SENA · Ing. Sistemas 7mo sem</span>
            <span className="cursor-blink">_</span>
          </p>

          {/* Frase */}
          <p className="text-[#f7931a] italic text-[0.8rem] mt-3 animate-fade-up leading-relaxed">
            "Transformo problemas operativos en soluciones de software eficientes"
          </p>

          {/* Botones */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7 animate-fade-up w-full">
            <Button variant="primary" href="#projects">
              Ver Proyectos
            </Button>
            <Button variant="ghost" href="/cv-jose-salamanca.pdf" download>
              Descargar CV
            </Button>
          </div>

          {/* Scroll hint — solo desktop */}
          <div className="hidden md:flex items-center gap-3 mt-14 text-[#546e7a] text-[0.7rem] tracking-[0.15em] animate-fade-up">
            <span>scroll para explorar</span>
            <span className="w-12 h-px bg-[#1e2d3d]" />
          </div>
        </div>

        {/* Foto — solo desktop */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-[#00d4aa] opacity-30 animate-ping" />
            <div className="absolute -inset-2 rounded-full border border-[#00d4aa] opacity-20" />
            <img
              src="/profile.jpg"
              alt="Jose Salamanca"
              className="w-64 h-64 rounded-full object-cover border-4 border-[#00d4aa] shadow-[0_0_40px_rgba(0,212,170,0.25)] relative z-10"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
            <div style={{display:'none'}} className="w-64 h-64 rounded-full border-4 border-[#00d4aa] bg-[#111820] items-center justify-center relative z-10">
              <span className="text-7xl">👨‍💻</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
