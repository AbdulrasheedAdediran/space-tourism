import { useEffect } from "react";
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
    // images: { png, webp },
    description,
    distance,
    travel,
  } = destination;

  return (
    <section>
      <h1>Active Destination: {destinationName}</h1>

      <li>{name}</li>

      <li>{description}</li>
      <li>{distance}</li>
      <li>{travel}</li>
      <Link to="/destination">Destination</Link>
    </section>
  );
};

export default SingleDestination;
