import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/shared/logo.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);
  useEffect(() => {
    const listener = () => {
      if (logoRef && logoRef.current) {
        navigate("/");
      }
    };
    logoRef.current.addEventListener("click", listener);
    return () => {
      logoRef.current.removeEventListener("click", listener);
    };
  }, [logoRef]);
  return (
    <nav>
      <div>
        <img ref={logoRef} src={logo} alt="Space tourism logo" />
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
