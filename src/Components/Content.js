import React from "react";
import './Content.css';

export default function Content(props) {
  return (
    <>
      <div className="page-details-container">
        <div>
            <p className="font-sans text-5xl font-bold pl-10 text-blue-800">{props.maintitle}</p>
        </div>
        <div>
            <p className="font-sans text-2xl pl-10"><a href="/" className="text-gray-50 hover:text-blue-800">Blu Ocean</a> &gt; {props.maintitle}</p>
        </div>
      </div>
    </>
  );
}
