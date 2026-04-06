import { projects } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Projects() {
  const ref = useFadeUp()

  return (
    <section
      id="projetos"
      ref={ref}
      className="fade-up border-t border-[#1a1a1a] py-20"
      aria-label="Projetos"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#444] mb-8 block">
        projetos
      </span>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className={[
              'relative flex flex-col p-6 border transition-colors duration-200 group',
              project.featured
                ? 'border-accent/20 bg-accent/[0.025] hover:border-accent/35'
                : 'border-[#1e1e1e] hover:border-[#2a2a2a]',
            ].join(' ')}
          >
            {/* Header row */}
            <div className="flex items-start justify-between mb-5">
              <span
                className={[
                  'font-mono text-[10px] uppercase tracking-widest',
                  project.label === 'em produção' ? 'text-accent' : 'text-[#444]',
                ].join(' ')}
              >
                {project.label}
              </span>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${project.name}`}
                  className="text-[#444] hover:text-white transition-colors p-0.5"
                >
                  <ArrowUpRight />
                </a>
              )}
            </div>

            {/* Title */}
            <h3 className="font-sora font-semibold text-white text-xl mb-3 leading-snug">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-[#555] text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 border border-[#222] text-[#444] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-5">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#444] hover:text-[#888] underline underline-offset-4 decoration-[#2a2a2a] hover:decoration-[#555] transition-colors"
                >
                  repositório
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#444] hover:text-accent underline underline-offset-4 decoration-[#2a2a2a] hover:decoration-accent/40 transition-colors"
                >
                  ver ao vivo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
