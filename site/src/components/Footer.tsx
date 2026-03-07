import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/Logo'

const navLinks = [
    { label: 'nav.home', href: '/' },
    { label: 'nav.services', href: '/services' },
    { label: 'nav.about', href: '/about' },
    { label: 'nav.work', href: '/work' },
    { label: 'nav.contact', href: '/contact' },
    { label: 'nav.documentation', href: 'https://milkeles.github.io/WebDesignClass/docs/', external: true },
]

const legalLinks = [
    { label: 'footer.privacy', href: '/privacy' },
    { label: 'footer.terms', href: '/terms' },
]

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/milkeles' },
    { label: 'LinkedIn', href: 'https://linkedin.com/milkeles' },
]

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="border-t border-border px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                {/* Branding */}
                <div className="flex items-center flex-col gap-3">
                    <Logo imageClassName="h-10 w-10" />
                    <p className="text-center text-sm text-muted-foreground max-w-xs">
                        {t('footer.tagline')}
                    </p>
                </div>

                {/* Nav links */}
                <div className="items-center flex flex-col gap-x-1 gap-y-3">
                    <p className=" content-center text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-1">
                        {t('footer.navigation')}
                    </p>
                    <div className=" grid grid-cols-2 gap-2">
                        {navLinks.map(({ label, href }) => (
                            <Button key={href} variant="navigation" asChild className="justify-start w-fit h-fit p-0 text-muted-foreground hover:text-foreground normal-case tracking-normal font-normal text-sm">
                                <NavLink to={href}>{t(label)}</NavLink>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Contact + social */}
                <div className="items-center flex flex-col gap-3">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-1">
                        {t('footer.contact')}
                    </p>
                    <a href="mailto:hristo@fervorgames.com" className="justify-start text-sm text-muted-foreground hover:text-foreground transition-colors">
                        hristo@fervorgames.com
                    </a>
                    <div className="flex gap-3 mt-2">
                        {socialLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-border pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Fervor Web. All rights reserved.
                </p>
                <div className="flex gap-4">
                    {legalLinks.map(({ label, href }) => (
                        <Button key={href} variant="navigation" asChild className="justify-start w-fit h-fit p-0 text-muted-foreground hover:text-foreground normal-case tracking-normal font-normal text-xs">
                            <NavLink to={href}>{t(label)}</NavLink>
                        </Button>
                    ))}
                </div>
            </div>

        </footer>
    )
}