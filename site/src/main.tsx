import { StrictMode, useState, useEffect, useMemo, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeContext } from './context/theme-context.tsx'
import './index.css'
import App from './App.tsx'
import './i18n'
import { CookieConsent } from './components/CookieConsent.tsx'
import { ScrollToPos } from './components/ScrollToPos.tsx'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import("./pages/Services.tsx"))
const Work = lazy(() => import("./pages/Work.tsx"))
const Contact = lazy(() => import("./pages/Contact.tsx"))
const Privacy = lazy(() => import("./pages/Privacy.tsx"))
const Terms = lazy(() => import("./pages/Terms.tsx"))

function Root() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored ? stored === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light') // add this
  }, [dark])

  const themeValue = useMemo(
    () => ({ dark, toggleDark: () => setDark(d => !d) }),
    [dark]
  )

  return (
    <StrictMode>
      <HelmetProvider>
        <ThemeContext.Provider value={themeValue}>
          <BrowserRouter basename="/FervorWeb/">
            <ScrollToPos />
            <CookieConsent />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeContext.Provider>
      </HelmetProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)