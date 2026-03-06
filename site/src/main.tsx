import { StrictMode, useState, useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeContext } from './context/theme-context.tsx'
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
import Services from './pages/Services.tsx'
import Work from './pages/Work.tsx'
import Contact from './pages/Contact.tsx'
import './i18n'
import 'flag-icons/css/flag-icons.min.css'

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
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </HelmetProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)