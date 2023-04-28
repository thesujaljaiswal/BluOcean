import React from "react";
import "./Footer.css";

export default function Footer() {
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
              <div className="border border-gray-200 p-6 rounded-lg bg-gray-750">
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
              <nav className="list-none mb-10 space-y-4">
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
          </div>
        </div>
      </footer>
    </>
  );
}
