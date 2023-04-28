import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import About from '../Components/About'
import Footer from '../Components/Footer'

const AboutusPage = () => {
  useEffect(()=>{
    document.title = "Blu Ocean - About";
},[])
  return (
    <>
     <Navbar/>
     <Content maintitle="About Us"/>
     <About/>
     <Footer/>
    </>
  )
}

export default AboutusPage
