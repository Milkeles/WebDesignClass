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
    <Card className="flex flex-col overflow-hidden p-0 h-full">
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
        <CardTitle><h4 className="text-lg">{title}</h4></CardTitle>
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

const modules = import.meta.glob('@/data/projects/*.ts', { eager: true })
const projects = Object.values(modules).map((m: any) => m.default)
// console.log(projects)

export default function Work() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'bg'
  const consultationProjects = projects.filter(p => p.category === 'consultation').map(p => ({ ...p, ...p[lang] }))
  
  const auditProjects = projects.filter(p => p.category === 'audit').map(p => ({ ...p, ...p[lang] }))
  
  const developmentProjects = projects.filter(p => p.category === 'development').map(p => ({ ...p, ...p[lang] }))

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

      <Footer />
    </div>
  )
}