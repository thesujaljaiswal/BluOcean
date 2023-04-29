import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import Complaint from '../Components/Complaint'
import Footer from '../Components/Footer'

const ComplaintPage = () => {
  useEffect(()=>{
    document.title = "Blu Ocean - Complaint";
},[])
  return (
    <>
      <Navbar home="text-gray-50 hover:text-blue-600" applynow="text-gray-50 hover:text-blue-600" aboutus="text-gray-50 hover:text-blue-600" contactus="text-gray-50 hover:text-blue-600" complaint="text-blue-600" refund="text-gray-50 hover:text-blue-600"/>
      <Content maintitle="Complaint"/>
      <Complaint/>
      <Footer/>
    </>
  )
}

export default ComplaintPage
