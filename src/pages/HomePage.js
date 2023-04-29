import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import Compbtn1 from '../Components/Compbtn1'
import Txt from '../Components/Txt'

const HomePage = () => {
  useEffect(()=>{
    document.title = "Blu Ocean - Home";
},[])
  return (
    <>
      <Navbar/>
      <Txt/>
      <Button/>
      <Compbtn1/>
      <Footer/>
    </>
  )
}

export default HomePage
