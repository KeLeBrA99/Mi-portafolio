import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_uvavp6g'
const TEMPLATE_ID = 'template_1so8uyk'
const PUBLIC_KEY  = 'jhPZjsVEX2SQ4AQJM'

const contactItems = [
  { icon: '\u2709',       label: 't4hkelebra1@gmail.com',       href: 'mailto:t4hkelebra1@gmail.com' },
  { icon: '\uD83D\uDCF1', label: '+57 310 203 4907',             href: 'https://wa.me/573102034907' },
  { icon: '\u2325',       label: 'github.com/KeLeBrA99',         href: 'https://github.com/KeLeBrA99' },
  { icon: '\uD83D\uDD17', label: 'linkedin.com/in/tu-perfil',    href: 'https://linkedin.com' },
  { icon: '\uD83D\uDCCD', label: 'Colombia - Disponible remoto', href: null },
]

const INPUT = 'w-full bg-[#111820] border border-[#1e2d3d] rounded-lg text-[#cdd9e5] font-mono text-sm px-4 py-3 outline-none focus:border-[#00d4aa] transition-colors'
const LABEL = 'block text-xs tracking-widest uppercase text-[#546e7a] mb-1.5'

export default function Contact() {
  const ref     = useRef(null)
  const formRef = useRef(null)
  const [status,  setStatus]  = useState('')
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)

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

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setStatus('')
    const name    = formRef.current.from_name.value.trim()
    const email   = formRef.current.from_email.value.trim()
    const message = formRef.current.message.value.trim()
    if (!name || !email || !message) { setError('Completa los campos requeridos'); return }
    if (!/\S+@\S+\.\S+/.test(email))  { setError('El correo no es valido'); return }
    setLoading(true)
    setStatus('Enviando...')
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => { setLoading(false); setStatus('Mensaje enviado. Te respondere pronto.'); formRef.current.reset() })
      .catch(() => { setLoading(false); setStatus(''); setError('Error al enviar. Intentalo de nuevo.') })
  }

  return (
    <section id="contact" ref={ref} className="relative z-10 bg-[#0d1117] border-t border-[#1e2d3d]">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <p className="reveal section-label">04 Contacto</p>
        <h2 className="reveal font-syne font-black leading-tight tracking-tight mb-4 text-[clamp(1.8rem,6vw,2.8rem)]">
          Construyamos algo juntos
        </h2>
        <p className="reveal text-sm text-[#546e7a] leading-relaxed mb-10 max-w-lg">
          Tienes un proyecto en mente o buscas un desarrollador con experiencia
          real en sistemas empresariales. Escribeme, respondo rapido.
        </p>

        {/* Grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Links de contacto */}
          <div className="reveal flex flex-col gap-3">
            {contactItems.map(item => {
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-[#111820] border border-[#1e2d3d] rounded-lg text-sm text-[#546e7a] hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all duration-200"
                  >
                    <span className="w-5 text-center flex-shrink-0">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </a>
                )
              }
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 bg-[#111820] border border-[#1e2d3d] rounded-lg text-sm text-[#00d4aa]"
                >
                  <span className="w-5 text-center flex-shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>

          {/* Formulario */}
          <div className="reveal">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-[#0d1117] border border-[#1e2d3d] rounded-xl p-6"
            >
              <p className="font-syne font-bold text-[#00d4aa] mb-5 text-sm">
                Enviame un mensaje
              </p>

              <div className="mb-4">
                <label className={LABEL}>Nombre</label>
                <input type="text" name="from_name" placeholder="Tu nombre" className={INPUT} />
              </div>
              <div className="mb-4">
                <label className={LABEL}>Correo</label>
                <input type="email" name="from_email" placeholder="tu@correo.com" className={INPUT} />
              </div>
              <div className="mb-4">
                <label className={LABEL}>Asunto</label>
                <input type="text" name="subject" placeholder="De que se trata" className={INPUT} />
              </div>
              <div className="mb-5">
                <label className={LABEL}>Mensaje</label>
                <textarea name="message" placeholder="Cuentame sobre tu proyecto" rows={4} className={INPUT + ' resize-none'} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00d4aa] text-[#080c10] font-mono font-medium text-sm py-3 rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {error  && <p className="text-xs text-red-400 mt-3">{error}</p>}
              {status && !error && <p className="text-xs text-[#00d4aa] mt-3">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/573102034907"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25d366] rounded-full flex items-center justify-center text-xl md:text-2xl shadow-lg hover:scale-110 transition-all duration-200 animate-float"
      >
        💬
      </a>
    </section>
  )
}
