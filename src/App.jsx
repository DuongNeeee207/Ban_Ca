import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import FishDetailPage from './pages/FishDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Helper component to scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactFish, setContactFish] = useState(null);

  const handleOpenContactWithFish = (fish) => {
    setContactFish(fish);
    setContactOpen(true);
  };

  const handleOpenGeneralContact = () => {
    setContactFish(null);
    setContactOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8F8F5] text-[#171717] selection:bg-[#0E2A28] selection:text-[#F8F8F5]">
        {/* Navigation Header */}
        <Navbar
          onOpenSearch={() => setSearchOpen(true)}
          onOpenContact={handleOpenGeneralContact}
        />

        {/* Search Modal Overlay */}
        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />

        {/* Contact & Consultation Modal */}
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          selectedFish={contactFish}
        />

        {/* Main Content Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenContact={handleOpenGeneralContact} />}
            />
            <Route
              path="/collection"
              element={<CollectionPage />}
            />
            <Route
              path="/fish/:id"
              element={
                <FishDetailPage
                  onOpenContactWithFish={handleOpenContactWithFish}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={<HomePage onOpenContact={handleOpenGeneralContact} />}
            />
          </Routes>
        </main>

        {/* Minimalist Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
