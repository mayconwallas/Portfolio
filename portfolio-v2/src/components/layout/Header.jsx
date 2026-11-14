import { profile } from '@/data/profile'

function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-white"
        >
          {profile.name}
        </a>

        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            <li>
              <a className="transition-colors hover:text-white" href="#sobre">
                Sobre
              </a>
            </li>

            <li>
              <a className="transition-colors hover:text-white" href="#projetos">
                Projetos
              </a>
            </li>

            <li>
              <a className="transition-colors hover:text-white" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header