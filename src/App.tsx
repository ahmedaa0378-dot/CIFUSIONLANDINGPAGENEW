import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CinematicIntro from './components/CinematicIntro';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';


function AppContent() {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show intro on homepage, once per session
    if (location.pathname === '/' && !sessionStorage.getItem('cifusion-intro-seen')) {
      setShowIntro(true);
    } else {
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('cifusion-intro-seen', 'true');
    setShowIntro(false);
    setIntroComplete(true);
  };

  return (
    <>
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}
      <div
        className="min-h-screen flex flex-col transition-opacity duration-700"
        style={{ opacity: introComplete ? 1 : 0 }}
      >
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/docs" element={<DocsHub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}

export default App;
