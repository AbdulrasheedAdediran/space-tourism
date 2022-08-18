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
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const activeLandscapeImage = landscapeImages[activeIndex];
  const activePortraitImage = portraitImages[activeIndex];
  const technology = data.technology;
  const minSwipeDistance = 50;
  const activeTech = technology[activeIndex];
  const {
    name,
    description,
  } = activeTech;

  
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const nextSlide = () => setActiveIndex((activeIndex + 1) % technology.length)
  const previousSlide = () => setActiveIndex((activeIndex - 1 + technology.length) % technology.length)

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      isLeftSwipe && nextSlide()
      isRightSwipe && previousSlide()
  }
  
  return (
    <section
      className="technology-pg"
       onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
            <motion.div
            className="technology-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
            <h3>The terminology...</h3>
            <h2>{name}</h2>
            <p>{description}</p>
            </motion.div>
        </div>
      </article>
    </section>
  );
};

export default Technology;
