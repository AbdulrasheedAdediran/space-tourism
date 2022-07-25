import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import bgImage from "../../assets/home/background-home-desktop.jpg";
const SharedLayout = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default SharedLayout;
