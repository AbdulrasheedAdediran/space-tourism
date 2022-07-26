import { useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
    <div className={`main-bg ${activePage}`}>
      <Routes>
        <Route path="/" exact element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/destination" exact element={<Destination />} />
          <Route path="/crew" exact element={<Crew />} />
          <Route path="/technology" exact element={<Technology />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
