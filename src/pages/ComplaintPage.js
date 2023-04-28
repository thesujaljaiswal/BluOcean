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
      <Navbar/>
      <Content maintitle="Complaint"/>
      <Complaint/>
      <Footer/>
    </>
  )
}

export default ComplaintPage
