import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "./App.scss";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/destination/Destination";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
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
