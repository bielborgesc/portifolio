import { Link } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'
import { useTheme } from '../context/ThemeContext'

function Section({ title, children }) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent border-b border-line-1 pb-2 mb-4">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function Curriculo() {
  const { meta, personal, experience, education, curriculo, projects, ui } = usePortfolio()
  const { theme, toggleTheme } = useTheme()
  const t = ui.curriculo

  return (
    <div className="min-h-screen bg-bg text-fg font-sora print:bg-white print:text-gray-900">
      {/* Toolbar */}
      <div className="no-print sticky top-0 z-10 border-b border-line-1 bg-bg/95 backdrop-blur-md px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="font-mono text-xs text-fg-5 hover:text-fg transition-colors flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 10L4 6L8 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.back}
          </Link>
          <span className="font-mono text-xs text-line-3">|</span>
          <span className="font-mono text-xs text-fg-4">
            {meta.name} — {t.title}
          </span>
        </div>

        <a
          href={t.pdfUrl}
          download
          className="font-mono text-xs font-medium bg-accent text-bg px-4 py-2 hover:bg-accent/80 transition-colors"
        >
          {t.download}
        </a>
      </div>

      {/* Resume content */}
      <main className="max-w-[740px] mx-auto px-6 sm:px-8 py-12 print:py-0 print:px-0">

        {/* Header */}
        <header className="mb-10 print:mb-8">
          <h1 className="font-sora font-bold text-3xl text-fg tracking-tight">
            {meta.name}
          </h1>
          <p className="text-base text-fg-4 mt-1 font-medium">{personal.subtitle}</p>
          <p className="font-mono text-xs text-fg-5 mt-1">{meta.location}</p>

          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4">
            <a href={`tel:${meta.phone}`} className="font-mono text-xs text-fg-4 hover:text-fg transition-colors">
              {meta.phone}
            </a>
            <a href={`mailto:${meta.email}`} className="font-mono text-xs text-fg-4 hover:text-fg transition-colors underline underline-offset-2 decoration-line-3">
              {meta.email}
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-fg-4 hover:text-fg transition-colors underline underline-offset-2 decoration-line-3">
              linkedin.com/in/bielborgesc
            </a>
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-fg-4 hover:text-fg transition-colors underline underline-offset-2 decoration-line-3">
              github.com/bielborgesc
            </a>
          </div>
        </header>

        {/* About */}
        <Section title={t.sections.about}>
          <p className="text-sm text-fg-2 leading-relaxed">
            {curriculo.about}
          </p>
        </Section>

        {/* Technical Skills */}
        <Section title={t.sections.skills}>
          <div className="space-y-2">
            {curriculo.technicalSkills.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[150px_1fr] gap-3">
                <span className="font-mono text-[11px] text-fg-4 font-medium pt-px">{label}</span>
                <span className="text-sm text-fg-2 leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title={t.sections.experience}>
          <div className="space-y-0">
            {experience.map((job, i) => (
              <div key={i} className="pb-6 mb-6 border-b border-line-1 last:border-0 last:mb-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-0.5">
                  <h3 className="font-sora font-semibold text-fg text-[0.95rem]">
                    {job.role}
                  </h3>
                  <span className="font-mono text-[10px] text-fg-4 flex-shrink-0">{job.period}</span>
                </div>
                <p className="font-mono text-[11px] text-fg-4 mb-3">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-fg-2 leading-relaxed">
                      <span className="text-fg-5 mt-[3px] flex-shrink-0">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title={t.sections.education}>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="font-sora font-semibold text-fg text-[0.95rem]">
                {education.degree}
              </h3>
              <p className="font-mono text-[11px] text-fg-4 mt-0.5">
                {education.institution}
              </p>
            </div>
            <div className="flex-shrink-0 sm:text-right">
              <span className="font-mono text-[10px] text-fg-4">{education.period}</span>
              <br />
              <span className="font-mono text-[10px] text-accent">{education.status}</span>
            </div>
          </div>
        </Section>

        {/* Languages */}
        <Section title={t.sections.languages}>
          <p className="text-sm text-fg-2">{curriculo.languages}</p>
        </Section>

        {/* Projects */}
        <Section title={t.sections.projects}>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-sora font-semibold text-fg text-[0.95rem]">{project.name}</h3>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] text-fg-4 hover:text-fg transition-colors underline underline-offset-2 decoration-line-3"
                    >
                      {project.demo.replace('https://', '')}
                    </a>
                  )}
                </div>
                <p className="text-sm text-fg-2 leading-relaxed mt-1">
                  {project.description}
                </p>
                <p className="font-mono text-[10px] text-fg-4 mt-1.5">
                  {project.tags.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Print footer */}
        <p className="hidden print:block font-mono text-[9px] text-fg-6 text-center mt-8 pt-4 border-t border-line-1">
          {meta.email} · {meta.location}
        </p>
      </main>
    </div>
  )
}
