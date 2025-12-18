import React, { useState } from 'react';
import './memberships.css';

const member = [
  {
    name: 'Bronze',
    gradient: 'linear-gradient(135deg, #7b5e27 0%, #c7903f 100%)',
    features: ['Access to gym', '1 group class/week', 'Standard support'],
  },
  {
    name: 'Silver',
    gradient: 'linear-gradient(135deg, #757f9a 0%, #d7dde8 100%)',
    features: ['All Bronze features', '3 group classes/week', 'Priority support'],
  },
  {
    name: 'Gold',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    features: ['All Silver features', 'Unlimited classes', 'Personal trainer'],
  },
];

const Memberships=()=> {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = idx => {
    setFlipped(f => f.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <section className="memberships-section">
      <h2>Choose Your Membership</h2>
      <div className="memberships-cards">
        {member.map((m, idx) => (
          <div
            className={`membership-card${flipped[idx] ? ' flipped' : ''}`}
            key={m.name}
            onClick={() => handleFlip(idx)}
            style={{ '--card-gradient': m.gradient }}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>{m.name} Member</h3>
              </div>
              <div className="card-back">
                <h4>Features</h4>
                <ul>
                  {m.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Memberships