import { useState } from "react";
import data from "../../../data.json";
import "./Destination.scss";
const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const destinations = data.destinations;
  const activeDestination = destinations[activeIndex];
  const { name, images, description, distance, travel } = activeDestination;

  return (
    <section className="destination">
      <h1>
        <span>00</span> <span>Pick your destination</span>
      </h1>

      <article>
        <picture>
          <source type="image/webp" srcSet={images.webp} />
          <img src={images.png} alt={`Pictoral illustration of ${name}`} />
        </picture>

        <div className="destination-content">
          <nav>
            <button
              className={`btn ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => setActiveIndex(0)}
            >
              Moon
            </button>
            <button
              className={`btn ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => setActiveIndex(1)}
            >
              Mars
            </button>
            <button
              className={`btn ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => setActiveIndex(2)}
            >
              Europa
            </button>
            <button
              className={`btn ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => setActiveIndex(3)}
            >
              Titan
            </button>
          </nav>
          <div className="text-content">
            <h2>{name}</h2>

            <p className="description">{description}</p>

            <div className="dist-and-time">
              <div>
                <h3>AVG. Distance</h3>
                <p>{distance}</p>
              </div>

              <div>
                <h3>EST. Travel Time</h3>
                <p>{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
