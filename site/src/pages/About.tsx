import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { Section } from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import { TeamMember } from "@/components/TeamMember"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card'
import HeroImage from '@/assets/hero-image.jpg?w=256;320;640&format=avif;webp;jpg&as=picture'
import TeamMember2 from '@/assets/hero-image.jpg?w=256;320;640&format=avif;webp;jpg&as=picture'

export default function About() {
  const { t } = useTranslation()

  const values = [
    { key: 'results' },
    { key: 'detail' },
    { key: 'honesty' },
    { key: 'accessibility' },
    { key: 'partnerships' },
    { key: 'reputation' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>About — Fervor Web</title>
        <meta name="description" content="Learn about Fervor Web." />
        <meta property="og:title" content="About — Fervor Web" />
        <meta property="og:description" content="Learn about Fervor Web." />
      </Helmet>

      <Navbar />

      <HeroSection
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        description={t('about.description')}
      />

      {/* General Information */}
      <Section
        id="information"
        eyebrow={t('about.information.eyebrow')}
        title={t('about.information.title')}
        description={t('about.information.description')}
      />

      {/* Values */}
      <Section
        id="values"
        eyebrow={t('about.values.eyebrow')}
        title={t('about.values.title')}
        description={t('about.values.description')}
      >
        <CardGrid columns={2}>
          {values.map(({ key }) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl">{t(`about.values.${key}.title`)}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t(`about.values.${key}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </Section>

      {/* Meet the Team */}
      <Section
        id="team"
        eyebrow={t('about.team.eyebrow')}
        title={t('about.team.title')}
        description={t('about.team.description')}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-5">
          <TeamMember
            name={t('about.team.member-1.name')}
            role={t('about.team.member-1.role')}
            description={t('about.team.member-1.description')}
            picture={HeroImage}
            alt={t('about.team.member-1.name')}
          />
          <TeamMember
            name={t('about.team.member-2.name')}
            role={t('about.team.member-2.role')}
            description={t('about.team.member-2.description')}
            picture={TeamMember2}
            alt={t('about.team.member-2.name')}
          />
        </div>
      </Section>

      <Footer />
    </div>
  )
}