import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/shared/logo.svg";
const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="Space tourism logo" />
        </Link>
      </div>

      <div>
        <NavLink to="/">
          <span>00{""}</span> <span>Home</span>
        </NavLink>
        <NavLink to="/destination">
          <span>01{""}</span> <span>Destination</span>
        </NavLink>
        <NavLink to="/crew">
          <span>02{""}</span> <span>Crew</span>
        </NavLink>
        <NavLink to="/technology">
          <span>03{""}</span> <span>Technology</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
