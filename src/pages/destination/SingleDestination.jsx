import { Link, useParams } from "react-router-dom";
const SingleDestination = () => {
  const { destinationName } = useParams();
  return (
    <section>
      <div>{destinationName}</div>
      <Link to="/destination">Destination</Link>
    </section>
  );
};

export default SingleDestination;
