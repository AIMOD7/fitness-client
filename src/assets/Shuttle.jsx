import React from "react";
import "./Shuttle.css";

const Shuttle = () => {
  return (
    <div className="shuttle-container">
      <header className="shuttle-header">
        <h1>Shuttle Run Test</h1>
        <p>Everything you need to know in one glance</p>
      </header>

      <div className="shuttle-top">
        <section className="shuttle-section">
          <h2>Process</h2>
          <p>
            Run back and forth between two points (20m apart) at increasing
            speeds dictated by beeps.
          </p>
        </section>

        <section className="shuttle-section">
          <h2>Rules</h2>
          <ul>
            <li>Start from a stationary position.</li>
            <li>Reach the line before the beep.</li>
            <li>Two misses end the test.</li>
          </ul>
        </section>

        <section className="shuttle-section">
          <h2>Requirements</h2>
          <ul>
            <li>Flat surface</li>
            <li>Two markers (20m apart)</li>
            <li>Beep audio</li>
            <li>Sportswear</li>
          </ul>
        </section>

        <section className="shuttle-section">
          <h2>Result Measurement</h2>
          <p>
            Based on the last level completed. Used to estimate VO₂ max and
            endurance.
          </p>
        </section>
      </div>

      <div className="shuttle-video">
        <h2>Demo Video</h2>
        <iframe
          src="https://www.youtube.com/embed/gTW22RZacCc"
          title="Shuttle Run Test Demo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Shuttle;






