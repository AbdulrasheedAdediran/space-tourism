import { useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./pages/homepage/Homepage";
import "./App.scss";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/destination/Destination";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";

// import image from

const App = () => {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();
  useLayoutEffect(() => {
    setActivePage(() => location.pathname.split("/")[1]);
  }, [location]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={`main-bg ${activePage}`}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" exact element={<SharedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/destination" exact element={<Destination />} />
            <Route path="/crew" exact element={<Crew />} />
            <Route path="/technology" exact element={<Technology />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;
