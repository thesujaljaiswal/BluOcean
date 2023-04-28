import React from 'react';
import './Navbar.css';
// import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 body-font bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="nav-img-logo" src={require('./blu ocean logo.png')} alt="Logos"/>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 font-semibold text-gray-50 hover:text-blue-600">Home</a>
            <a href="/" className="mr-5 font-semibold text-gray-50 hover:text-blue-600">Apply Now</a>
            <a href="/" className="mr-5 font-semibold text-gray-50 hover:text-blue-600">About Us</a>
            <a href="/" className="mr-5 font-semibold text-gray-50 hover:text-blue-600">Contact Us</a>
            <a href="/" className="mr-5 font-semibold text-gray-50 hover:text-blue-600">Complaint</a>
            <a href="/" className="mr-5 font-semibold text-gray-50 hover:text-blue-600">Refund</a>
          </nav>
        </div>
      </header>
    </>
  );
}
