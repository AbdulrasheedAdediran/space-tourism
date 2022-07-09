import { NavLink } from "react-router-dom";
import data from "../../../data.json";
const Destination = () => {
  const destinations = data.destinations;
  const [
    {
      name,
      images: { png, webp },
      description,
      distance,
      travel,
    },
  ] = destinations;

  return (
    <section>
      <nav>
        {destinations.map((destination) => (
          <nav key={destination.name}>
            <NavLink to={destination.name}>{destination.name}</NavLink>
          </nav>
        ))}
      </nav>
      <li>{name}</li>
      <li>
        <img src={png} alt="" />
      </li>
      <li>{description}</li>
      <li>{distance}</li>
      <li>{travel}</li>
    </section>
  );
};

export default Destination;
