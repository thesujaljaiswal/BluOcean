import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import Refunds from '../Components/Refunds'
import Footer from '../Components/Footer'

const RefundPage = () => {
  useEffect(()=>{
    document.title = "Blu Ocean - Refund";
},[])
  return (
    <>
     <Navbar/>
     <Content maintitle="Refund"/>
     <Refunds/>
     <Footer/>
    </>
  )
}

export default RefundPage
