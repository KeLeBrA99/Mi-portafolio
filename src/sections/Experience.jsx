import { useRef, useEffect } from 'react'

const items = [
  {
    type: 'work',
    icon: '💼',
    role: 'Auxiliar de Bodega',
    place: 'Lo Basico SAS',
    period: 'Sep 2025 — Actualidad',
    current: true,
    bullets: [
      'Gestion y control de inventarios en tiempo real',
      'Optimizacion de ubicaciones y flujos de mercancia',
      'Experiencia directa con procesos logisticos empresariales',
      'Base real para el desarrollo del sistema SmartBin WMS',
    ],
  },
  {
    type: 'work',
    icon: '🏢',
    role: 'Practicante de Desarrollo',
    place: 'Previsora Seguros',
    period: '2024',
    current: false,
    bullets: [
      'Practicas profesionales SENA en entorno empresarial real',
      'Desarrollo y soporte de soluciones de software',
      'Experiencia en ambiente corporativo del sector asegurador',
    ],
  },
  {
    type: 'edu',
    icon: '🎓',
    role: 'Ingenieria de Software',
    place: 'Politecnico Grancolombiano',
    period: '2025 — Actualidad',
    current: true,
    bullets: [
      'Actualmente en 7mo semestre',
      'Enfoque en desarrollo de software y arquitectura de sistemas',
    ],
  },
  {
    type: 'edu',
    icon: '📜',
    role: 'Tecnologo en Analisis y Desarrollo de Software',
    place: 'SENA',
    period: 'Graduado Sep 2024',
    current: false,
    bullets: [
      'Formacion tecnica en desarrollo de software',
      'Practicas profesionales en Previsora Seguros',
      'Proyectos con React, Python y MySQL',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const work = items.filter(i => i.type === 'work')
  const edu  = items.filter(i => i.type === 'edu')

  return (
    <section id="experience" ref={ref} className="relative z-10 max-w-5xl mx-auto px-8 py-24">

      <p className="reveal section-label">05 — Experiencia</p>
      <h2 className="reveal font-syne font-black text-[clamp(1.8rem,5vw,2.8rem)] leading-tight tracking-tight mb-14">
        Mi <span className="text-outline-sm">trayectoria</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Columna Laboral */}
        <div>
          <p className="reveal text-xs tracking-widest uppercase text-[#00d4aa] mb-6 flex items-center gap-2">
            <span>💼</span> Experiencia Laboral
          </p>
          <div className="flex flex-col gap-6">
            {work.map((item, i) => (
              <div
                key={i}
                className="reveal relative bg-[#0d1117] border border-[#1e2d3d] rounded-xl p-6 hover:border-[#00d4aa] transition-all duration-250"
              >
                {item.current && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.25)] text-[#00d4aa] text-[0.6rem] tracking-widest px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
                    Actual
                  </span>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-syne font-bold text-base text-[#cdd9e5]">{item.role}</h3>
                    <p className="text-[#00d4aa] text-sm">{item.place}</p>
                    <p className="text-[#546e7a] text-xs mt-0.5">{item.period}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-1.5 mt-3 ml-1">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#546e7a]">
                      <span className="text-[#00d4aa] mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Educacion */}
        <div>
          <p className="reveal text-xs tracking-widest uppercase text-[#f7931a] mb-6 flex items-center gap-2">
            <span>🎓</span> Educacion
          </p>
          <div className="flex flex-col gap-6">
            {edu.map((item, i) => (
              <div
                key={i}
                className="reveal relative bg-[#0d1117] border border-[#1e2d3d] rounded-xl p-6 hover:border-[#f7931a] transition-all duration-250"
              >
                {item.current && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-[rgba(247,147,26,0.08)] border border-[rgba(247,147,26,0.25)] text-[#f7931a] text-[0.6rem] tracking-widest px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f7931a] animate-pulse" />
                    En curso
                  </span>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-syne font-bold text-base text-[#cdd9e5]">{item.role}</h3>
                    <p className="text-[#f7931a] text-sm">{item.place}</p>
                    <p className="text-[#546e7a] text-xs mt-0.5">{item.period}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-1.5 mt-3 ml-1">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#546e7a]">
                      <span className="text-[#f7931a] mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
