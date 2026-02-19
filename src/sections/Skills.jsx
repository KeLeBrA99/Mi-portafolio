import { useEffect, useRef } from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          // Animar barras de progreso
          e.target.querySelectorAll('[data-width]').forEach(bar => {
            bar.style.width = bar.dataset.width + '%'
          })
        }
      }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="relative z-10 bg-dark2 border-y border-[#1e2d3d]">
      <div className="max-w-5xl mx-auto px-8 py-24">

        <p className="reveal section-label"> Habilidades</p>
        <h2 className="reveal font-syne font-black text-[clamp(1.8rem,5vw,2.8rem)] leading-tight tracking-tight mb-14">
          Mi <span className="text-outline-sm">tech stack</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(cat => (
            <div
              key={cat.id}
              className="
                reveal
                bg-dark2 border border-[#1e2d3d] rounded-xl p-6
                hover:border-accent hover:-translate-y-1
                transition-all duration-250
              "
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-syne font-bold text-[0.85rem] uppercase tracking-wider text-accent">
                  {cat.category}
                </span>
              </div>

              {/* Barras */}
              <div className="flex flex-col gap-3">
                {cat.items.map(item => (
                  <div key={item.name} className="flex flex-col gap-1">
                    <div className="flex justify-between text-[0.75rem]">
                      <span className="text-[#cdd9e5]">{item.name}</span>
                      <span className="text-muted">{item.pct}%</span>
                    </div>
                    <div className="h-[3px] bg-[#1e2d3d] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(.4,0,.2,1)]"
                        style={{ width: 0 }}
                        data-width={item.pct}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {cat.badges.map(b => (
                  <span
                    key={b}
                    className="
                      bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.2)]
                      text-accent text-[0.65rem] px-2 py-0.5 rounded
                    "
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}