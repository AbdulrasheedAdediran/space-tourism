import { useState } from "react";
import { motion } from "framer-motion";
import data from "../../../data.json";
import launchVehicleLandscape from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceSportLandscape from "../../../assets/technology/image-spaceport-landscape.jpg";
import spaceSportPortrait from "../../../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleLandscape from "../../../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../../../assets/technology/image-space-capsule-portrait.jpg";
import "./Technology.scss";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const technology = data.technology;
  const activeTech = technology[activeIndex];
  const {
    name,
    // images: { landscape, portrait },
    description,
  } = activeTech;
  const landscapeImages = [
    launchVehicleLandscape,
    spaceSportLandscape,
    spaceCapsuleLandscape,
  ];
  const portraitImages = [
    launchVehiclePortrait,
    spaceSportPortrait,
    spaceCapsulePortrait,
  ];
  const activeLandscapeImage = landscapeImages[activeIndex];
  const activePortraitImage = portraitImages[activeIndex];
  return (
    <section
      className="technology-pg"
      
    >
      <h1>
        <span>03</span> <span>Space launch 101</span>
      </h1>

      <article>
        <picture>
          <source
            media="(max-width:768px)"
            type="image/jpeg"
            srcSet={activeLandscapeImage}
            alt={name}
          />
          <source
            media="(min-width:769px)"
            type="image/jpeg"
            srcSet={activePortraitImage}
            alt={name}
          />

          <img src={activePortraitImage} className="portrait" alt={name} />
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
