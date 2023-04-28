import React from "react";
import './Content.css';
import { Link } from "react-router-dom";

export default function Content(props) {
  console.log('in contact page')
  return (
    <>
      <div className="page-details-container">
        <div>
            <p className="font-sans text-5xl font-bold pl-16 text-blue-800">{props.maintitle}</p>
        </div>
        <div>
            <p className="font-sans text-2xl pl-16"><Link to="/" className="text-gray-50 hover:text-blue-800">Blu Ocean</Link> &gt; {props.maintitle}</p>
        </div>
      </div>
    </>
  );
}
