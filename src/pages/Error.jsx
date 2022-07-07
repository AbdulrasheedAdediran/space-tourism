import { Link } from "react-router-dom";
import Homepage from "./homepage/Homepage";

const Error = () => {
  return (
    <div>
      <h1>Error!</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
