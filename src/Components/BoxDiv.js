import React from "react";

export default function BoxDiv() {
  return (
    <>
    <div className="flex justify-center flex-wrap -m-2 pt-10 pr-56">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-blue-500">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={require('./Icon-Financial-Services.png')} />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">We offer finance and consulting</h2>
            <p className="text-gray-900 title-font font-medium">services for companies & businesses</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
