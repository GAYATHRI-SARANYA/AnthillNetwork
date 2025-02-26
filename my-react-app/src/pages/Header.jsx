import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">Carspace</div>
      <nav className="nav-links">
        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
        <NavLink to="/certified" activeClassName="active-link">Certified Pre-Owned</NavLink>
      </nav>
      <div className="header-actions">
        <button className="compare-button">Compare Cars</button>
        <div className="user-profile">
          <span className="profile-icon">👤</span>
          <NavLink to="/profile" activeClassName="active-link">User Profile</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
