import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'sobre', href: '#sobre' },
  { label: 'projetos', href: '#projetos' },
  { label: 'experiência', href: '#experiencia' },
  { label: 'contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0d0d0d]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="font-mono text-sm font-medium tracking-tight select-none">
          <span className="text-white">Gabriel</span>
          <span className="text-[#555]">Borges</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-[11px] uppercase tracking-widest text-[#555] hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          className="md:hidden text-[#555] hover:text-white transition-colors p-1"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0d0d0d]">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#555] hover:text-white hover:bg-[#111] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
