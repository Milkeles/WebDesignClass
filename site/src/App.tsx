import { useEffect } from 'react'
import { Button } from "@/components/ui/Button"
import { useTranslation } from 'react-i18next'
import { ArrowRight, MessageCircle, Search, Code, Rocket } from 'lucide-react'
import { Navbar } from "@/components/Navbar"
import { useTheme } from '@/context/theme-context'
import { Footer } from '@/components/Footer'
import { CardGrid } from '@/components/CardGrid';
import { Section } from "@/components/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Roadmap } from "@/components/Roadmap";
import { FeaturedProject } from '@/components/FeaturedProject'
import ConsultationIcon from '@/assets/icons/consultation.svg?react'
import AuditIcon from "@/assets/icons/audit.svg?react"
import DevelopmentIcon from "@/assets/icons/development.svg?react"
import Showcase1 from '@/assets/Showcase1.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'
import Showcase2 from '@/assets/Showcase2.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'

console.log(Showcase1)

function App() {
  const { dark } = useTheme()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const { t /*, i18n */ } = useTranslation()

  return (
    <div className={`text-justify break-all text-pretty hyphens-auto min-h-screen bg-background text-foreground font-sans transition-colors overflow-x-hidden duration-200`}>

      <Navbar />

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-16 relative overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Accent blobs */}
        <div className="absolute top-1/3 right-0 w-175 h-175 rounded-full opacity-10 blur-[150px] bg-primary pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-100 h-100 rounded-full opacity-15 blur-[150px] bg-accent pointer-events-none" />
        <div className="absolute top-0 left-0 w-100 h-100 rounded-full opacity-10 blur-[150px] bg-primary pointer-events-none" />
        <div
          className="relative max-w-5xl transition-all duration-700"
        >
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-8">
            {t('home.hero.eyebrow')}
          </p>

          <h1
            className="text-[clamp(32px,9vw,64px)] leading-[0.95] tracking-tight mb-10"
          >
            {t('home.hero.title')}
          </h1>

          <p
            className="text-lg md:text-xl wrap-break-words text-muted-foreground max-w-xl mb-12 leading-relaxed transition-all duration-700 delay-100"
          >
            {t('home.hero.description')}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200"
          >

            <Button variant="default" effect="shineHover" className="w-auto" asChild>
              <a href="#contact">
                {t('home.hero.primary-cta')}
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </Button>

            <Button variant="secondary" className="w-auto" asChild>
              <a href="#hero"> {t('home.hero.secondary-cta')} </a>
            </Button>

          </div>
        </div>

        {/* Stat bar */}
        <div
          className="relative mt-24 transition-all duration-700 delay-300"
        >
          {/* Header for metrics - now inside the container, above the grid */}
          <div className="py-4">
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {t('home.hero.metrics')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-border max-w-2xl rounded-lg outline outline-border text-pretty">
            {[
              { value: t('home.hero.metric-1'), label: t('home.hero.metric-1-text') },
              { value: t('home.hero.metric-2'), label: t('home.hero.metric-2-text') },
              { value: t('home.hero.metric-3'), label: t('home.hero.metric-3-text') },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center justify-center py-6 bg-background text-center px-4">
                <span className="text-2xl font-black tracking-tight">{value}</span>
                <span className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services"
        eyebrow={t('home.services.section-eyebrow')}
        title={t('home.services.section-title')}
      >
        <CardGrid columns={3}>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ConsultationIcon width={80} height={80} className="text-primary" />
                <CardTitle> <h3 className="text-2xl"> {t('home.services.consultation.title')} </h3> </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>
                <p> {t('home.services.consultation.description')} </p>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full mt-10">
                {t('home.services.consultation.action')}
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AuditIcon width={80} height={80} className="text-primary" />
                <CardTitle> <h3 className="text-2xl"> {t('home.services.audit.title')} </h3> </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>
                <p> {t('home.services.audit.description')} </p>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full mt-10">
                {t('home.services.audit.action')}
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <DevelopmentIcon width={80} height={80} className="text-primary" />
                <CardTitle> <h3 className="text-2xl"> {t('home.services.development.title')} </h3> </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>
                <p> {t('home.services.development.description')} </p>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full mt-10">
                {t('home.services.development.action')}
              </Button>
            </CardFooter>
          </Card>
        </CardGrid>
      </Section>


      {/* FEATURED WORK */}
      
      <Section id="work"
        eyebrow={t('home.work.section-eyebrow')}
        title={t('home.work.section-title')}
        description={t('home.work.section-description')}
      >
        <FeaturedProject
          title={t('home.work.project-1.title')}
          description={t('home.work.project-1.description')}
          href="https://fervorgames.com"
          image={{
            picture: Showcase1,
            alt: t('home.work.project-1.alt'),
          }}
        />

        <FeaturedProject
          title={t('home.work.project-2.title')}
          description={t('home.work.project-2.description')}
          href="https://milkeles.github.io/Portfolio-Site"
          reverse
          image={{
            picture: Showcase2,
            alt: t('home.work.project-2.alt'),
          }}
        />

      </Section>

      {/* PROCESS */}
      <Section id="process"
        eyebrow={t('home.process.section-eyebrow')}
        title={t('home.process.section-title')}
        description={t('home.process.section-description')}
      >
        <Roadmap steps={[
          { number: '01', icon: <MessageCircle className='size-4 md:size-7' />, title: t('home.process.steps.step-1.title'), description: t('home.process.steps.step-1.description') },
          { number: '02', icon: <Search className='size-4 md:size-7' />, title: t('home.process.steps.step-2.title'), description: t('home.process.steps.step-2.description') },
          { number: '03', icon: <Code className='size-4 md:size-7' />, title: t('home.process.steps.step-3.title'), description: t('home.process.steps.step-3.description') },
          { number: '04', icon: <Rocket className='size-4 md:size-7' />, title: t('home.process.steps.step-4.title'), description: t('home.process.steps.step-4.description') },
        ]} />
      </Section>

      <Footer />

    </div>
  )
}

export default App