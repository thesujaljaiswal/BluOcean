import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Compbtn2 from "../Components/Compbtn2";
import Footer from "../Components/Footer";
import Txt from "../Components/Txt";
import ImageAndContent from "../Components/ImageAndContent";
import Carousel from "../Components/Carousel";
import Belowcarousel from "../Components/Belowcarousel";

const HomePage2 = () => {
  return (
    <>
      <Navbar
        home="text-blue-600"
        applynow="text-gray-50 hover:text-blue-600"
        aboutus="text-gray-50 hover:text-blue-600"
        contactus="text-gray-50 hover:text-blue-600"
        complaint="text-gray-50 hover:text-blue-600"
        refund="text-gray-50 hover:text-blue-600"
      />
      <Carousel />
      <Belowcarousel />
      <ImageAndContent />
      <Txt />
      <Button
        setbtn1="text-gray-800 border-gray-800 hover:text-blue-700 hover:border-blue-700"
        setbtn2="text-blue-700 border-blue-700"
        setbtn3="text-gray-800 border-gray-800 hover:text-blue-700 hover:border-blue-700"
        setbtn4="text-gray-800 border-gray-800 hover:text-blue-700 hover:border-blue-700"
      />
      <Compbtn2 />
      <Footer />
    </>
  );
};

export default HomePage2;
