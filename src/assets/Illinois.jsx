import React from "react";
import "./illinois.css";

const Illinois = () => {
  return (
    <div className="illi-container">
      <header className="illi-header">
        <h1>Illinois Agility Test</h1>
        <p>Everything you need to know in one glance</p>
      </header>

      <div className="illi-top">
        <section className="illi-section">
          <h2>Process</h2>
          <p>
            Sprint through a marked course with straight and slalom 
            sections from a lying or standing start as fast as possible.

          </p>
        </section>

        <section className="illi-section">
          <h2>Rules</h2>
          <ul>
            <li>Start only when signaled.</li>
            <li>Follow the marked path; do not knock over cones.</li>
            <li>Time stops immediately upon crossing the finish line.</li>
          </ul>
        </section>

        <section className="illi-section">
          <h2>Requirements</h2>
          <ul>
            <li>Stopwatch or timer.</li>
            <li>Marked course with cones (10 × 5 m) and start/finish lines.</li>
            <li>Sports attire and running shoes.</li>
          </ul>
        </section>

        <section className="illi-section">
          <h2>Result Measurement</h2>
          <p>
            Record the total time to complete the 
            course and compare with standard values to assess agility.
          </p>
        </section>
      </div>

      <div className="illi-video">
        <h2>Demo Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CMiRYfuzhWA"
          title="Cooper Test Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Illinois;
