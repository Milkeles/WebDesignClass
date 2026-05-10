import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { Section } from '@/components/Section'
import { MediaCard } from '@/components/MediaCard'
import { VideoEmbed } from '@/components/VideoEmbed'
import Consultation from '@/assets/consultation.png?w=400;800;1200&format=avif;webp;jpg&as=picture'
import Audit from '@/assets/audit.png?w=400;800;1200&format=avif;webp;jpg&as=picture'
import Development from '@/assets/development.png?w=400;800;1200&format=avif;webp;jpg&as=picture'

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>Services — Fervor Web</title>
        <meta name="description" content="Explore the services Fervor Web offers." />
        <meta property="og:title" content="Services — Fervor Web" />
        <meta property="og:description" content="Explore the services Fervor Web offers." />
      </Helmet>

      <Navbar />

      <HeroSection
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        description={t('services.description')}
      />

      <div className = "py-32 px-12 md:px-18 lg:px-26 border-t border-border">
        <div className = "mx-auto w-[50%]">
          <VideoEmbed
            videoId = "DEQZqUq7Z-Y"
            title={t('services.video.title')}
          />
        </div>
      </div>

      <Section
        id="consultation"
        eyebrow={t('services.consultation.eyebrow')}
        title={t('services.consultation.title')}
        description={t('services.consultation.description')}
      >
        <MediaCard
          title={t('services.consultation.card.title')}
          description={t('services.consultation.card.description')}
          href="/contact#contact-form"
          ctaLabel={t('services.cta')}
          image={{ picture: Consultation, alt: t('services.consultation.card.alt') }}
        />
      </Section>

      <Section
        id="audit"
        eyebrow={t('services.audit.eyebrow')}
        title={t('services.audit.title')}
        description={t('services.audit.description')}
      >
        <MediaCard
          reverse
          title={t('services.audit.card.title')}
          description={t('services.audit.card.description')}
          href="/contact#contact-form"
          ctaLabel={t('services.cta')}
          image={{ picture: Audit, alt: t('services.audit.card.alt') }}
        />
      </Section>

      <Section
        id="development"
        eyebrow={t('services.development.eyebrow')}
        title={t('services.development.title')}
        description={t('services.development.description')}
      >
        <MediaCard
          title={t('services.development.card.title')}
          description={t('services.development.card.description')}
          href="/contact#contact-form"
          ctaLabel={t('services.cta')}
          image={{ picture: Development, alt: t('services.development.card.alt') }}
        />
      </Section>
      
      <Footer />
    </div>
  )
}