import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import Contactus from '../Components/Contactus'
import Footer from '../Components/Footer'

const ContactPage = () => {
    useEffect(()=>{
        document.title = "Blu Ocean - Contact";
    },[])
  return (
    <>
      <Navbar home="text-gray-50 hover:text-blue-600" applynow="text-gray-50 hover:text-blue-600" aboutus="text-gray-50 hover:text-blue-600" contactus="text-blue-600" complaint="text-gray-50 hover:text-blue-600" refund="text-gray-50 hover:text-blue-600"/>
      <Content maintitle="Contact Us"/>
      <Contactus/>
      <Footer/>
    </>
  )
}

export default ContactPage
