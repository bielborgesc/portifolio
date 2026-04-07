import { Link } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Hero() {
  const ref = useFadeUp()
  const { meta, personal, ui } = usePortfolio()

  return (
    <section
      id="hero"
      ref={ref}
      className="fade-up min-h-[92vh] flex flex-col justify-center py-16 md:py-24"
      aria-label="Apresentação"
    >
      {meta.available && (
        <div className="flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
            {ui.available}
          </span>
        </div>
      )}

      <h1
        className="font-sora font-extrabold leading-[0.88] tracking-tight text-fg mb-7"
        style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)' }}
      >
        {ui.hero.role1}
        <br />
        <span className="text-accent">{ui.hero.role2}</span>
      </h1>

      <p className="text-fg-2 text-base md:text-lg max-w-lg leading-relaxed mb-12">
        {personal.tagline}
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
        <a
          href="#projetos"
          className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-xs font-medium uppercase tracking-widest px-6 py-3 hover:bg-accent/80 transition-colors duration-200"
        >
          {ui.hero.cta_projects}
        </a>
        <Link
          to="/curriculo"
          className="inline-flex items-center gap-2 border border-line-5 text-fg-2 font-mono text-xs font-medium uppercase tracking-widest px-6 py-3 hover:border-line-3 hover:text-fg transition-colors duration-200"
        >
          {ui.hero.cta_resume}
        </Link>
      </div>
    </section>
  )
}
