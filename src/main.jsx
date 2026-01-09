import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Importamos el router
import { HelmetProvider } from 'react-helmet-async'
import { ParallaxProvider } from "react-scroll-parallax";
import './index.css'
import SmartInnovationPage from './SmartInnovationPage'
import PrivacyPolicy from './PrivacyPolicy'
import CondicionesServicio from './CondicionesServicio'
import EliminacionDatos from './EliminacionDatos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SmartInnovationPage />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/condicionesservicio" element={<CondicionesServicio />} />
            <Route path="/eliminaciondatos" element={<EliminacionDatos />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </HelmetProvider>
  </React.StrictMode>
)