import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { Section } from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Showcase1 from '@/assets/project-showcase-1.jpg?w=400;800&format=avif;webp;jpg&as=picture'
import Showcase2 from '@/assets/project-showcase-2.jpg?w=400;800&format=avif;webp;jpg&as=picture'

interface WorkCardProps {
  title: string
  description: string
  href: string
  picture: {
    sources: { srcset: string; type: string }[] | Record<string, string>
    img: { src: string }
  }
  alt: string
}

function WorkCard({ title, description, href, picture, alt }: WorkCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="aspect-video overflow-hidden ">
        <picture>
          {(Array.isArray(picture.sources)
            ? picture.sources
            : Object.entries(picture.sources).map(([format, srcset]) => ({
                type: `image/${format}`,
                srcset: srcset as string,
              }))
          ).map(({ srcset, type }) => (
            <source key={type} srcSet={srcset} type={type} sizes="(max-width: 640px) 100vw, 400px" />
          ))}
          <img
            src={picture.img.src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </picture>
      </div>
      <CardHeader>
        <CardTitle><h3 className="text-lg">{title}</h3></CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" size="sm" className="w-full mb-5" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            Visit site
            <ArrowRight size={14} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

const consultationProjects = [
  { title: 'Bella Flora', description: 'Consulted on platform migration and UX overhaul for a local florist looking to grow online sales.', href: '#', picture: Showcase1, alt: 'Bella Flora' },
  { title: 'Ruse Legal Group', description: 'Advised on digital strategy and web presence for a law firm entering the online market.', href: '#', picture: Showcase2, alt: 'Ruse Legal Group' },
  { title: 'NovaTech BG', description: 'Provided technical consultation for a B2B software company restructuring their landing pages.', href: '#', picture: Showcase1, alt: 'NovaTech BG' },
  { title: 'ArtSpace Gallery', description: 'Guided an art gallery through their first e-commerce setup and online booking system.', href: '#', picture: Showcase2, alt: 'ArtSpace Gallery' },
  { title: 'FitLife Studio', description: 'Consulted on conversion strategy for a fitness studio struggling with low class bookings.', href: '#', picture: Showcase1, alt: 'FitLife Studio' },
]

const auditProjects = [
  { title: 'SunCafe', description: 'Full UX and performance audit for a café chain — identified 12 conversion blockers and a 3s load time issue.', href: '#', picture: Showcase2, alt: 'SunCafe' },
  { title: 'DentaSmile Clinic', description: 'Audited a dental clinic website and uncovered critical accessibility issues affecting 30% of visitors.', href: '#', picture: Showcase1, alt: 'DentaSmile Clinic' },
  { title: 'EcoHome BG', description: 'SEO and performance audit for an eco-products retailer with high traffic but low conversion rates.', href: '#', picture: Showcase2, alt: 'EcoHome BG' },
  { title: 'Balkantour', description: 'Comprehensive audit of a travel agency site revealing poor mobile UX and broken booking flows.', href: '#', picture: Showcase1, alt: 'Balkantour' },
  { title: 'ProBuild Ltd', description: 'Technical audit for a construction company revealing outdated infrastructure and poor Core Web Vitals scores.', href: '#', picture: Showcase2, alt: 'ProBuild Ltd' },
]

const developmentProjects = [
  { title: 'Fervor Games', description: 'Mobile-first web presence for an indie game development studio, built for speed and brand impact.', href: 'https://fervorgames.com', picture: Showcase1, alt: 'Fervor Games' },
  { title: 'Portfolio Site', description: 'Clean, conversion-focused portfolio for a creative professional with a 98+ Lighthouse score.', href: 'https://milkeles.github.io/Portfolio-Site', picture: Showcase2, alt: 'Portfolio Site' },
  { title: 'Varna Eats', description: 'Restaurant discovery platform with real-time availability and SEO-optimized location pages.', href: '#', picture: Showcase1, alt: 'Varna Eats' },
  { title: 'MediBook', description: 'Appointment booking system for a private medical practice, fully accessible and GDPR compliant.', href: '#', picture: Showcase2, alt: 'MediBook' },
  { title: 'ShopLocal BG', description: 'E-commerce storefront for a local retailer, optimized for mobile checkout and fast load times.', href: '#', picture: Showcase1, alt: 'ShopLocal BG' },
]

export default function Work() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>Our Work — Fervor Web</title>
        <meta name="description" content="Browse our featured projects across consultation, auditing, and web development." />
        <meta property="og:title" content="Our Work — Fervor Web" />
        <meta property="og:description" content="Browse our featured projects across consultation, auditing, and web development." />
      </Helmet>

      <Navbar />

      <HeroSection
        eyebrow={t('work.eyebrow')}
        title={t('work.title')}
        description={t('work.description')}
      />

      <Section
        id="consultation"
        eyebrow={t('work.consultation.eyebrow')}
        title={t('work.consultation.title')}
        description={t('work.consultation.description')}
      >
        <div className="px-12">
          <CardGrid columns={3} carousel>
            {consultationProjects.map((project) => (
              <WorkCard key={project.title} {...project} />
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section
        id="audit"
        eyebrow={t('work.audit.eyebrow')}
        title={t('work.audit.title')}
        description={t('work.audit.description')}
      >
        <div className="px-12">
          <CardGrid columns={3} carousel>
            {auditProjects.map((project) => (
              <WorkCard key={project.title} {...project} />
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section
        id="development"
        eyebrow={t('work.development.eyebrow')}
        title={t('work.development.title')}
        description={t('work.development.description')}
      >
        <div className="px-12">
          <CardGrid columns={3} carousel>
            {developmentProjects.map((project) => (
              <WorkCard key={project.title} {...project} />
            ))}
          </CardGrid>
        </div>
      </Section>

      <Footer />
    </div>
  )
}