import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const HomePage = () => {
  useEffect(()=>{
    document.title = "Blu Ocean - Home";
},[])
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default HomePage
