export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {

  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm tracking-wide cursor-pointer transition-all duration-200 border-none outline-none'

  const primary = 'bg-[#00d4aa] text-[#080c10] font-medium hover:shadow-[0_0_24px_rgba(0,212,170,0.35)] hover:-translate-y-0.5'
  const ghost   = 'bg-transparent text-[#cdd9e5] border border-[#1e2d3d] hover:border-[#00d4aa] hover:text-[#00d4aa] hover:-translate-y-0.5'

  const variantClass = variant === 'primary' ? primary : ghost
  const classes = base + ' ' + variantClass + ' ' + className

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
