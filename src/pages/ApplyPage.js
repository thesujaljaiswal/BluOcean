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
     <Navbar/>
     <Content maintitle="Apply Now"/>
     <Apply/>
     <Footer/>
    </>
  )
}

export default ApplyPage