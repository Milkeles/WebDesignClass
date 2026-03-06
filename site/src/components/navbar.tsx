import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  dark: boolean
  onToggleDark: () => void
}

const navLinks = [
  { label: 'nav.home', href: '/' },
  { label: 'nav.services', href: '/services' },
  { label: 'nav.about', href: '/about' },
  { label: 'nav.work', href: '/work' },
  { label: 'nav.contact', href: '/contact' },
]

export function Navbar({ dark, onToggleDark }: NavbarProps) {
  const { t, i18n } = useTranslation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-background/80 border-b border-border">

      <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary">
        Hristo's site
      </span>

      <div className="flex items-center gap-1">
        {navLinks.map(({ label, href }) => (
          <Button key={href} variant="navigation" effect="hoverUnderline" asChild>
            <a href={href}>{t(label)}</a>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={onToggleDark}
          variant="icon"
          size="icon"
          aria-label="Toggle dark mode"
        >
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
      </div>

    </nav>
  )
}