import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Contact from './components/Contact/Contact';
import Starfield from './components/star/Starfield';
import Projects from './components/Project/Project';
import Timeline from './components/Timeline/Timeline';
import Team from './components/team/Team';
import About from './components/about/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/footer/Footer';
import Events from './components/Events/Events'
import IntroAnimation from './components/intro/IntroAnimation';

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
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div className='w-screen  sm:h-full h-max '>
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
                  <section id='About' className='md:mt-3' >
                    <About />
                  </section>
                  <section id='Projects' className='sm:mt-52 mt-52 md:mt-72 '>
                    <Projects />
                  </section>
                  <section id='Events' className=' mt-20 md:mt-72'>
                    <Events />
                  </section>
                  <section id='Timeline' className='sm-mt-0 mt-[36rem]'>
                    <Timeline />
                  </section>
                  <section id='Contact' className=''>
                    <Contact />
                  </section>
                  <section id='Footer' >
                    <Footer />
                  </section>
                </>
              } />
              <Route path="/Team" element={<Team />} />
              <Route path="/Gallery" element={<Gallery />} />
            </Routes>
          </Router>
        </div>
      )}

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default App;
