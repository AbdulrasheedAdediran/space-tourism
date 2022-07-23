import { NavLink, Outlet, useParams } from "react-router-dom";
import data from "../../../data.json";
const Destination = () => {
  const { moon } = useParams();
  const destinations = data.destinations;
  // const destination = destinations.find(
  //   (destination) => destination.name === destinationName
  // );
  const {
    name,
    // images: { png, webp },
    description,
    distance,
    travel,
  } = destinations;

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
