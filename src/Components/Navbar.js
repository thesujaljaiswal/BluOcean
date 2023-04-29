import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <header className="text-gray-600 body-font bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="nav-img-logo" src={require('./blu ocean logo.png')} alt="Logos"/>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className={`mr-5 font-semibold ${props.home}`}>Home</Link>
            <Link to="/applynow" className={`mr-5 font-semibold ${props.applynow}`}>Apply Now</Link>
            <Link to="/aboutus" className={`mr-5 font-semibold ${props.aboutus}`}>About Us</Link>
            <Link to="/contactus" className={`mr-5 font-semibold ${props.contactus}`}>Contact Us</Link>
            <Link to="/complaint" className={`mr-5 font-semibold ${props.complaint}`}>Complaint</Link>
            <Link to="/refund" className={`mr-5 font-semibold ${props.refund}`}>Refund</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
