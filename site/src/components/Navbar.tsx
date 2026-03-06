import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useTheme } from '@/context/theme-context'

const navLinks = [
  { label: 'nav.home', href: '/' },
  { label: 'nav.services', href: '/services' },
  { label: 'nav.about', href: '/about' },
  { label: 'nav.work', href: '/work' },
  { label: 'nav.contact', href: '/contact' },
]

export function Navbar() {
  const { t, i18n } = useTranslation()
  const { dark, toggleDark } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-background/80 border-b border-border">

        <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary">
          Hristo's site
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Button key={href} variant="navigation" asChild>
              <NavLink to={href}>{t(label)}</NavLink>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={toggleDark} variant="icon" size="icon" aria-label="Toggle dark mode">
            {dark ? <Sun size={14} strokeWidth={2.5} /> : <Moon size={14} strokeWidth={2.5} />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="icon" size="icon" aria-label={t('nav.language-select')}>
                <span className={`fi fi-${i18n.language === 'bg' ? 'bg' : 'gb'}`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => i18n.changeLanguage('en')} aria-label={t('nav.switch-to-en')} lang="en">
                <span className="fi fi-gb mr-2" /> English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => i18n.changeLanguage('bg')} aria-label={t('nav.switch-to-bg')} lang="bg">
                <span className="fi fi-bg mr-2" /> Български
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hamburger — mobile only */}
          <Button
            variant="icon"
            size="icon"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden"
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X size={14} strokeWidth={2.5} /> : <Menu size={14} strokeWidth={2.5} />}
          </Button>
        </div>

      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-64 bg-background border-l border-border flex flex-col pt-24 px-6 gap-2 transition-transform duration-300 ease-in-out md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {navLinks.map(({ label, href }) => (
          <Button
            key={href}
            variant="navigation"
            asChild
            className="justify-start w-full"
            onClick={() => setMobileOpen(false)}
          >
            <NavLink to={href}>{t(label)}</NavLink>
          </Button>
        ))}
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 w-full h-full bg-black/40 md:hidden backdrop-blur-sm cursor-default"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}