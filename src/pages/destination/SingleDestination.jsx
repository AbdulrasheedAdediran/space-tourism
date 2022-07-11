import { Link, NavLink, useParams } from "react-router-dom";
import data from "../../../data.json";
const SingleDestination = () => {
  const { destinationName } = useParams();
  const destinations = data.destinations;
  const destination = destinations.find(
    (destination) => destination.name === destinationName
  );
  const {
    name,
    images: { png, webp },
    description,
    distance,
    travel,
  } = destination;

  return (
    <section>
      <h1>{destinationName}</h1>
      <nav>
        {destinations.map((destination) => (
          <nav key={destination.name}>
            <NavLink to={`/destination/${destination.name}`}>
              {destination.name}
            </NavLink>
          </nav>
        ))}
      </nav>
      <li>{name}</li>
      <li>
        <img src={png} alt={`Image of ${name}`} />
      </li>
      <li>
        <img src={webp} alt={`Image of ${name}`} />
      </li>
      <li>{description}</li>
      <li>{distance}</li>
      <li>{travel}</li>
      <Link to="/destination">Destination</Link>
    </section>
  );
};

export default SingleDestination;
