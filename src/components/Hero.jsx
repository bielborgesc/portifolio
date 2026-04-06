import { Link } from 'react-router-dom'
import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[92vh] flex flex-col justify-center py-24"
      aria-label="Apresentação"
    >
      {/* Availability badge */}
      {personal.available && (
        <div className="flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
            disponível para oportunidades
          </span>
        </div>
      )}

      {/* Headline */}
      <h1
        className="font-sora font-extrabold leading-[0.88] tracking-tight text-white mb-7"
        style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)' }}
      >
        Desenvolvedor
        <br />
        <span className="text-[#3a3a3a]">Back-end</span>
      </h1>

      {/* Tagline */}
      <p className="text-[#555] text-base md:text-lg max-w-lg leading-relaxed mb-12">
        {personal.tagline}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#projetos"
          className="inline-flex items-center gap-2 bg-white text-[#0d0d0d] font-mono text-xs font-medium uppercase tracking-widest px-6 py-3 hover:bg-accent transition-colors duration-200"
        >
          Ver projetos
        </a>
        <Link
          to="/curriculo"
          className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#666] font-mono text-xs font-medium uppercase tracking-widest px-6 py-3 hover:border-[#555] hover:text-[#aaa] transition-colors duration-200"
        >
          Baixar currículo
        </Link>
      </div>
    </section>
  )
}
