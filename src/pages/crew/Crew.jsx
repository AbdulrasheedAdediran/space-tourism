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
      <h2>
        <span>02</span> <span>Meet your crew</span>
      </h2>

      <div>
        <img src={images.webp} alt="" />
      </div>

      <article>
        <nav>
          <button
            className={`link ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => setActiveIndex(0)}
          ></button>
          <button
            className={`link ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => setActiveIndex(1)}
          ></button>
          <button
            className={`link ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => setActiveIndex(2)}
          ></button>
          <button
            className={`link ${activeIndex === 3 ? "active" : ""}`}
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
