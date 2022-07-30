import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <h1>Error 404!</h1>
      <h2>The page you requested does not exist.</h2>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
