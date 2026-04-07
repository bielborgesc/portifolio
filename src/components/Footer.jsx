import { Link } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'

export default function Footer() {
  const { meta, ui } = usePortfolio()

  return (
    <footer className="border-t border-line-1 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p className="font-mono text-[11px] text-fg-7">
        © {new Date().getFullYear()} {meta.name}
      </p>

      <Link
        to="/curriculo"
        className="font-mono text-[11px] text-fg-6 hover:text-fg underline underline-offset-4 decoration-line-4 hover:decoration-fg-5 transition-colors duration-200"
      >
        {ui.footer.resume}
      </Link>
    </footer>
  )
}
