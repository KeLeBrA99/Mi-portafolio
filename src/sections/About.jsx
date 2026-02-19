import { useEffect, useRef } from 'react'

const stats = [
  { num: '7°',   label: 'Semestre Ingeniería' },
  { num: '1+',   label: 'Años desarrollando'  },
  { num: '100%', label: 'Proyectos entregados' },
  { num: '∞',    label: 'Ganas de aprender'   },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative z-10 max-w-5xl mx-auto px-8 py-24">

      <p className="reveal section-label">01 — Sobre mí</p>
      <h2 className="reveal font-syne font-black text-[clamp(1.8rem,5vw,2.8rem)] leading-tight tracking-tight mb-14">
        El dev que conoce<br />
        el <span className="text-outline-sm">terreno real</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Texto + stats */}
        <div>
          <div className="reveal space-y-5 text-[0.9rem] text-muted leading-[1.9]">
            <p>
              Soy <strong className="text-[#cdd9e5]">Tecnólogo en Análisis y Desarrollo de Sistemas</strong> del SENA,
              actualmente en{' '}
              <strong className="text-accent">7mo semestre de Ingeniería de Sistemas</strong>.
              Construyo software con React, Python y MySQL.
            </p>
            <p>
              Lo que me diferencia: no soy solo un dev que escribe código en pantalla.
              Trabajé en operaciones reales de bodega — inventarios, flujos, pérdidas —
              y eso me dio una perspectiva que muy pocos desarrolladores tienen.
            </p>
            <p>
              Gracias a esa experiencia,{' '}
              <strong className="text-accent">entiendo el dolor del usuario final</strong>.
              No solo programo; creo herramientas que{' '}
              <strong className="text-[#cdd9e5]">funcionan en el mundo real</strong>{' '}
              porque yo mismo he vivido los problemas que resuelven.
            </p>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-2 gap-4 mt-8">
            {stats.map(s => (
              <div
                key={s.label}
                className="
                  bg-surface border border-[#1e2d3d] rounded-xl p-5
                  hover:border-accent transition-colors duration-200
                "
              >
                <div className="font-syne font-black text-3xl text-accent leading-none">{s.num}</div>
                <div className="text-[0.7rem] text-muted tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div className="reveal">
          <div className="bg-dark2 border border-[#1e2d3d] rounded-xl overflow-hidden font-mono text-[0.78rem]">

            {/* Barra de título */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-surface border-b border-[#1e2d3d]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="text-muted text-[0.7rem] ml-2">jose@portfolio:~$</span>
            </div>

            {/* Contenido */}
            <div className="p-5 leading-[2] text-[#cdd9e5]">
              <div><span className="text-accent">$ cat</span> <span className="text-accent2">perfil.json</span></div>
              <div>&nbsp;</div>
              <div>{'{'}</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"nombre"</span>: <span className="text-accent2">"Jose Salamanca"</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"rol"</span>: <span className="text-accent2">"Full Stack Developer"</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"educacion"</span>: [</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent2">"Tecnólogo SENA"</span>,</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent2">"Ing. Sistemas (7°)"</span></div>
              <div>&nbsp;&nbsp;],</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"stack"</span>: <span className="text-accent2">"React + Python + MySQL"</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"superpoder"</span>: <span className="text-accent2">"Logística → Código"</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"email"</span>: <span className="text-accent2">"t4hkelebra1@gmail.com"</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"disponible"</span>: <span className="text-accent">true</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#79b8ff]">"ubicacion"</span>: <span className="text-accent2">"Colombia 🇨🇴"</span></div>
              <div>{'}'}</div>
              <div>&nbsp;</div>
              <div className="text-muted italic"># Listo para el siguiente reto_<span className="cursor-blink">█</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}