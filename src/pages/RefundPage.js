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
     <Navbar home="text-gray-50 hover:text-blue-600" applynow="text-gray-50 hover:text-blue-600" aboutus="text-gray-50 hover:text-blue-600" contactus="text-gray-50 hover:text-blue-600" complaint="text-gray-50 hover:text-blue-600" refund="text-blue-600"/>
     <Content maintitle="Refund"/>
     <Refunds/>
     <Footer/>
    </>
  )
}

export default RefundPage
