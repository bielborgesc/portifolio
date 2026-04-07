import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'
import { useTheme } from '../context/ThemeContext'

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { ui, lang, setLang } = usePortfolio()
  const { theme, toggleTheme } = useTheme()

  const links = [
    { label: ui.nav.about, href: '#sobre' },
    { label: ui.nav.projects, href: '#projetos' },
    { label: ui.nav.experience, href: '#experiencia' },
    { label: ui.nav.education, href: '#formacao' },
    { label: ui.nav.contact, href: '#contato' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line-1 bg-bg/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="font-mono text-sm font-medium tracking-tight select-none">
          <span className="text-fg">Gabriel</span>
          <span className="text-accent"> Borges</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-mono text-[11px] uppercase tracking-widest text-fg-5 hover:text-fg transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Language toggle */}
          <div className="flex items-center gap-1 font-mono text-[11px] tracking-widest">
            <button
              onClick={() => setLang('pt')}
              className={`px-1.5 py-0.5 transition-colors duration-200 ${lang === 'pt' ? 'text-fg' : 'text-fg-6 hover:text-fg-4'}`}
            >
              PT
            </button>
            <span className="text-line-4">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 transition-colors duration-200 ${lang === 'en' ? 'text-fg' : 'text-fg-6 hover:text-fg-4'}`}
            >
              EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="text-fg-5 hover:text-fg transition-colors duration-200 p-1"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            className="md:hidden text-fg-5 hover:text-fg transition-colors p-1"
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
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line-1 bg-bg">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-mono text-xs uppercase tracking-widest text-fg-5 hover:text-fg hover:bg-surface transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
