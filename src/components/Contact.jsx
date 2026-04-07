import { usePortfolio } from '../hooks/usePortfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Contact() {
  const ref = useFadeUp()
  const { meta, ui } = usePortfolio()

  const contactLinks = [
    { label: meta.email, href: `mailto:${meta.email}` },
    { label: 'LinkedIn', href: meta.linkedin, external: true },
    { label: 'GitHub', href: meta.github, external: true },
  ]

  return (
    <section
      id="contato"
      ref={ref}
      className="fade-up border-t border-line-1 py-12 md:py-20"
      aria-label="Contato"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-4 mb-8 block">
        {ui.sections.contact}
      </span>

      <h2 className="font-sora font-extrabold text-fg leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        {ui.contact.heading}
      </h2>

      <p className="text-fg-2 text-base max-w-lg leading-relaxed mb-10">
        {ui.contact.body}
      </p>

      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {contactLinks.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="font-mono text-sm text-fg-5 underline underline-offset-4 decoration-line-4 hover:text-accent hover:decoration-accent/40 transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
