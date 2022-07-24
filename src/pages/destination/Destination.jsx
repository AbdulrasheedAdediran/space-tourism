import { useState } from "react";
import data from "../../../data.json";
const Destination = () => {
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("moonBtn");
  const destinations = data.destinations;
  const activeDestination = destinations[index];
  const { name, images, description, distance, travel } = activeDestination;

  return (
    <section className="destination">
      <h2>
        <span>00</span> <span>Pick your destination</span>
      </h2>

      <div>
        <img src={images.png} alt="" className="desktop" />
        {/* <img src={images.webp} alt="" className="mobile" /> */}
      </div>

      <article>
        <nav>
          <button
            id="moonBtn"
            className={`link ${activeButton === "moonBtn" ? "active" : ""}`}
            onClick={() => {
              setIndex(0);
              setActiveButton("moonBtn");
            }}
          >
            Moon
          </button>
          <button
            id="marsBtn"
            className={`link ${activeButton === "marsBtn" ? "active" : ""}`}
            onClick={() => {
              setIndex(1);
              setActiveButton("marsBtn");
            }}
          >
            Mars
          </button>
          <button
            id="europaBtn"
            className={`link ${activeButton === "europaBtn" ? "active" : ""}`}
            onClick={() => {
              setIndex(2);
              setActiveButton("europaBtn");
            }}
          >
            Europa
          </button>
          <button
            id="titanBtn"
            className={`link ${activeButton === "titanBtn" ? "active" : ""}`}
            onClick={() => {
              setIndex(3);
              setActiveButton("titanBtn");
            }}
          >
            Titan
          </button>
        </nav>
        <div class="text-content">
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
