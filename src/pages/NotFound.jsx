import { Link } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'

export default function NotFound() {
  const { ui } = usePortfolio()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-6 mb-6 block">
        404
      </span>
      <h1 className="font-sora font-extrabold text-fg leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        {ui.notFound.title}
      </h1>
      <p className="text-fg-2 text-base leading-relaxed mb-10">
        {ui.notFound.body}
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-xs font-medium uppercase tracking-widest px-6 py-3 hover:bg-accent/80 transition-colors duration-200"
      >
        {ui.notFound.cta}
      </Link>
    </div>
  )
}
