import { Helmet } from 'react-helmet-async'
// import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'

export default function About() {

  // const { t /*i18n*/ } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>About — Fervor Web</title>
        <meta name="description" content="Learn about Fervor Web." />
        <meta property="og:title" content="About — Fervor Web" />
        <meta property="og:description" content="Learn about Fervor Web." />
      </Helmet>

      <Navbar />

      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24">
        <h1>About Page</h1>
      </section>
    </div>
  )
}