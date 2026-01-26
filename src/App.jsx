import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AdmissionPopup from './Components/AdmissionPopup'
import './styles/global.css'
import { AuthProvider } from './context/AuthContext.jsx';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-root">
          <Navbar />
          <AppRoutes />
          <AdmissionPopup onOpenEnquiry={() => window.dispatchEvent(new Event('openAdmissionEnquiry'))} />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
