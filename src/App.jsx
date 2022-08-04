import * as React from "react";
import { useState, useLayoutEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
const Homepage = React.lazy(() => import("./pages/homepage/Homepage"));
const Crew = React.lazy(() => import("./pages/crew/Crew"));
const Technology = React.lazy(() => import("./pages/technology/Technology"));
const Destination = React.lazy(() => import("./pages/destination/Destination"));
const SharedLayout = React.lazy(() => import("./pages/SharedLayout"));
const Error = React.lazy(() => import("./pages/Error"));

const App = () => {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();
  useLayoutEffect(() => {
    setActivePage(() => location.pathname.split("/")[1]);
  }, [location]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={`main-bg ${activePage}`}>
        <Suspense fallback={<Navbar />}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" exact element={<SharedLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/destination" exact element={<Destination />} />
              <Route path="/crew" exact element={<Crew />} />
              <Route path="/technology" exact element={<Technology />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

export default App;
