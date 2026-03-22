import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import MenuPage from './components/MenuPage';
import './App.css';
import HomePage from './components/sections/HomePage';
import Home from './components/sections/Home';
import Header from './components/sections/Header';



function AppContent() {
  const location = useLocation();

  return (
    <div className="h-screen min-h-screen bg-[#081426] text-white font-sans overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50"></div>
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent blur-3xl" />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
