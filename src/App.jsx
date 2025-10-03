import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TravelStory from './components/TravelStory'
import Destination from './components/Destination'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <TravelStory/>
      <Destination/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
