import { useState } from "react";
import data from "../../../data.json";
const Destination = () => {
  const destinations = data.destinations;
  const [index, setIndex] = useState(0);
  const activeDestination = destinations[index];
  const [activeName, setActiveName] = useState("moonBtn");
  const { name, images, description, distance, travel } = activeDestination;

  return (
    <section>
      <h1>
        <span>00</span> <span>Pick your destination</span>
      </h1>
      <div>
        <button
          id="moonBtn"
          className={`link ${activeName === "moonBtn" ? "active" : ""}`}
          onClick={() => {
            setIndex(0);
            setActiveName("moonBtn");
          }}
        >
          Moon
        </button>
        <button
          id="marsBtn"
          className={`link ${activeName === "marsBtn" ? "active" : ""}`}
          onClick={() => {
            setIndex(1);
            setActiveName("marsBtn");
          }}
        >
          Mars
        </button>
        <button
          id="europaBtn"
          className={`link ${activeName === "europaBtn" ? "active" : ""}`}
          onClick={() => {
            setIndex(2);
            setActiveName("europaBtn");
          }}
        >
          Europa
        </button>
        <button
          id="titanBtn"
          className={`link ${activeName === "titanBtn" ? "active" : ""}`}
          onClick={() => {
            setIndex(3);
            setActiveName("titanBtn");
          }}
        >
          Titan
        </button>
      </div>

      <article>
        <div>{name}</div>
        <div>
          <img src={images.png} alt="" className="desktop" />
        </div>
        {/* <div>
          <img src={images.webp} alt="" className="mobile" />
        </div> */}
        <div>{description}</div>
        <div>{distance}</div>
        <div>{travel}</div>
      </article>
    </section>
  );
};

export default Destination;
