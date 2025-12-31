import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Importamos el router
import { HelmetProvider } from 'react-helmet-async' // Importa esto
import './index.css'
import SmartInnovationPage from './SmartInnovationPage'
import PrivacyPolicy from './PrivacyPolicy'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Envuelve aquí */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SmartInnovationPage />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)