import React from "react";
import "./Navbar.css";



export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="left-box">
        <h1 className="heading">Life Saver <br />Connect</h1>
        <p className="punch-line">
          Your Health, Our Commitment: Hospitals, Tests, and Beyond!
        </p>
      </div>

      <div className="right-box">
        <ul className="nav-menu">
          <li><a href="https://hospital-locator-tau.vercel.app/">Hospital</a></li>
          <li><a href="https://ambulance-locator.vercel.app/">Ambulance</a></li>
          <li onClick={() => scrollToSection("HomePageImage")} style={{ cursor: "pointer" }}>Home</li>
          <li onClick={() => scrollToSection("about-container")} style={{ cursor: "pointer" }}>About Us</li>
          
          <li><img src="/Profile.png" alt="Profile" height="25" width="25" /></li>
        </ul>
      </div>
    </nav>
  );
}
