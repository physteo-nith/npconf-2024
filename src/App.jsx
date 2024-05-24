import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

function App() {


  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>About</section>
      <section id='Speakers'>Speakers</section>
      <section id='Sponsors'>Sponsors</section>
      <section id='Team'>Team</section>
      <section id='FAQ'>FAQ</section>
    </div>
  )
}

export default App
