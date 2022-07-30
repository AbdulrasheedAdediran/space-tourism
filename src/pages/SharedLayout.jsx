import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/Navbar";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.section>
    </>
  );
};

export default SharedLayout;
