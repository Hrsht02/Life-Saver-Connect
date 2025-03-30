import "./homePage.css";
import React from "react";
import Navbar from "./navbar";

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <div id='HomePageImage'>
                <img src="/HomeImage.jpg" alt="Home Page" /> 
            </div>
        </div>
    );
}
