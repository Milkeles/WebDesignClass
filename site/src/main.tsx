import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import DevPage from './pages/DevPage.tsx'
import './i18n'
import 'flag-icons/css/flag-icons.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/WebDesignClass/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dev" element={<DevPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)