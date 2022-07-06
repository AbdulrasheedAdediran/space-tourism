import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact elements={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
