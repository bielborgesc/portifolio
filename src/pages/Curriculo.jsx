import { Link } from 'react-router-dom'
import { personal, stack, experience, education, curriculo } from '../data/portfolio'

function Section({ title, children }) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 border-b border-gray-200 pb-2 mb-4 print:text-gray-500">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sora">
      {/* Print toolbar — hidden on print */}
      <div className="no-print sticky top-0 z-10 bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="font-mono text-xs text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 10L4 6L8 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Voltar
          </Link>
          <span className="font-mono text-xs text-gray-300">|</span>
          <span className="font-mono text-xs text-gray-500">
            {personal.name} — Currículo
          </span>
        </div>

        <button
          onClick={() => window.print()}
          className="font-mono text-xs font-medium bg-gray-900 text-white px-4 py-2 hover:bg-gray-700 transition-colors"
        >
          Baixar currículo
        </button>
      </div>

      {/* Resume content */}
      <main className="max-w-[740px] mx-auto px-8 py-12 print:py-0 print:px-0">

        {/* ── Header ── */}
        <header className="mb-10 print:mb-8">
          <h1 className="font-sora font-bold text-3xl text-gray-900 tracking-tight">
            {personal.name}
          </h1>
          <p className="text-base text-gray-500 mt-1 font-medium">{personal.role}</p>
          <p className="font-mono text-xs text-gray-400 mt-1">{personal.location}</p>

          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4">
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-xs text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
            >
              {personal.email}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
            >
              linkedin.com/in/bielborgesc
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
            >
              github.com/bielborgesc
            </a>
          </div>
        </header>

        {/* ── Sobre ── */}
        <Section title="Sobre">
          <p className="text-sm text-gray-600 leading-relaxed">
            {curriculo.about}
          </p>
        </Section>

        {/* ── Habilidades técnicas ── */}
        <Section title="Habilidades Técnicas">
          <div className="space-y-2">
            {curriculo.technicalSkills.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-mono text-[11px] text-gray-400 font-medium pt-px">{label}</span>
                <span className="text-sm text-gray-700 leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Experiência ── */}
        <Section title="Experiência Profissional">
          <div className="space-y-0">
            {experience.map((job, i) => (
              <div key={i} className="pb-6 mb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0 print:pb-4 print:mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-0.5">
                  <h3 className="font-sora font-semibold text-gray-900 text-[0.95rem]">
                    {job.role}
                  </h3>
                  <span className="font-mono text-[10px] text-gray-400 flex-shrink-0">{job.period}</span>
                </div>
                <p className="font-mono text-[11px] text-gray-500 mb-3">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-gray-300 mt-[3px] flex-shrink-0">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Formação ── */}
        <Section title="Formação Acadêmica">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="font-sora font-semibold text-gray-900 text-[0.95rem]">
                {education.degree}
              </h3>
              <p className="font-mono text-[11px] text-gray-500 mt-0.5">
                {education.institution}
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="font-mono text-[10px] text-gray-400">{education.period}</span>
              <br />
              <span className="font-mono text-[10px] text-green-600">{education.status}</span>
            </div>
          </div>
        </Section>

        {/* ── Idiomas ── */}
        <Section title="Idiomas">
          <p className="text-sm text-gray-600">{curriculo.languages}</p>
        </Section>

        {/* ── Projetos ── */}
        <Section title="Projetos">
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-sora font-semibold text-gray-900 text-[0.95rem]">Piggino</h3>
                <a
                  href="https://piggino.duckdns.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-gray-400 hover:text-gray-700 transition-colors underline underline-offset-2"
                >
                  piggino.duckdns.org
                </a>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-1">
                Sistema full-stack de controle financeiro pessoal com CI/CD, Docker e deploy automático na Digital Ocean.
              </p>
              <p className="font-mono text-[10px] text-gray-400 mt-1.5">
                ASP.NET 8 · React 19 · TypeScript · Docker · GitHub Actions
              </p>
            </div>
          </div>
        </Section>

        {/* Print footer */}
        <p className="hidden print:block font-mono text-[9px] text-gray-300 text-center mt-8 pt-4 border-t border-gray-100">
          {personal.email} · {personal.location}
        </p>
      </main>
    </div>
  )
}
