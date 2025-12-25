import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { registerServiceWorker } from './utils/serviceWorker'
import { initGA, hasAnalyticsConsent } from './utils/analytics'
import { preloadCriticalResources, trackWebVitals } from './utils/performance'

// Initialize performance monitoring
trackWebVitals()

// Preload critical resources
preloadCriticalResources()

// Initialize analytics if consent given
if (hasAnalyticsConsent()) {
  initGA()
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Register Service Worker
registerServiceWorker()
