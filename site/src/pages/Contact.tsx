import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { HeroSection } from '@/components/HeroSection'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/Button'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const { t } = useTranslation()
  const [phone, setPhone] = useState<string>('')

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>Contact — Fervor Web</title>
        <meta name="description" content="Contact FervorWeb regarding our services or to ask a question." />
        <meta property="og:title" content="Contact — Fervor Web" />
        <meta property="og:description" content="Contact FervorWeb regarding our services or to ask a question." />
      </Helmet>
      <Navbar />
      <HeroSection
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        description={t('contact.description')}
      />

      <Section id="contact-form" eyebrow={t('contact.section-eyebrow')} title={t('contact.section-title')} >
        <div className="flex flex-col lg:flex-row gap-16 mt-8">

          {/** MediaCard works only with images! */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="aspect-video rounded-tl-[clamp(32px,6vw,128px)] rounded-br-[clamp(32px,6vw,128px)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1438.6165645905992!2d25.97506565498214!3d43.85099643378935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae60b3a6a2327d%3A0xbf0ab947fcc44e39!2sg.k.%20Zdravets%20-%20North%201%2C%20ul.%20%22Rodopi%22%2012%2C%207005%20Ruse!5e0!3m2!1sen!2sbg!4v1773028121997!5m2!1sen!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.map-title')}
              />
            </div>
            <div className="flex flex-col gap-3 text-sm">

              <a href="mailto:hristo@fervorgames.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                hristo@fervorgames.com
              </a>

              <a href="tel:+359896801366"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +359 89 680 1366
              </a>
              <p className="text-muted-foreground">
                ж.к. Здравец - Север 1, ул. „Родопи" 12, 7005 Русе
              </p>
            </div>
          </div>

          {/* Right - form */}
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">{t('contact.form.first-name')}</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">{t('contact.form.last-name')}</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">{t('contact.form.email')}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  {t('contact.form.phone')}
                  <span className="text-muted-foreground ml-1">({t('contact.form.optional')})</span>
                </label>
                <PhoneInput
                  value={phone}
                  onChange={(val) => setPhone(val ?? '')}
                  defaultCountry="BG"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  {t('contact.form.website')}
                  <span className="text-muted-foreground ml-1">({t('contact.form.optional')})</span>
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">{t('contact.form.message')}</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="default" effect="shineHover" className='w-full'>
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}