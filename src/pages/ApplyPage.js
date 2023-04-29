import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import Apply from '../Components/Apply'
import Footer from '../Components/Footer'

const ApplyPage = () => {
  useEffect(()=>{
    document.title = "Blu Ocean - Apply";
},[])
  return (
    <>
     <Navbar home="text-gray-50 hover:text-blue-600" applynow="text-blue-600" aboutus="text-gray-50 hover:text-blue-600" contactus="text-gray-50 hover:text-blue-600" complaint="text-gray-50 hover:text-blue-600" refund="text-gray-50 hover:text-blue-600"/>
     <Content maintitle="Apply Now"/>
     <Apply/>
     <Footer/>
    </>
  )
}

export default ApplyPage