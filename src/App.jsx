import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import FAQ from './components/faq/Faq'
import Starfield from './components/star/Starfield'
import Speaker from './components/speaker/Speaker'


function App() {


  return (
    <div>
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.15}
        backgroundColor="black"
      />
      <section id='Navbar'>
        <Navbar />
      </section>
      <section id='Home'>
        <Hero />
      </section>
      <section id='About'>About</section>
      <section id='Speakers'>
        <Speaker />
      </section>
      <section id='Sponsors'>Sponsors</section>
      <section id='Team'>Team</section>
      <section id='FAQ'><FAQ /></section>
    </div>
  )
}

export default App
