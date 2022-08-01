import { useState } from "react";
import { motion } from "framer-motion";
import data from "../../../data.json";
import assets from "../../../assets";
import "./Crew.scss";
const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const crew = data.crew;
  const activeCrewMember = crew[activeIndex];
  const {
    name,
    images: { webp, png },
    role,
    bio,
  } = activeCrewMember;
  const webpImage = `../../.${webp}`;
  const pngImage = `../../.${png}`;
  return (
    <motion.section
      className="crew-pg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>
        <span>02</span> <span>Meet your crew</span>
      </h1>
      <div className="crew-wrapper">
        <picture>
          <source type="image/webp" srcSet={webpImage} />
          <img src={pngImage} alt={`Picture of ${name}, a crew member`} />
        </picture>

        <article>
          <nav>
            <button
              className={`btn ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => setActiveIndex(0)}
            ></button>
            <button
              className={`btn ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => setActiveIndex(1)}
            ></button>
            <button
              className={`btn ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => setActiveIndex(2)}
            ></button>
            <button
              className={`btn ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => setActiveIndex(3)}
            ></button>
          </nav>

          <div className="crew-member">
            <h4>{role}</h4>
            <h2>{name}</h2>
            <p>{bio}</p>
          </div>
        </article>
      </div>
    </motion.section>
  );
};

export default Crew;
