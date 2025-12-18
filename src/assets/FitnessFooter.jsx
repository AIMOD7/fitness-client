import React from 'react';
import './fitnessfooter.css';

const FitnessFooter = () => {
  return (
    <footer className="fitness-footer">
      <div className="footer-content">
        {/* Left Section - Contact Info */}
        <div className="footer-section contact-info">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="footer-contact">
            <li>📍 2/3 Anandapur Road, Kolkata</li>
            <li>📞 9874641885</li>
            <li>✉️ cadrudra@gmail.com</li>
            <li>🕒 Mon-Fri: 5AM-11PM</li>
            <li>🕒 Sat-Sun: 7AM-9PM</li>
          </ul>
        </div>
        
        {/* Center Section - Brand */}
        <div className="footer-section brand-section">
         
         
          <div className="footer-bg-text">IGNITE </div>
        </div>
        
        {/* Right Section - Social Links */}
        <div className="footer-section social-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Map in Bottom Right Corner */}
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.203999366911!2d88.4331899759968!3d22.535508979519287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b1b057351f%3A0x8770a6bb5b1c7b45!2sAnandapur%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border:0, borderRadius: '12px'}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="FitZone Gym Location"
        ></iframe>
        <a 
          href="https://www.google.com/maps/place/Anandapur+Rd,+Kolkata,+West+Bengal/@22.535509,88.43319,16z/data=!4m6!3m5!1s0x3a0275b1b057351f:0x8770a6bb5b1c7b45!8m2!3d22.535509!4d88.43319!16s%2Fg%2F1thk8x0f?entry=ttu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="map-link"
        >
         
        </a>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 IGNITE Gym. All rights reserved.</p>
      </div>
      
      <div className="animated-bg">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </footer>
  );
};

export default FitnessFooter;