import React from "react";
import "./footer.css";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-left">
                    <h2>Life Saver Connect</h2>
                    <p><FaEnvelope /> Hrsht002@gmail.com</p>
                    <p><FaPhone /> 913531****</p>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaLinkedin />
                        <FaYoutube />
                        <FaInstagram />
                    </div>
                </div>

                {/* Right Section (Services, Health, Life Enhancement) */}
                <div className="footer-right">
                    <div className="footer-section">
                        <h3>Services</h3>
                        <p>Hospitals</p>
                        <p>Ambulance</p>
                        <p>Medicine</p>
                        <p>Blood Bank</p>
                        <p>Laboratory</p>
                    </div>

                    <div className="footer-section">
                        <h3>Health Maintenance</h3>
                        <p>BMI</p>
                        <p>BMR</p>
                    </div>

                    <div className="footer-section">
                        <h3>Life Enhancement</h3>
                        <p>Medicine Assistant</p>
                        <p>Hydration Reminder</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
