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
      <Navbar/>
      <Content maintitle="Contact Us"/>
      <Contactus/>
      <Footer/>
    </>
  )
}

export default ContactPage
