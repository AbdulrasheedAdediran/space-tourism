import { useState } from "react";
import { motion } from "framer-motion";
import data from "../../../data.json";
import webpMars from "../../../assets/destination/image-mars.webp";
import "./Destination.scss";
const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const destinations = data.destinations;
  const activeDestination = destinations[activeIndex];
  const {
    name,
    images: { webp, png },
    description,
    distance,
    travel,
  } = activeDestination;
  const webpImage = `../../.${webp}`;
  const pngImage = `../../.${png}`;

  console.log(webpImage);
  console.log(pngImage);
  console.log(webpMars);

  return (
    <motion.section
      className="destination-pg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>
        <span>00</span> <span>Pick your destination</span>
      </h1>

      <article>
        <picture>
          <source type="image/webp" srcSet={webpImage} />
          <img src={webpMars} alt={`Pictoral illustration of ${name}`} />
        </picture>
        <img src={webpMars} alt="Image of Mars" />
        <img src={webp} alt="Image of webp" />
        <img src={png} alt="Image of png" />
        <img src={webpImage} alt="Image of webpImage" />
        <img src={pngImage} alt="Image of pngImage" />
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
    </motion.section>
  );
};

export default Destination;
