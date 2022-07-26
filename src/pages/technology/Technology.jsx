import { useState } from "react";
import data from "../../../data.json";
import "./Technology.scss";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const technology = data.technology;
  const activeTech = technology[activeIndex];
  const { name, images, description } = activeTech;
  return (
    <section className="technology">
      <h1>
        <span>03</span> <span>Space launch 101</span>
      </h1>

      <article>
        <div>
          <img src={images.portrait} alt="" />
          <img src={images.landscape} alt="" />
        </div>

        <nav>
          <button
            className={`btn ${activeIndex === 0 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(0)}
          >
            1
          </button>
          <button
            className={`btn ${activeIndex === 1 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            2
          </button>
          <button
            className={`btn ${activeIndex === 2 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(2)}
          >
            3
          </button>
        </nav>
        <h4>The terminology</h4>
        <h5>{name}</h5>
        <p>{description}</p>
      </article>
    </section>
  );
};

export default Technology;
