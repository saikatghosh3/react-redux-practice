import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Brand */}
        <div className="logo">
          <Link to="/">ReduxLearn</Link>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/" end className="nav-item">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
