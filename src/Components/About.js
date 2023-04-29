import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="text-gray-800 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h4 className=" title-font font-medium mb-4 text-gray-600 ">
              WHY CHOOSE US
            </h4>
            <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
              BLU OCEAN SEAPORT AND CRUSESHIP ENGINEERING
            </h1>
            <h1 className="sm:text-xl text-xl font-medium title-font mb-4 text-blue-500">
              INDIA PRIVATE LIMITED
            </h1>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={require("./leadership.png")}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Leadership Training
                    </h2>
                    <p className="text-gray-500 text-align">
                      Leadership Training provides for the solutions to train
                      our companies employees
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={require("./corporated.png")}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Corporated Programs
                    </h2>
                    <p className="text-gray-500 text-align">
                      Corporate Programs provide for the solutions to train our
                      companies employees
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={require("./strategic.png")}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Strategic Partners
                    </h2>
                    <p className="text-gray-500 text-align">
                      Strategic Partners provides for the solutions to our
                      companies trained to employees.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={require("./people.png")}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      People Cohesion
                    </h2>
                    <p className="text-gray-500 text-align">
                      People Cohesion provides for the solutions to train to our
                      companies employees
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={require("./resource.png")}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Improving Resource
                    </h2>
                    <p className="text-gray-500 text-align">
                      Improving Resource provides for the solutions to train our
                      companies employees
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={require("./research.png")}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Research Strategy
                    </h2>
                    <p className="text-gray-500 text-align">
                      Research Strategy provides for the solutions to our
                      companies trained employees
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-0 py-10 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg"
                  src={require("./images.jpg")}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    WHO WE ARE
                  </h2>
                  <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                    We Choose a Human
                  </h1>
                  <h1 className="text-blue-500 text-4xl title-font font-medium mb-1">
                    Resources Services
                  </h1>

                  <p className="leading-relaxed pb-5 text-gray-900">
                    We provide candidates / jobs for all types of vacancies,
                    relating to Logistics industry , Shipping Lines , Warehouses
                    , IT Sector, Accounts Sector,Insurance , Import , Export
                    divisions , Customs Brokers , Freight forwarders,
                    Transportation Sectors, Manufacturing Units,MNCs, etc.
                  </p>
                  <p className="leading-relaxed pb-3 text-gray-900">
                    {" "}
                    Because we focus on results. For us, it’s all about what
                    adds value for you and your jobs. Above all, we want our
                    words to work for you.
                  </p>
                  <p className="leading-relaxed pb-3 text-gray-900">
                    {" "}
                    Because we’ve been there and done it.
                  </p>
                  <Link to="/Contactus">
                    <p className="hover:text-orange-500 text-gray-900 font-medium underline underline-offset-3">
                      Contact Here &#8594;{" "}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
