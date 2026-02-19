import Button from '../components/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-8 pt-28 gap-16"
    >
      {/* Texto izquierda */}
      <div className="flex-1 flex flex-col">

        {/* Badge disponible */}
        <div className="inline-flex items-center gap-2 w-fit bg-[rgba(0,212,170,0.07)] border border-[rgba(0,212,170,0.25)] text-[#00d4aa] text-[0.7rem] tracking-widest px-4 py-1.5 rounded-full mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse-dot" />
          Disponible para proyectos freelance y empleo
        </div>

        {/* Saludo */}
        <p className="text-[0.85rem] tracking-[0.2em] uppercase text-[#546e7a] mb-2 animate-fade-up">
          // Hola, soy
        </p>

        {/* Nombre */}
        <h1 className="font-syne font-black leading-[0.88] tracking-tighter text-[clamp(3.2rem,8vw,6rem)] animate-fade-up">
          Jose<br />
          <span className="text-outline">Salamanca</span>
        </h1>

        {/* Subtitulo */}
        <p className="font-syne font-bold text-[#546e7a] mt-6 text-[clamp(0.85rem,2vw,1.15rem)] animate-fade-up">
          Desarrollador Full Stack &nbsp;|&nbsp;
          Tecnólogo SENA &nbsp;|&nbsp;
          Ing. Sistemas 7mo sem
          <span className="cursor-blink">_</span>
        </p>

        {/* Frase de impacto */}
        <p className="text-[#f7931a] italic text-[0.9rem] mt-4 animate-fade-up">
          "Transformo problemas operativos en soluciones de software eficientes"
        </p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-10 animate-fade-up">
          <Button variant="primary" href="https://github.com/KeLeBrA99">
            Ver Proyectos
          </Button>
          <Button variant="ghost" href="/assets/cv-jose-salamanca.pdf">
            Descargar CV
          </Button>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-3 mt-16 text-[#546e7a] text-[0.7rem] tracking-[0.15em] animate-fade-up">
          <span>scroll para explorar</span>
          <span className="w-12 h-px bg-[#1e2d3d]" />
        </div>
      </div>

      {/* Foto derecha */}
      <div className="flex-shrink-0 flex items-center justify-center animate-fade-up">
        <div className="relative">
          {/* Anillo exterior animado */}
          <div className="absolute inset-0 rounded-full border-2 border-[#00d4aa] opacity-30 animate-ping" />
          {/* Anillo fijo */}
          <div className="absolute -inset-2 rounded-full border border-[#00d4aa] opacity-20" />
          {/* Foto */}
          <img
            src="/profile.jpg"
            alt="Jose Salamanca"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#00d4aa] shadow-[0_0_40px_rgba(0,212,170,0.25)] relative z-10"
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Placeholder si no hay foto */}
          <div
            style={{ display: 'none' }}
            className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-[#00d4aa] shadow-[0_0_40px_rgba(0,212,170,0.25)] bg-[#111820] items-center justify-center relative z-10"
          >
            <span className="text-7xl">👨‍💻</span>
          </div>
        </div>
      </div>

    </section>
  )
}
