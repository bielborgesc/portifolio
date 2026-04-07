import { usePortfolio } from '../hooks/usePortfolio'
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
  const { projects, ui, lang } = usePortfolio()

  return (
    <section
      id="projetos"
      ref={ref}
      className="fade-up border-t border-line-1 py-12 md:py-20"
      aria-label="Projetos"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-4 mb-8 block">
        {ui.sections.projects}
      </span>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className={[
              'relative flex flex-col p-6 border transition-colors duration-200 group',
              project.featured
                ? 'border-accent/20 bg-accent/[0.025] hover:border-accent/35'
                : 'border-line-2 hover:border-line-4',
            ].join(' ')}
          >
            {project.image && (
              <div className="mb-5 -mx-6 -mt-6 overflow-hidden border-b border-line-1">
                <img
                  src={project.image}
                  alt={`Screenshot ${project.name}`}
                  className="w-full h-44 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            )}

            <div className="flex items-start justify-between mb-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {project.label}
              </span>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="text-fg-6 hover:text-fg transition-colors p-0.5"
                >
                  <ArrowUpRight />
                </a>
              )}
            </div>

            <h3 className="font-sora font-semibold text-fg text-xl mb-3 leading-snug">
              {project.name}
            </h3>

            <p className="text-fg-5 text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 border border-line-3 text-fg-6 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-fg-6 hover:text-fg-2 underline underline-offset-4 decoration-line-4 hover:decoration-fg-5 transition-colors"
                >
                  {lang === 'en' ? 'repository' : 'repositório'}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-fg-6 hover:text-accent underline underline-offset-4 decoration-line-4 hover:decoration-accent/40 transition-colors"
                >
                  {lang === 'en' ? 'live demo' : 'ver ao vivo'}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
