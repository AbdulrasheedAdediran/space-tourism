import { Link } from "react-router-dom";
import "./Homepage.scss";
const Homepage = () => {
  return (
    <section className="homepage">
      <div className="home-content">
        <h1>So, you want to travel to</h1>
        <h2>Space</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className="explore-btn">
        Explore
      </Link>
    </section>
  );
};

export default Homepage;
