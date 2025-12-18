import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();


    const handleJoinClick = () => {

        navigate('/Landingpage');

    };
    const handleHomeClick = () => {

        navigate('/Hero');

    };
    const handleServicesClick = () => {

        navigate('/Services');

    };
    const handlePremiumClick = () => {

        navigate('/Memberships');

    };
    const handleAboutClick = () => {

        navigate('/AboutUs');

    };
    const handleContactClick = () => {

        navigate('/FitnessFooter');

    };

  return (
    <>
        <div> <nav><NavLink to={'/Landingpage'} className={'land'}></NavLink></nav></div>
        <div> <nav><NavLink to={'/Hero'} className={'hero'}></NavLink></nav></div>
        <div> <nav><NavLink to={'/AboutUs'} className={'about'}></NavLink></nav></div>
        <div> <nav><NavLink to={'/Services'} className={'serve'}></NavLink></nav></div>
        <div> <nav><NavLink to={'/Memberships'} className={'mem'}></NavLink></nav></div>
        <div> <nav><NavLink to={'/FitnessFooter'} className={'contact'}></NavLink></nav></div>
      <nav className="navbar">
        <div className="nav-links">
          <a href="/" onClick={handleHomeClick}>Home</a>
          <a href="/about" onClick={handleAboutClick}>About</a>
          <a href="/services" onClick={handleServicesClick}>Services</a>
          <a href="/contact" onClick={handleContactClick}>Contact</a>
          <a href="/Premium" onClick={handlePremiumClick}>Premium</a>
        </div>
      </nav>
      <button className="join-btn" onClick={handleJoinClick}>JOIN</button>
    </>
  );
};

export default Navbar;