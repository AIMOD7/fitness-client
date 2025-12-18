import React from "react";
import "./Cooper.css";

const Cooper = () => {
  return (
    <div className="cooper-container">
      <header className="cooper-header">
        <h1>Cooper Test</h1>
        <p>Everything you need to know in one glance</p>
      </header>

      <div className="cooper-top">
        <section className="cooper-section">
          <h2>Process</h2>
          <p>
        Run as far as possible in 12 minutes on a track or 
        flat area at a steady pace without stopping.
          </p>
        </section>

        <section className="cooper-section">
          <h2>Rules</h2>
          <ul>
            <li>Start on signal and run without walking.</li>
            <li>Track 12 minutes with a stopwatch.</li>
            <li>Record distance exactly when time ends.</li>
          </ul>
        </section>

        <section className="cooper-section">
          <h2>Requirements</h2>
          <ul>
            <li>Stopwatch or timer and a marked track.</li>
            <li>Sports attire and running shoes.</li>
            <li>Optional: cones for marking distances.</li>
          </ul>
        </section>

        <section className="cooper-section">
          <h2>Result Measurement</h2>
          <p>
            Measure the total distance covered in 12 minutes and compare 
            it with age/gender standards to assess aerobic fitness.
          </p>
        </section>
      </div>

      <div className="cooper-video">
        <h2>Demo Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ko1qHVN7DXo"
          title="Cooper Test Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Cooper;
