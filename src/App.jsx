import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { initLeadCapture } from './utils/leadCapture';
import AnalyticsTracker from './components/AnalyticsTracker';
import AnalyticsTest from './components/AnalyticsTest';
import CookieConsent from './components/CookieConsent';

// Lazy loading for pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioDetail = lazy(() => import('./pages/PortfolioDetail'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/admin/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const KVKKAydinlatmaMetni = lazy(() => import('./pages/KVKKAydinlatmaMetni'));
const GizlilikPolitikasi = lazy(() => import('./pages/GizlilikPolitikasi'));
const CerezPolitikasi = lazy(() => import('./pages/CerezPolitikasi'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-prime-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-prime-yellow border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500">Yükleniyor...</p>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

function App() {
  // Initialize lead capture system
  useEffect(() => {
    initLeadCapture();
  }, []);

  return (
    <HelmetProvider>
      <AuthProvider>
        <DataProvider>
          <Router>
            <ScrollToTop />
            <AnalyticsTracker />
            <AnalyticsTest />
            <div className="font-sans antialiased text-prime-black bg-prime-white min-h-screen selection:bg-prime-yellow selection:text-prime-black overflow-x-hidden w-full relative">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/hizmetler" element={<Services />} />
                  <Route path="/portfoy" element={<Portfolio />} />
                  <Route path="/portfoy/:slug" element={<PortfolioDetail />} />
                  <Route path="/hakkimizda" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route path="/iletisim" element={<Contact />} />
                  <Route path="/kvkk-aydinlatma-metni" element={<KVKKAydinlatmaMetni />} />
                  <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
                  <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={<Login />} />
                  <Route 
                    path="/admin/dashboard" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </Suspense>
            </div>
            
            {/* Cookie Consent Banner */}
            <CookieConsent />
          </Router>
        </DataProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
