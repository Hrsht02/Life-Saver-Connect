import { useState } from "react";
import "./services.css";


export default function Service() {
    const [showHospitals, setShowHospitals] = useState(false);

    return (
        <>
            <h1 id="service">Services</h1>
            <div className="service">
                <a href="https://hospital-locator-tau.vercel.app/" className="service-card"> Hospital </a>
                <a href="https://ambulance-locator.vercel.app/"  className="service-card"> Ambulance </a>
                <a className="service-card" href="https://diagnosis-center-locator.vercel.app/">Laboratory</a>
                <a className="service-card" href="https://blood-bank-locator-3bsy.vercel.app/">Blood Bank</a>
                <button className="service-card">Medicine</button>
                <button className="service-card">Health Care Tools</button>
            </div>

            {/* ✅ Show HospitalList only when button is clicked */}
            {showHospitals && <HospitalList />}
        </>
    );
}
