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
      <h2>
        <span>03</span> <span>Space launch 101</span>
      </h2>

      <article>
        <div>
          <img src={images.portrait} alt="" />
          <img src={images.landscape} alt="" />
        </div>

        <nav>
          <button
            className={`link ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => setActiveIndex(0)}
          >
            1
          </button>
          <button
            className={`link ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            2
          </button>
          <button
            className={`link ${activeIndex === 2 ? "active" : ""}`}
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
