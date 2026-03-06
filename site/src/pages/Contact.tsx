import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'

export default function Contact() {
  const [dark, setDark] = useState(true)
    const [visible, setVisible] = useState(false)
  
    useEffect(() => {
      document.documentElement.classList.toggle('dark', dark)
    }, [dark])
  
    useEffect(() => {
      const t = setTimeout(() => setVisible(true), 100)
      return () => clearTimeout(t)
    }, [])
    const { t /*i18n*/ } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>Contact — Fervor Web</title>
        <meta name="description" content="Contact Fervor Web to schedule your website strategy session." />
        <meta property="og:title" content="Contact — Fervor Web" />
        <meta property="og:description" content="Contact Fervor Web to schedule your website strategy session." />
      </Helmet>

      <Navbar dark={dark} onToggleDark={() => setDark(!dark)} />

      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24">
        <h1>Contact Page</h1>
      </section>
    </div>
  )
}