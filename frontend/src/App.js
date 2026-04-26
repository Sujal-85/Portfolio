import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { Toaster } from './components/ui/sonner';

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default App;
