import { personal } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

const contactLinks = [
  {
    label: (p) => p.email,
    href: (p) => `mailto:${p.email}`,
  },
  {
    label: () => 'LinkedIn',
    href: (p) => p.linkedin,
    external: true,
  },
  {
    label: () => 'GitHub',
    href: (p) => p.github,
    external: true,
  },
]

export default function Contact() {
  const ref = useFadeUp()

  return (
    <section
      id="contato"
      ref={ref}
      className="fade-up border-t border-[#1a1a1a] py-20"
      aria-label="Contato"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#444] mb-8 block">
        contato
      </span>

      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {contactLinks.map(({ label, href, external }) => (
          <a
            key={label(personal)}
            href={href(personal)}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="font-mono text-sm text-[#555] underline underline-offset-4 decoration-[#2a2a2a] hover:text-accent hover:decoration-accent/40 transition-colors duration-200"
          >
            {label(personal)}
          </a>
        ))}
      </div>
    </section>
  )
}
