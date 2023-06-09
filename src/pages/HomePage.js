import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Compbtn1 from "../Components/Compbtn1";
import Txt from "../Components/Txt";
import ImageAndContent from "../Components/ImageAndContent";
import Carousel from "../Components/Carousel";
import Belowcarousel from "../Components/Belowcarousel";
import Homesecond from "../Components/Homesecond";

const HomePage = () => {
  useEffect(() => {
    document.title = "Blu Ocean - Home";
  }, []);
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
      <Homesecond/>
      <ImageAndContent />
      <Txt />
      <Button
        setbtn1="text-blue-700 border-blue-700"
        setbtn2="text-gray-800 border-gray-800 hover:text-blue-700 hover:border-blue-700"
        setbtn3="text-gray-800 border-gray-800 hover:text-blue-700 hover:border-blue-700"
        setbtn4="text-gray-800 border-gray-800 hover:text-blue-700 hover:border-blue-700"
      />
      <Compbtn1 />
      <Footer />
    </>
  );
};

export default HomePage;
