import { StrictMode, useState, useEffect, useMemo, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeContext } from './context/theme-context.tsx'
import './index.css'
import App from './App.tsx'
import './i18n'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import("./pages/Services.tsx"))
const Work = lazy(() => import("./pages/Work.tsx"))
const Contact = lazy(() => import("./pages/Contact.tsx"))

function Root() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const themeValue = useMemo(
    () => ({ dark, toggleDark: () => setDark(d => !d) }),
    [dark]
  )

  return (
    <StrictMode>
      <HelmetProvider>
        <ThemeContext.Provider value={themeValue}>
          <BrowserRouter basename="/WebDesignClass/">
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeContext.Provider>
      </HelmetProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)