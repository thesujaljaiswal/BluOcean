import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import Compbtn4 from '../Components/Compbtn4'
import Footer from '../Components/Footer'
import Txt from '../Components/Txt'
import ImageAndContent from '../Components/ImageAndContent'

const HomePage4 = () => {
  return (
    <>
     <Navbar/>
     <ImageAndContent/>
     <Txt/>
     <Button setbtn1="text-gray-800 border-gray-800" setbtn2="text-gray-800 border-gray-800" setbtn3="text-gray-800 border-gray-800" setbtn4="text-blue-700 border-blue-700"/>
     <Compbtn4/>
     <Footer/> 
    </>
  )
}

export default HomePage4
