import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const activeSection = useActiveSection()
  const [isOpen, setIsOpen] = useState(false)

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-beige/50 bg-cream/80 px-4 py-3 shadow-[0_16px_40px_rgba(62,39,35,0.06)] backdrop-blur-xl">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cherry/20"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cherry to-deepbrown text-sm font-bold text-cream shadow-sm">
            DU
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold text-deepbrown">
              Dharikha U
            </span>
            <span className="block text-xs text-deepbrown/50">
              Product Builder
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cherry to-deepbrown text-cream shadow-md shadow-cherry/15'
                  : 'text-deepbrown/60 hover:bg-cherry/6 hover:text-cherry'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cherry/8 text-cherry lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-[1.5rem] border border-beige/50 bg-cream/90 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cherry to-deepbrown text-cream'
                  : 'text-deepbrown hover:bg-cherry/6 hover:text-cherry'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  )
}
