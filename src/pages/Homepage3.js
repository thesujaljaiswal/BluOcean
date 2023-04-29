import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import Compbtn3 from '../Components/Compbtn3'
import Footer from '../Components/Footer'
import Txt from '../Components/Txt'
import ImageAndContent from '../Components/ImageAndContent'

const Homepage3 = () => {
  return (
    <>
     <Navbar/>
     <ImageAndContent/>
     <Txt/>
     <Button setbtn1="text-gray-800 border-gray-800" setbtn2="text-gray-800 border-gray-800" setbtn3="text-blue-700 border-blue-700" setbtn4="text-gray-800 border-gray-800"/>
     <Compbtn3/>
     <Footer/> 
    </>
  )
}

export default Homepage3
