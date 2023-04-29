import React from "react";

export default function ImageAndContent() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-500">
                OUR SPECIALTIES
              </h1>
              <div className="leading-relaxed text-gray-900 text-4xl">
                Our Success is in creating your success
              </div>
              <div className="p-2">
            <button className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full h-70 place-content-center">
              BOOK A CONSULTATION
            </button>
          </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2793
              </h2>
              <p className="leading-relaxed">ACCOUNT NUMBER</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                935
              </h2>
              <p className="leading-relaxed">TRUSTED ADVISERS</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                832
              </h2>
              <p className="leading-relaxed">HAPPY CLIENTS</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                4813
              </h2>
              <p className="leading-relaxed">FINISHED PROJECTS</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://aie-internship.com/wp-content/uploads/Co-workers-working-in-start-up-office.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </>
  );
}
