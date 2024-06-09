import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import FAQ from './components/faq/Faq';
import Starfield from './components/star/Starfield';
import Speaker from './components/speaker/Speaker';
import Sponsor from './components/sponsor/Sponsor';
import Team from './components/team/Team';
import About from './components/about/About';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <section id='Navbar'>
        <Navbar />
      </section>
      <Routes>
        <Route path="/" element={
          <>
            <Starfield
              starCount={5000}
              starColor={[255, 255, 255]}
              speedFactor={0.15}
              backgroundColor="black"
            />
            <section id='Home'>
              <Hero />
            </section>
            <section id='About'>
              <About />
            </section>
            <section id='Speakers'>
              <Speaker />
            </section>
            <section id='Sponsors'>
              <Sponsor />
            </section>
            <section id='FAQ'>
              <FAQ />
            </section>
          </>
        } />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
