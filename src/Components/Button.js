import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Button() {
  const [btn1, setbtn1] = useState(
    "flex mx-auto text-blue-950 border-blue-800 border bg-blue-300 rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
  );
  const [btn2, setbtn2] = useState(
    "flex mx-auto text-blue-950 border-blue-800 border bg-blue-300 rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
  );
  const [btn3, setbtn3] = useState(
    "flex mx-auto text-blue-950 border-blue-800 border bg-blue-300 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
  );
  const [btn4, setbtn4] = useState(
    "flex mx-auto text-blue-950 border-blue-800 border bg-blue-300 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
  );

//   const onchange1 = () => {
//     setbtn1(
//       "flex mx-auto text-blue-500 border-blue-500 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn2(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn3(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn4(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//   };
//   const onchange2 = () => {
//     setbtn1(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn2(
//       "flex mx-auto text-blue-500 border-blue-500 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn3(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn4(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//   };
//   const onchange3 = () => {
//     setbtn1(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn2(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn3(
//       "flex mx-auto text-blue-500 border-blue-500 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn4(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//   };
//   const onchange4 = () => {
//     setbtn1(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn2(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn3(
//       "flex mx-auto text-gray-800 border-gray-800 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//     setbtn4(
//       "flex mx-auto text-blue-500 border-blue-500 border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center"
//     );
//   };
  return (
    <>
      <div className="flex px-20">
        <div className="p-2 w-1/4">
          <Link to="/" className={btn1}>
            Our Mission
          </Link>
        </div>
        <div className="p-2 w-1/4">
          <Link to="/home/hr-outsourcing" className={btn2}>
            HR Outsourcing
          </Link>
        </div>
        <div className="p-2 w-1/4">
          <Link to="/home/vision" className={btn3}>
            Vision
          </Link>
        </div>
        <div className="p-2 w-1/4">
          <Link to="/home/executive-search" className={btn4}>
            Executive Search
          </Link>
        </div>
      </div>
    </>
  );
}
