import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <>
      <footer className="text-gray-600 body-font bg-gray-800 space-y-4">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <img
                className="nav-img-logo"
                src={require("./blu ocean logo.png")}
                alt="Logos"
              />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="xl:w-1/3 md:w-1/2 pr-4 pl-4 pb-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-gray-800">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-indigo-300 font-medium title-font mb-2">
                  Contact Here
                </h2>
                <a href="tel:7400256640">
                  <p className="leading-relaxed text-base text-gray-200">
                    +91 74002 56640
                  </p>
                </a>
                <a href="mailto:bluocean001@gmail.com">
                  <p className="leading-relaxed text-base text-gray-200">
                    bluocean001@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-10">
              <h2 className="title-font font-medium text-blue-300 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="/"
                    className="font-bold text-gray-50 hover:text-blue-600"
                  >
                    &gt; Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-bold text-gray-50 hover:text-blue-600"
                  >
                    &gt; Apply Now
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-bold text-gray-50 hover:text-blue-600"
                  >
                    &gt; About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-bold text-gray-50 hover:text-blue-600"
                  >
                    &gt; Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-bold text-gray-50 hover:text-blue-600"
                  >
                    &gt; Complaint
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-bold text-gray-50 hover:text-blue-600"
                  >
                    &gt; Refund
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Blue Ocean - All Rights Reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="/" className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
