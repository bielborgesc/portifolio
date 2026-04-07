import { usePortfolio } from '../hooks/usePortfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Education() {
  const ref = useFadeUp()
  const { education, ui } = usePortfolio()

  return (
    <section
      id="formacao"
      ref={ref}
      className="fade-up border-t border-line-1 py-12 md:py-20"
      aria-label="Formação acadêmica"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-4 mb-8 block">
        {ui.sections.education}
      </span>

      <div className="grid md:grid-cols-[180px_1fr] gap-x-10 gap-y-3">
        <div className="pt-0.5">
          <p className="font-mono text-xs text-fg-3 leading-relaxed">{education.period}</p>
          <p className="font-mono text-[11px] text-accent mt-1">{education.status}</p>
        </div>
        <div>
          <h3 className="font-sora font-semibold text-fg text-[1.05rem] leading-snug">
            {education.degree}
          </h3>
          <p className="font-mono text-[11px] text-accent mt-1">{education.institution}</p>
        </div>
      </div>
    </section>
  )
}
