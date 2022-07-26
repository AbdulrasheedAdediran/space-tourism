import { useState } from "react";
import data from "../../../data.json";
const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const destinations = data.destinations;
  const activeDestination = destinations[activeIndex];
  const { name, images, description, distance, travel } = activeDestination;

  return (
    <section className="destination">
      <h2>
        <span>00</span> <span>Pick your destination</span>
      </h2>

      <div>
        <img src={images.webp} alt="" className="mobile" />
      </div>

      <article>
        <nav>
          <button
            className={`btn ${activeIndex === 0 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(0)}
          >
            Moon
          </button>
          <button
            className={`btn ${activeIndex === 1 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            Mars
          </button>
          <button
            className={`btn ${activeIndex === 2 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(2)}
          >
            Europa
          </button>
          <button
            className={`btn ${activeIndex === 3 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(3)}
          >
            Titan
          </button>
        </nav>
        <div className="text-content">
          <h1>{name}</h1>

          <p>{description}</p>

          <div className="dist-and-time">
            <div>
              <p>AVG. Distance</p>
              <p>{distance}</p>
            </div>

            <div>
              <p>EST. Travel Time</p>
              <p>{travel}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
