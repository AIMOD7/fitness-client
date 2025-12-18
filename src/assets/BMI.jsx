import React, { useState } from "react";
import "./bmi.css";

const BMIAssessment = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState(""); // NEW: age
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [showResults, setShowResults] = useState(false);

  const calculateBMI = () => {
    if (!height || !weight || !age) {
      alert("Please enter height, weight, and age.");
      return;
    }

    const heightInMeters = Number(height) / 100;
    if (heightInMeters <= 0 || Number(weight) <= 0 || Number(age) <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }

    const bmiValue = Number(
      (Number(weight) / (heightInMeters * heightInMeters)).toFixed(2)
    );
    setBmi(bmiValue);

    if (bmiValue < 18.5) setBmiCategory("Underweight");
    else if (bmiValue < 25) setBmiCategory("Normal");
    else if (bmiValue < 30) setBmiCategory("Overweight");
    else setBmiCategory("Obese");

    setShowResults(true);
  };

  const getHealthyWeightRange = () => {
    if (!height) return "";
    const h = Number(height) / 100;
    const minWeight = (18.5 * h * h).toFixed(1);
    const maxWeight = (24.9 * h * h).toFixed(1);
    return `${minWeight}kg - ${maxWeight}kg`;
  };

  const getPointerPosition = () => {
    if (!bmi) return "0%";
    const value = Number(bmi);
    if (value < 18.5) return "10%";
    if (value < 25) return "35%";
    if (value < 30) return "65%";
    return "90%";
  };

  return (
    <div className="bmi-container">
    <div className="bmi-wrapper">
      {/* LEFT: Inputs */}
      <div className="bmi-input-card">
        <h2 className="bmi-title">BMI Calculator</h2>

        {/* Gender choice */}
        <div className="gender-section">
          <label className="field-label">Gender</label>
          <div className="gender-group">
            <button
              type="button"
              className={`gender-btn ${gender === "male" ? "active" : ""}`}
              onClick={() => setGender("male")}
            >
              Male
            </button>
            <button
              type="button"
              className={`gender-btn ${gender === "female" ? "active" : ""}`}
              onClick={() => setGender("female")}
            >
              Female
            </button>
            <button
              type="button"
              className={`gender-btn ${gender === "other" ? "active" : ""}`}
              onClick={() => setGender("other")}
            >
              Other
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="bmi-inputs">
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setShowResults(false);
            }}
          />
          <input
            type="number"
            placeholder="Enter Height (cm)"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
              setShowResults(false);
            }}
          />
          <input
            type="number"
            placeholder="Enter Weight (kg)"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setShowResults(false);
            }}
          />
          <button onClick={calculateBMI}>Calculate BMI</button>
        </div>
      </div>

      {/* RIGHT: Results */}
      {showResults && (
        <div className="bmi-result-card">
          <h3>
            Your BMI Result{" "}
            {gender ? `(${gender}, Age: ${age})` : `(Age: ${age})`}
          </h3>

          <div className="bmi-circle animate-circle">
            <span>{bmi}</span>
          </div>

          <p className="bmi-category">Category: {bmiCategory}</p>
          <p className="bmi-range">
            Healthy Weight Range: {getHealthyWeightRange()}
          </p>

          <div className="bmi-bar">
            <div className="bar-color"></div>
            <div
              className="bmi-pointer"
              style={{ left: getPointerPosition() }}
            ></div>
            
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default BMIAssessment;
