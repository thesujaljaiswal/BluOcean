import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import Compbtn1 from '../Components/Compbtn1'
import Txt from '../Components/Txt'
// import BoxDiv from '../Components/BoxDiv'
import ImageAndContent from '../Components/ImageAndContent'

const HomePage = () => {
  useEffect(()=>{
    document.title = "Blu Ocean - Home";
},[])
  return (
    <>
      <Navbar/>
      <ImageAndContent/>
      {/* <BoxDiv/> */}
      <Txt/>
      <Button setbtn1="text-blue-700 border-blue-700" setbtn2="text-gray-800 border-gray-800" setbtn3="text-gray-800 border-gray-800" setbtn4="text-gray-800 border-gray-800"/>
      <Compbtn1/>
      <Footer/>
    </>
  )
}

export default HomePage
