import "./homePage.css";
import React from "react";
import Navbar from "./Navbar";

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <div id='HomePageImage'>
                 {/* <img src="/hero-image.jpg"  alt="Home Page" />  */}
            </div>
        </div>
    );
}
