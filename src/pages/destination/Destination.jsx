import { NavLink, Outlet } from "react-router-dom";
import data from "../../../data.json";
const Destination = () => {
  const destinations = data.destinations;

  return (
    <section>
      <h1>
        <span>00</span> <span>Pick your destination</span>
      </h1>
      {destinations.map((destination) => (
        <nav key={destination.name}>
          <NavLink to={`/destination/${destination.name}`}>
            {destination.name}
          </NavLink>
        </nav>
      ))}
      <Outlet />
    </section>
  );
};

export default Destination;
