import { experience } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Experience() {
  const ref = useFadeUp()

  return (
    <section
      id="experiencia"
      ref={ref}
      className="fade-up border-t border-[#1a1a1a] py-20"
      aria-label="Experiência profissional"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#444] mb-8 block">
        experiência
      </span>

      <div>
        {experience.map((job, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[180px_1fr] gap-x-10 gap-y-3 py-8 border-b border-[#1a1a1a] last:border-0"
          >
            {/* Left: period + location */}
            <div className="pt-0.5">
              <p className="font-mono text-xs text-[#444] leading-relaxed">{job.period}</p>
              <p className="font-mono text-[10px] text-[#333] mt-1 leading-relaxed">{job.location}</p>
            </div>

            {/* Right: role + bullets */}
            <div>
              <h3 className="font-sora font-semibold text-white text-[1.05rem] leading-snug">
                {job.role}
              </h3>
              <p className="font-mono text-[11px] text-accent mt-1 mb-4">{job.company}</p>

              <ul className="space-y-2.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-sm text-[#555] leading-relaxed">
                    <span className="text-[#2d2d2d] mt-[3px] flex-shrink-0 select-none">—</span>
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
