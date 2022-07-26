import { useState } from "react";
import data from "../../../data.json";
import "./Crew.scss";
const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const crew = data.crew;
  const activeCrewMember = crew[activeIndex];
  const { name, images, role, bio } = activeCrewMember;
  return (
    <section className="crew">
      <h1>
        <span>02</span> <span>Meet your crew</span>
      </h1>

      <div>
        <img src={images.webp} alt="" />
      </div>

      <article>
        <nav>
          <button
            className={`btn ${activeIndex === 0 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(0)}
          ></button>
          <button
            className={`btn ${activeIndex === 1 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(1)}
          ></button>
          <button
            className={`btn ${activeIndex === 2 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(2)}
          ></button>
          <button
            className={`btn ${activeIndex === 3 ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(3)}
          ></button>
        </nav>

        <div className="crew-member">
          <h5>{role}</h5>
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>
      </article>
    </section>
  );
};

export default Crew;
