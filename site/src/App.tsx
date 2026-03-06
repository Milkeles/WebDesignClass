import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/Button"
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { Navbar } from "@/components/Navbar"
import { useTheme } from '@/context/theme-context'


function App() {
  const { dark } = useTheme()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])
  const { t /*, i18n */ } = useTranslation()

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans transition-colors duration-200`}>

      <Navbar />

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-16 relative overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Accent blob */}
        <div className="absolute top-1/3 right-0 w-125 h-125 rounded-full opacity-10 dark:opacity-[0.07] blur-[120px] bg-primary pointer-events-none" />

        <div
          className="relative max-w-5xl transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-8">
            Performance . Conversion . Speed
          </p>

          <h1
            className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.95] tracking-tight mb-10"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            {t('home.hero.title')}
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', fontFamily: "'Exo 2', sans-serif" }}
          >
            {t('home.hero.description')}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
          >

            <Button variant="default" effect="shineHover" className="w-36" asChild>
              <a href="#contact">
                {t('home.hero.primary-cta')}
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </Button>

            <Button variant="secondary" className="w-36" asChild>
              <a href="#hero"> {t('home.hero.secondary-cta')} </a>
            </Button>

          </div>
        </div>

        {/* Stat bar */}
        <div
          className="relative mt-24 overflow-hidden transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {/* Header for metrics - now inside the container, above the grid */}
          <div className=" px-6 py-4">
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Some metrics:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-border max-w-2xl border border-border rounded-sm">
            {[
              { value: '< 1s', label: 'Load time' },
              { value: '98+', label: 'Lighthouse score' },
              { value: '3×', label: 'Avg. conversion lift' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center justify-center py-6 bg-background text-center px-4">
                <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Russo One', 'Arial Black', sans-serif" }}>{value}</span>
                <span className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-6">Contact</p>
          <h2
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
            style={{ fontFamily: "'Russo One', 'Arial Black', sans-serif" }}
          >
            I don't know
          </h2>
          <p className="text-muted-foreground mb-12 text-lg" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            I answer within 10 business years. I promise.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Say something here..."
              className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wide text-sm uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 lg:px-24 py-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Hristo's site</span>
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Hristo Hristov. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App