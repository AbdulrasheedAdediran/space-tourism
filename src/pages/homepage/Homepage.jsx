import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Homepage;
