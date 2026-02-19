import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import Button from '../components/Button'

export default function Projects() {
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

  const featured  = projects.find(p => p.featured)
  const rest      = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={ref} className="relative z-10 max-w-5xl mx-auto px-8 py-24">

      <p className="reveal section-label"> Proyectos</p>
      <h2 className="reveal font-syne font-black text-[clamp(1.8rem,5vw,2.8rem)] leading-tight tracking-tight mb-14">
        Lo que he <span className="text-outline-sm">construido</span>
      </h2>

      {/* ── Tarjeta destacada ── */}
      {featured && (
        <div className="
          reveal mb-6
          bg-dark2 border border-[#1e2d3d] rounded-xl overflow-hidden
          grid md:grid-cols-2
          hover:border-accent hover:shadow-[0_0_24px_rgba(0,212,170,0.18)]
          transition-all duration-250
        ">
          {/* Imagen / emoji */}
          <div className="
            relative flex items-center justify-center
            bg-surface text-[5rem] min-h-[200px]
            overflow-hidden
          ">
            <span className="opacity-10 absolute text-[8rem]">{featured.emoji}</span>
            <span className="relative z-10">{featured.emoji}</span>
          </div>

          {/* Contenido */}
          <div className="p-7 flex flex-col">
            {featured.badge && (
              <span className="
                inline-flex items-center gap-1.5 w-fit mb-3
                bg-[rgba(247,147,26,0.1)] border border-[rgba(247,147,26,0.3)]
                text-accent2 text-[0.65rem] px-3 py-1 rounded-full
              ">
                {featured.badge}
              </span>
            )}

            <div className="flex flex-wrap gap-1.5 mb-3">
              {featured.tags.map(tag => (
                <span
                  key={tag}
                  className={`
                    text-[0.65rem] px-2 py-0.5 rounded border
                    ${featured.tagAccent.includes(tag)
                      ? 'bg-[rgba(247,147,26,0.07)] border-[rgba(247,147,26,0.2)] text-accent2'
                      : 'bg-[rgba(0,212,170,0.07)] border-[rgba(0,212,170,0.18)] text-accent'}
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-syne font-black text-xl tracking-tight mb-2">{featured.name}</h3>
            <p className="text-[0.82rem] text-muted leading-[1.8] flex-1">{featured.description}</p>

            {featured.bullets.length > 0 && (
              <ul className="text-[0.78rem] text-muted mt-4 ml-4 space-y-1 list-none">
                {featured.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            )}

            <div className="flex gap-3 mt-5 flex-wrap">
              {featured.links.demo && (
                <Button variant="primary" href={featured.links.demo}>▸ Ver Demo</Button>
              )}
              {featured.links.code && (
                <Button variant="ghost" href={featured.links.code}>⌥ Ver Código</Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Grid de proyectos normales ── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map(p => (
          <div
            key={p.id}
            className="
              reveal
              bg-dark2 border border-[#1e2d3d] rounded-xl overflow-hidden
              flex flex-col
              hover:border-accent hover:-translate-y-1.5
              hover:shadow-[0_0_24px_rgba(0,212,170,0.18)]
              transition-all duration-250
            "
          >
            {/* Emoji header */}
            <div className="relative flex items-center justify-center h-40 bg-surface overflow-hidden">
              <span className="opacity-10 absolute text-[6rem]">{p.emoji}</span>
              <span className="relative z-10 text-[3rem]">{p.emoji}</span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-[rgba(0,212,170,0.07)] border border-[rgba(0,212,170,0.18)] text-accent text-[0.65rem] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-syne font-black text-lg tracking-tight mb-1">{p.name}</h3>
              <p className="text-[0.82rem] text-muted leading-[1.8] flex-1">{p.description}</p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {p.links.demo && (
                  <Button variant="primary" href={p.links.demo}>▸ Demo</Button>
                )}
                {p.links.code && (
                  <Button variant="ghost" href={p.links.code}>⌥ Código</Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}