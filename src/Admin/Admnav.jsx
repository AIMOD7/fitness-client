
import React from "react";
import { NavLink } from "react-router-dom";
import "./admin.css";

const Admnav = () => {
    return (
        <nav className="admin-navbar">
            <ul className="admin-nav-list">
                <li>
                    <NavLink to="/Adminpanel" className="admin-nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Landingpage" className="admin-nav-link">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Admnav;