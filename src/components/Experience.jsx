import { usePortfolio } from '../hooks/usePortfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Experience() {
  const ref = useFadeUp()
  const { experience, ui } = usePortfolio()

  return (
    <section
      id="experiencia"
      ref={ref}
      className="fade-up border-t border-line-1 py-12 md:py-20"
      aria-label="Experiência profissional"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-4 mb-8 block">
        {ui.sections.experience}
      </span>

      <div className="divide-y divide-line-1">
        {experience.map((job, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[180px_1fr] gap-x-10 gap-y-3 py-8"
          >
            <div className="pt-0.5">
              <p className="font-mono text-xs text-fg-3 leading-relaxed">{job.period}</p>
              <p className="font-mono text-[11px] text-fg-5 mt-1 leading-relaxed">{job.location}</p>
            </div>

            <div>
              <h3 className="font-sora font-semibold text-fg text-[1.05rem] leading-snug">
                {job.role}
              </h3>
              <p className="font-mono text-[11px] text-accent mt-1 mb-4">{job.company}</p>

              <ul className="space-y-2.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-sm text-fg-2 leading-relaxed">
                    <span className="text-fg-5 mt-[3px] flex-shrink-0 select-none">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
