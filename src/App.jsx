import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
