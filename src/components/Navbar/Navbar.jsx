import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/shared/logo.svg";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <section>
      <div>
        <Link to="/">
          <img src={logo} alt="Space tourism logo" />
        </Link>
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <span>00{""}</span> <span>Home</span>
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <span>01{""}</span> <span>Destination</span>
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <span>02{""}</span> <span>Crew</span>
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <span>03{""}</span> <span>Technology</span>
        </NavLink>
      </nav>
    </section>
  );
};

export default Navbar;
