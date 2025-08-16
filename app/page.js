import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function page() {
  return (
    <>
    <div className='container px-6 sm:px-20  mx-auto'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
      <Footer/>
    </>
  )
}
