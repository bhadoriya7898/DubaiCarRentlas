import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Fleet from '../components/Fleet'
import OurLuxuryCars from '../components/OurLuxuryCars'
import Services from '../components/Services'
import BookingSteps from '../components/BookingSteps'
import BookNow from '../components/BookNow'
import BrandLogos from '../components/BrandLogos'
import Testimonials from '../components/Testimonials'
import ChauffeurServices from '../components/ChauffeurServices'
import DrivenCars from '../components/DrivenCars'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Fleet/>
    <OurLuxuryCars/>
    <Services/>
    <BookingSteps/>
    <BookNow/>
    <BrandLogos/>
    <Testimonials/>
    <ChauffeurServices/>
    <DrivenCars/>
    </>
  )
}

export default Home