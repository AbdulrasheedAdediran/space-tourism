import React from "react";
import logo from "../../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Space tourism logo" />
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/crew">Crew</NavLink>
        <NavLink to="/technology">Technology</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
