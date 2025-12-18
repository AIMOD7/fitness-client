import React, { useEffect, useState } from 'react';
import './aboutus.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-us-page">
      <div className="background-image"></div>
      
      <div className={`about-content ${isVisible ? 'visible' : ''}`}>
        <h1>About Our Gym</h1>
        <p>
          At Iron Temple, we believe fitness is more than just exercise - it's a lifestyle. 
          Founded in 2010, we've helped thousands of members transform their lives through 
          our state-of-the-art facilities, expert trainers, and supportive community. Our 
          20,000 sq. ft. facility features the latest equipment, functional training zones, 
          and diverse classes for all fitness levels. We're committed to helping you achieve 
          your goals in a motivating environment where everyone feels welcome.
        </p>
        <div className="stats-container">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Members Transformed</p>
          </div>
          <div className="stat">
            <h3>15</h3>
            <p>Expert Trainers</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;