import React, { useState, useEffect } from 'react';
import './trainer.css';
import { getAdmins } from '../service/api';

const Trainers = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await getAdmins();
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  if (loading) {
    return <div className="trainer-list">Loading...</div>;
  }

  return (
    <div className="trainer-list">
      {admins.map((admin, idx) => {
        const status = admin.active ? 'available' : 'unavailable';

        return (
          <div
            className={`trainer-card glass ${status}`}
            key={idx}
          >
            <div className="trainer-img-wrapper">
              <img
                src={admin.image ? `http://localhost:8000/uploads/${admin.image}` : '/default-avatar.png'}
                alt={admin.name}
                className="trainer-img"
              />
              <span
                className={`status-dot ${status}`}
                title={admin.active ? 'Active' : 'Inactive'}
              ></span>
            </div>
            <h3>{admin.name}</h3>
            <p className="trainer-info">Fitness Administrator</p>
            <p className="trainer-about">Professional admin managing fitness operations.</p>
            <div className="trainer-price">Contact: {admin.mail}</div>
            <div className="trainer-status">
              {admin.active ? <span>Active</span> : <span>Inactive</span>}
            </div>
            <button
              className="book-btn"
              disabled={!admin.active}
            >
              Contact
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Trainers;
