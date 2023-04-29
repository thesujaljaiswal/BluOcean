import React from "react";

export default function Contactus() {
  return (
    <>
      <section className="text-gray-800 body-font relative">
        <div className="flex flex-wrap -m-2 w-full pt-10 px-5">
          <div className="p-2 lg:w-1/3 md:w-1/2">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-indigo-200">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={require("./contact.png")}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Email Address
                </h2>
                <p className="text-gray-800">bluocean001@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-indigo-200">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={require("./Location.png")}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Our Address
                </h2>
                <p className="text-gray-800">
                  Unit No.578C, Floor No 5,
                  <br />M G Magar, Sainath Industrial Complex,
                  <br />
                  Bhayandra Mumbai 401105.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-indigo-200">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={require("./timing.png")}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Hours</h2>
                <p className="text-gray-800">
                  Mon – Sat: 9am – 6pm
                  <br />
                  Sun: closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <h1 className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
              EFFECTIVE MANAGEMENT CONSULTANTS.
            </h1>
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
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
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
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Mobile no.
                  </label>
                  <input
                    type="number"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Post Here
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Training &#91;in years&#93;
                  </label>
                  <input
                    type="number"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Experience
                  </label>
                  <input
                    type="number"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full h-70 place-content-center">
                    Submit
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <iframe
            title="Adress"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3656760211425!2d72.855805!3d19.3099322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b134742ae5d9%3A0xe38ea07d339ee004!2sSAINATH%20INDUSTRIAL%20M.K.B!5e0!3m2!1sen!2sin!4v1682676473692!5m2!1sen!2sin"
            width="100%"
            height="450"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
