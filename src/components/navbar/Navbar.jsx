import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/shared/logo.svg";
import closeIcon from "../../../assets/shared/icon-close.svg";
import menuIcon from "../../../assets/shared/icon-hamburger.svg";
import "./Navbar.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Space tourism logo" />
        </Link>
      </div>

      <nav className={`nav__links ${isOpen ? "show" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <span>00</span>
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <span>01</span>
          <span>Destination</span>
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <span>02</span>
          <span>Crew</span>
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <span>03</span>
          <span>Technology</span>
        </NavLink>
      </nav>

      <button
        aria-label="menu button"
        className="menu-btn"
        onClick={toggleMenu}
      >
        <img
          src={menuIcon}
          alt=""
          className={`menu-icon ${isOpen ? "hide" : "show"}`}
        />
        <img
          src={closeIcon}
          alt=""
          className={`menu-icon ${isOpen ? "show" : "hide"}`}
        />
      </button>
    </section>
  );
};

export default Navbar;
