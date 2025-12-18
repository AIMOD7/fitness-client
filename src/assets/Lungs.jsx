import React, { useState, useRef, useEffect } from "react";
import "./lungs.css";

const Lungs = () => {
  const [capacity, setCapacity] = useState("");
  const [testStarted, setTestStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const timerRef = useRef(null);

  // Start the timer when test starts
  const startTest = () => {
    setTestStarted(true);
    setTestCompleted(false);
    setTimer(0);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 0.1);
    }, 100);
  };

  // Stop the timer and simulate lung capacity calculation
  const stopTest = () => {
    clearInterval(timerRef.current);
    setTestStarted(false);
    setTestCompleted(true);
    // Simulate lung capacity in liters based on timer (for demo)
    const simulatedCapacity = (timer * 0.5).toFixed(2);
    setCapacity(simulatedCapacity);
  };

  // Reset test
  const resetTest = () => {
    clearInterval(timerRef.current);
    setTestStarted(false);
    setTestCompleted(false);
    setTimer(0);
    setCapacity("");
  };

  // Handle manual input change
  const handleInputChange = (e) => {
    const val = e.target.value;
    if (/^\d*\.?\d*$/.test(val)) {
      setCapacity(val);
      setTestCompleted(false);
    }
  };

  return (
    <div className="lungs-container">
      <h1>Lung Capacity Test</h1>
      <p className="description">
        Measure your lung capacity by holding your breath or blowing steadily.
        Press "Start Test" to begin timing, and "Stop Test" when you finish.
        Alternatively, enter your lung capacity manually below.
      </p>

      <div className="test-area">
        <div className="timer-display">
          <span className="timer-label">Timer:</span>{" "}
          <span className="timer-value">{timer.toFixed(1)} s</span>
        </div>

        <div className="buttons">
          {!testStarted && (
            <button className="btn start-btn" onClick={startTest}>
              Start Test
            </button>
          )}
          {testStarted && (
            <button className="btn stop-btn" onClick={stopTest}>
              Stop Test
            </button>
          )}
          {(testCompleted || capacity) && (
            <button className="btn reset-btn" onClick={resetTest}>
              Reset
            </button>
          )}
        </div>

        <div className="result">
          {testCompleted && (
            <p>
              Your estimated lung capacity is{" "}
              <strong>{capacity} liters</strong>.
            </p>
          )}
        </div>

        <div className="manual-input">
          <label htmlFor="capacityInput">Or enter lung capacity (liters):</label>
          <input
            type="text"
            id="capacityInput"
            placeholder="e.g. 4.5"
            value={capacity}
            onChange={handleInputChange}
            aria-label="Lung capacity input"
          />
        </div>
      </div>
    </div>
  );
};

export default Lungs;