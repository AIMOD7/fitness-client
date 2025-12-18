import React from "react";
import "./Yoyo.css";

const Yoyo = () => {
  return (
    <div className="yoyo-container">
      <header className="yoyo-header">
        <h1>Yo Yo Test</h1>
        <p>Everything you need to know in one glance</p>
      </header>

      <div className="yoyo-top">
        <section className="yoyo-section">
          <h2>Process</h2>
          <p>
           In the Yo-Yo Test, participants run 20 m shuttles with timed beeps and brief recoveries, 
           increasing speed until they can’t maintain the pace.
          </p>
        </section>

        <section className="yoyo-section">
          <h2>Rules</h2>
          <ul>
            <li>Touch markers on time.</li>
            <li>no walking.</li>
            <li>wear proper sports gear.</li>
          </ul>
        </section>

        <section className="yoyo-section">
          <h2>Requirements</h2>
          <ul>
            <li>Audio device.</li>
            <li>20 m markers, safe surface.</li>
            <li>proper sports gear.</li>
          </ul>
        </section>

        <section className="yoyo-section">
          <h2>Result Measurement</h2>
          <p>
        Yo-Yo Test performance is measured by total distance and level reached, 
        with greater distances indicating better aerobic fitness, compared against normative tables.
          </p>
        </section>
      </div>

      <div className="yoyo-video">
        <h2>Demo Video</h2>
        <iframe
          src="https://www.youtube.com/embed/nkOk_P5VnOA"
          title="Yo Yo Run Test Demo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Yoyo;