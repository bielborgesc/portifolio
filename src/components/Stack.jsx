import { stack } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Stack() {
  const ref = useFadeUp()

  return (
    <section
      id="sobre"
      ref={ref}
      className="fade-up border-t border-[#1a1a1a] py-20"
      aria-label="Stack principal"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#444] mb-8 block">
        stack principal
      </span>

      <div className="flex flex-wrap gap-2">
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
            className="font-mono text-xs px-3 py-1.5 border border-[#222] text-[#555] hover:border-[#3a3a3a] hover:text-[#777] transition-colors duration-150 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
