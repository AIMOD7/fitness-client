import React from 'react';
import './Services.css';
import service1 from './service1.jpg';
import service2 from './service2.jpg';
import service3 from './service3.jpg';
import service4 from './service4.jpg';
import service5 from './service5.jpg';
import service6 from './service6.jpg';

const services = [
  { img: service1, title: 'PERSONAL TRAINING' },
  { img: service2, title: 'GROUP CLASSES' },
  { img: service3, title: 'NUTRITIONAL PLANS' },
  { img: service4, title: 'YOGA & WELLNESS' },
  { img: service5, title: 'STRENGTH TRAINING' },
  { img: service6, title: 'CARDIO PROGRAMS' }
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>OUR SERVICES</h2>
      <div className="services-cards">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={service.img} alt={service.title} />
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;