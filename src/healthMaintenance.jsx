import React, { useState } from "react";
import "./healthMaintenance.css";

const HealthMaintenance = () => {
    const [bmiData, setBmiData] = useState({ weight: "", height: "", bmi: null });
    const [bmrData, setBmrData] = useState({ weight: "", height: "", age: "", gender: "male", bmr: null });

    // BMI Calculation
    const calculateBMI = () => {
        if (!bmiData.weight || !bmiData.height) return;
        const heightMeters = bmiData.height / 100;
        const bmi = (bmiData.weight / (heightMeters * heightMeters)).toFixed(2);
        setBmiData((prev) => ({ ...prev, bmi }));
    };

    // BMR Calculation
    const calculateBMR = () => {
        if (!bmrData.weight || !bmrData.height || !bmrData.age) return;
        let bmr;
        if (bmrData.gender === "male") {
            bmr = 88.36 + 13.4 * bmrData.weight + 4.8 * bmrData.height - 5.7 * bmrData.age;
        } else {
            bmr = 447.6 + 9.2 * bmrData.weight + 3.1 * bmrData.height - 4.3 * bmrData.age;
        }
        setBmrData((prev) => ({ ...prev, bmr: bmr.toFixed(2) }));
    };

    return (
        <div className="health-container">
            <h2>Health Maintenance</h2>
            <p className="health-description">Monitor your BMI & BMR to maintain a healthy lifestyle.</p>

            <div className="health-bottom">
                {/* BMR Section */}
                <div className="health-section">
                    <h3>Calculate BMR</h3>
                    <div className="input-container">
                        <label>Weight (kg):</label>
                        <input 
                            type="number" 
                            value={bmrData.weight} 
                            onChange={(e) => setBmrData({ ...bmrData, weight: e.target.value })} 
                        />

                        <label>Height (cm):</label>
                        <input 
                            type="number" 
                            value={bmrData.height} 
                            onChange={(e) => setBmrData({ ...bmrData, height: e.target.value })} 
                        />

                        <label>Age (years):</label>
                        <input 
                            type="number" 
                            value={bmrData.age} 
                            onChange={(e) => setBmrData({ ...bmrData, age: e.target.value })} 
                        />

                        <label>Gender:</label>
                        <select 
                            value={bmrData.gender} 
                            onChange={(e) => setBmrData({ ...bmrData, gender: e.target.value })}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <button onClick={calculateBMR}>Calculate BMR</button>
                        {bmrData.bmr && <p>Your BMR: <strong>{bmrData.bmr}</strong> kcal/day</p>}
                    </div>
                </div>

                {/* BMI Section */}
                <div className="health-section">
                    <h3>Calculate BMI</h3>
                    <div className="input-container">
                        <label>Weight (kg):</label>
                        <input 
                            type="number" 
                            value={bmiData.weight} 
                            onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })} 
                        />

                        <label>Height (cm):</label>
                        <input 
                            type="number" 
                            value={bmiData.height} 
                            onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })} 
                        />

                        <button onClick={calculateBMI}>Calculate BMI</button>
                        {bmiData.bmi && <p>Your BMI: <strong>{bmiData.bmi}</strong></p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthMaintenance;
