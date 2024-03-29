import { useState  } from "react";
import { motion } from "framer-motion";
import data from "../../../data.json";
import webpMoon from "../../../assets/destination/image-moon.webp";
import pngMoon from "../../../assets/destination/image-moon.png";
import webpMars from "../../../assets/destination/image-mars.webp";
import pngMars from "../../../assets/destination/image-mars.png";
import webpEuropa from "../../../assets/destination/image-europa.webp";
import pngEuropa from "../../../assets/destination/image-europa.png";
import webpTitan from "../../../assets/destination/image-titan.webp";
import pngTitan from "../../../assets/destination/image-titan.png";
import "./Destination.scss";
const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const destinations = data.destinations;
  const activeDestination = destinations[activeIndex];
  const {
    name,
    description,
    distance,
    travel,
  } = activeDestination;
  const webpImages = [webpMoon, webpMars, webpEuropa, webpTitan];
  const pngImages = [pngMoon, pngMars, pngEuropa, pngTitan];
  const activeWebpImage = webpImages[activeIndex];
  const activePngImage = pngImages[activeIndex];
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50;

  
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const nextSlide = () => setActiveIndex((activeIndex + 1) % destinations.length)
  const previousSlide = () => setActiveIndex((activeIndex - 1 + destinations.length) % destinations.length)

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
      className="destination-pg" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
    >
      <h1>
        <span>00</span> <span>Pick your destination</span>
      </h1>

      <article>
        <motion.picture
          key={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <source type="image/webp" srcSet={activeWebpImage} />
          <img src={activePngImage} alt={name} />
        </motion.picture>

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
          <motion.div className="text-content"
            key={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
