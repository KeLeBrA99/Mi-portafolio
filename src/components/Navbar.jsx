import { useState, useEffect } from 'react'

const links = [
  { label: 'Sobre mi',  href: '#about'    },
  { label: 'Skills',    href: '#skills'   },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto',  href: '#contact'  },
]

export default function Navbar({ dark, toggleTheme }) {
  const [active,   setActive]   = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navBg = scrolled
    ? 'bg-[rgba(8,12,16,0.95)]'
    : 'bg-[rgba(8,12,16,0.80)]'

  return (
    <nav className={'fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 border-b border-[#1e2d3d] backdrop-blur-xl transition-all duration-300 ' + navBg}>

      {/* Logo */}
      <span className="font-syne font-black text-[#00d4aa] tracking-wider text-base">
        JS
      </span>

      {/* Links desktop */}
      <ul className="hidden md:flex gap-8 items-center list-none">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={'text-[0.7rem] tracking-widest uppercase transition-colors duration-200 ' + (active === link.href.slice(1) ? 'text-[#00d4aa]' : 'text-[#546e7a] hover:text-[#00d4aa]')}
            >
              {link.label}
            </a>
          </li>
        ))}

        {/* Boton tema */}
        <li>
          <button
            onClick={toggleTheme}
            className="bg-[#111820] border border-[#1e2d3d] text-[#cdd9e5] px-3 py-1.5 rounded-md font-mono text-xs hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all duration-200"
          >
            {dark ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </li>
      </ul>

      {/* Hamburger mobile */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menu"
      >
        <span className={'block w-6 h-0.5 bg-[#cdd9e5] rounded transition-transform duration-300 ' + (menuOpen ? 'rotate-45 translate-y-2' : '')} />
        <span className={'block w-6 h-0.5 bg-[#cdd9e5] rounded transition-opacity duration-300 ' + (menuOpen ? 'opacity-0' : '')} />
        <span className={'block w-6 h-0.5 bg-[#cdd9e5] rounded transition-transform duration-300 ' + (menuOpen ? '-rotate-45 -translate-y-2' : '')} />
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-[#080c10] flex flex-col gap-6 p-8 border-t border-[#1e2d3d]">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#546e7a] hover:text-[#00d4aa] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { toggleTheme(); setMenuOpen(false) }}
            className="text-left text-sm text-[#546e7a] hover:text-[#00d4aa] transition-colors"
          >
            {dark ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>
      )}
    </nav>
  )
}
