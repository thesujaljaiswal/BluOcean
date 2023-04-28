import React from 'react'

export default function Apply() {
  return (
   <>
      <section className="text-gray-800 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-sm">
              APPLY NOW
            </h1>
            <h4 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-500">
            SHIPYARD | CRUISESHIP | CARGO VESSEL | SEAPORT & OIL RIG
            </h4>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
            Manpower For Cruise Ship & Shipyard Maintenance South America, Australia, Canada Based Company Work Now In India Age Between 18-48 Years, Salary 30,000/- To 1,80,000
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ps-8"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Mobile No.
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Post
                  </label>
             
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Experience
                  </label>
         
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Address
                  </label>
           
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
             
              
                <div className="p-2 w-1/2">
                <div className="relative">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Resume:
                  </label>
           
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded text-lg">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
}

