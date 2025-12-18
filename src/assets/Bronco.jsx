import React from "react";
import "./Bronco.css";

const bronco = () => {
  return (
    <div className="bronco-container">
      <header className="bronco-header">
        <h1>Bronco Test</h1>
        <p>Everything you need to know in one glance</p>
      </header>

      <div className="bronco-top">
        <section className="bronco-section">
          <h2>Process</h2>
          <p>
            The Bronco test measures endurance by running back and forth 
            between two points over a set period.
          </p>
        </section>

        <section className="bronco-section">
          <h2>Rules</h2>
          <ul>
            <li>Participants must follow the start signal.</li>
            <li>Maintain their lane.</li>
            <li>Complete as many laps as possible.</li>
          </ul>
        </section>

        <section className="bronco-section">
          <h2>Requirements</h2>
          <ul>
            <li>Flat running surface</li>
            <li>Cones to mark turning points</li>
            <li>Stopwatch or timer</li>
            <li>Sportswear</li>
          </ul>
        </section>

        <section className="bronco-section">
          <h2>Result Measurement</h2>
          <p>
            The total distance covered within the set time is recorded and 
            compared against performance standards.
          </p>
        </section>
      </div>

      <div className="bronco-video">
        <h2>Demo Video</h2>
        <iframe
          src="https://www.youtube.com/embed/Q-DeO-Vx6Wo"
          title="Bronco Test Demo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default bronco;



