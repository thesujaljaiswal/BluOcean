import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <div className="flex px-20 shrink-0 mine">
        <div className="p-2 w-1/4">
          <Link  to="/" className={`flex mx-auto ${props.setbtn1} border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center -sm:text-xs`}>
            Our Mission
          </Link>
        </div>
        <div className="p-2 w-1/4">
          <Link  to="/home/hr-outsourcing" className={`flex mx-auto ${props.setbtn2} border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center`}>
            HR Outsourcing
          </Link>
        </div>
        <div className="p-2 w-1/4">
          <Link to="/home/vision" className={`flex mx-auto ${props.setbtn3} border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center`}>
            Vision
          </Link>
        </div>
        <div className="p-2 w-1/4">
          <Link to="/home/executive-search" className={`flex mx-auto ${props.setbtn4} border rounded-lg py-2 px-8 focus:outline-none rounded text-lg w-full h-70 place-content-center`}>
            Executive Search
          </Link>
        </div>
      </div>
    </>
  );
}
