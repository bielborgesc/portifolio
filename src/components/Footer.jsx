import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-8 flex items-center justify-between gap-4">
      <p className="font-mono text-[11px] text-[#333]">
        © {new Date().getFullYear()} {personal.name}
      </p>

      <button
        onClick={() => window.print()}
        className="font-mono text-[11px] text-[#444] hover:text-white underline underline-offset-4 decoration-[#2a2a2a] hover:decoration-[#555] transition-colors duration-200 cursor-pointer"
      >
        baixar currículo.pdf
      </button>
    </footer>
  )
}
