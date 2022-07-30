import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <h1>Error 404!</h1>
      <h2>The page you requested does not exist.</h2>

      <button>
        <Link to="/" className="link">
          Back Home
        </Link>
      </button>
    </div>
  );
};

export default Error;
