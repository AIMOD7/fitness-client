import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./home.css";
import gymLogo from "./gymlogo.jpg";

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    const menuItems = [
        { label: "Login", to: "/Loginpage1" },
        { label: "BMI", to: "/BMI" },
        { label: "Contact", to: "/Contact" },
        { label: "Trainers", to: "/Trainers" },
        { label: "Diet", to: "/Diet" },
        { label: "Workouts", to: "/Workouts" }
    ];
    
    const navItems = [
        { label: "Home", to: "/Home" },
        { label: "About", to: "/About" },
        { label: "Shop", to: "/Shop" },
        { label: "Contact", to: "/Contact" }
    ];

    const fitnessTests = [
        { name: "Shuttle run test", route: "/Shuttle" },
        { name: "Bronco test", route: "/Bronco" },
        { name: "Yo Yo test", route: "/YoYo" },
        { name: "Lung capacity test", route: "/Lungs" },
        { name: "Cooper test", route: "/Cooper" },
        { name: "Illinois Agility test", route: "/Illinois" }
    ];

    const navigate = useNavigate();

    const handleTrainingClick = () => {
        navigate('/Workouts');
    };

    const handleTestClick = (route) => {
        if (route) {
            navigate(route);
        }
    };

    return (
        <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="sidebar">
                <div className="logo-container">
                    <img src={gymLogo} alt="Gym Logo" className="logo" />
                </div>

                <h2 className="sidebar-title">Dashboard</h2>
                <ul className="menu">
                    {menuItems.map((item, index) => (
                        <li key={index} className="menu-item">
                            <NavLink to={item.to} className="menu-link">
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="main-content">
                <nav className="top-nav">
                    <ul className="nav-items">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <NavLink to={item.to} className="nav-link">
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-controls">
                        <button
                            className="theme-toggle"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </nav>

                <div className="content-area">
                    <div>
                        <div className="Motive" style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h1 className="gradient-text">"Push yourself, Set your Heart Blaze in Fire !"</h1><br />
                            <button className="cta-button" onClick={handleTrainingClick}>Start Training</button>
                        </div>
                        
                        {/* Fitness Test Cards */}
                        <div className="cards-container">
                            {fitnessTests.map((test, index) => (
                                <div 
                                    key={index} 
                                    className="test-card" 
                                    onClick={() => handleTestClick(test.route)}
                                    style={{ cursor: test.route ? 'pointer' : 'default' }}
                                >
                                    <h3>{test.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
