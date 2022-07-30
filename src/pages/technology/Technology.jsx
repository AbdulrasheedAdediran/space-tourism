import { useState } from "react";
import data from "../../../data.json";
import "./Technology.scss";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const technology = data.technology;
  const activeTech = technology[activeIndex];
  const { name, images, description } = activeTech;

  return (
    <section className="technology-pg">
      <h1>
        <span>03</span> <span>Space launch 101</span>
      </h1>

      <article>
        <picture>
          <source
            media="(max-width:768px)"
            type="image/jpeg"
            srcSet={images.landscape}
            alt={`Image of ${name}`}
          />
          <source
            media="(min-width:769px)"
            type="image/jpeg"
            srcSet={images.portrait}
            alt={`Image of ${name}`}
          />

          <img
            src={images.portrait}
            className="portrait"
            alt={`Image of ${name}`}
          />
        </picture>

        <div className="technology-wrapper">
          <nav>
            <button
              className={`btn ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => setActiveIndex(0)}
            >
              1
            </button>
            <button
              className={`btn ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => setActiveIndex(1)}
            >
              2
            </button>
            <button
              className={`btn ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => setActiveIndex(2)}
            >
              3
            </button>
          </nav>
          <div className="technology-content">
            <h3>The terminology...</h3>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Technology;
