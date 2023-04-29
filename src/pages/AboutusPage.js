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
     <Navbar home="text-gray-50 hover:text-blue-600" applynow="text-gray-50 hover:text-blue-600" aboutus="text-blue-600" contactus="text-gray-50 hover:text-blue-600" complaint="text-gray-50 hover:text-blue-600" refund="text-gray-50 hover:text-blue-600"/>
     <Content maintitle="About Us"/>
     <About/>
     <Footer/>
    </>
  )
}

export default AboutusPage
