import { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#our-work' },
  { label: 'Contact', href: '#contact-us' },
]

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 px-5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/85 sm:px-8">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#home" onClick={closeMenu} aria-label="Agency AI home">
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            className="w-32"
            alt="Agency AI"
          />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="flex size-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 sm:hidden"
        >
          <img
            src={menuOpen ? assets.close_icon : assets.menu_icon}
            alt=""
            className="size-5"
          />
        </button>

        {menuOpen && (
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-slate-950/30 sm:hidden"
          />
        )}

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-2 border-l border-slate-200 bg-white p-6 pt-20 shadow-2xl transition-transform dark:border-slate-800 dark:bg-slate-950 sm:static sm:w-auto sm:translate-x-0 sm:flex-row sm:items-center sm:gap-7 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:dark:bg-transparent sm:visible ${
            menuOpen ? 'visible translate-x-0' : 'invisible translate-x-full'
          }`}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 sm:hidden"
          >
            <img src={assets.close_icon} alt="" className="size-4" />
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-violet-300 sm:px-0 sm:py-2 sm:hover:bg-transparent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-3 flex items-center gap-3">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          <a
            href="#contact-us"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 sm:inline-flex"
          >
            Let&apos;s talk <img src={assets.arrow_icon} width={14} alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
