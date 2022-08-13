import { useRef, useState, useEffect } from "react";
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
  if (isOpen && typeof window !== "undefined" && window.document) {
    document.body.style.overflowY = "hidden"
  } else  {
    document.body.style.overflowY = "unset"  
  }
  const navRef = useRef();
  let lastScrollTop;
  useEffect(() => {
    const scrollListener = () => {
      if (typeof window !== "undefined" && window.document) {
        const scrollTop = document.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navRef.current.style.top = "-30%"
      } else {
        navRef.current.style.top = "0"
      }
      lastScrollTop = scrollTop;
     }
    }
    window.addEventListener("scroll", scrollListener)
  
    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [lastScrollTop])
  

    
  return (
    <section className="navbar" ref={navRef}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Space tourism logo" />
        </Link>
      </div>

      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={toggleMenu}></div>

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
