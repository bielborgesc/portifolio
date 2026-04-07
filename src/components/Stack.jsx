import { usePortfolio } from '../hooks/usePortfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Stack() {
  const ref = useFadeUp()
  const { personal, stack, curriculo, ui } = usePortfolio()

  return (
    <section
      id="sobre"
      ref={ref}
      className="fade-up border-t border-line-1 py-12 md:py-20"
      aria-label="Sobre"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-4 mb-8 block">
        {ui.sections.about}
      </span>

      <div className="max-w-2xl mb-12">
        {personal.about.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-fg-2 text-base leading-relaxed mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-4 mb-6 block">
        {ui.sections.stack}
      </span>

      <div className="flex flex-wrap gap-2 mb-12">
        {stack.primary.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-3 py-1.5 border border-accent/25 bg-accent/[0.04] text-accent tracking-wide"
          >
            {tech}
          </span>
        ))}
        {stack.secondary.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-3 py-1.5 border border-line-3 text-fg-5 hover:border-line-4 hover:text-fg-3 transition-colors duration-150 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-4 mb-4 block">
        {ui.sections.languages}
      </span>
      <p className="font-mono text-sm text-fg-2">{curriculo.languages}</p>
    </section>
  )
}
