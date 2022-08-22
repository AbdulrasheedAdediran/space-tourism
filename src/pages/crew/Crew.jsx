import { useState } from "react";
import { motion } from "framer-motion";
import data from "../../../data.json";
import pngDouglas from "../../../assets/crew/image-douglas-hurley.png";
import webpDouglas from "../../../assets/crew/image-douglas-hurley.webp";
import pngMark from "../../../assets/crew/image-mark-shuttleworth.png";
import webpMark from "../../../assets/crew/image-mark-shuttleworth.webp";
import pngVictor from "../../../assets/crew/image-victor-glover.png";
import webpVictor from "../../../assets/crew/image-victor-glover.webp";
import pngAnousheh from "../../../assets/crew/image-anousheh-ansari.png";
import webpAnousheh from "../../../assets/crew/image-anousheh-ansari.webp";
import "./Crew.scss";
const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const crew = data.crew;
  const activeCrewMember = crew[activeIndex];
  const {
    name,
    role,
    bio,
  } = activeCrewMember;
  const pngImages = [pngDouglas, pngMark, pngVictor, pngAnousheh];
  const webpImages = [webpDouglas, webpMark, webpVictor, webpAnousheh];
  const activePngImage = pngImages[activeIndex];
  const activeWebpImage = webpImages[activeIndex];

  const minSwipeDistance = 50;

  
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const nextSlide = () => setActiveIndex((activeIndex + 1) % crew.length)
  const previousSlide = () => setActiveIndex((activeIndex - 1 + crew.length) % crew.length)

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
        className="crew-pg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
    >
      <h1>
        <span>02</span> <span>Meet your crew</span>
      </h1>
      <div className="crew-wrapper">
        <motion.picture
          key={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <source type="image/webp" srcSet={activeWebpImage} />
          <img src={activePngImage} alt={`${name}, a crew member`} />
        </motion.picture>

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

          <motion.div 
            className="crew-member"
            key={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4>{role}</h4>
            <h2>{name}</h2>
            <p>{bio}</p>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default Crew;
