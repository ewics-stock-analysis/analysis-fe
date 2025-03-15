import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/layouts'
import './index.css'
// import HomePage from '@/pages/HomePage'
// import AboutPage from '@/pages/AboutPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppLayout>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </AppLayout>
    </Router>
  </React.StrictMode>,
)
