import { useState } from "react";
import data from "../../../data.json";
import "./Crew.scss";
const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const crew = data.crew;
  const activeCrewMember = crew[activeIndex];
  const { name, images, role, bio } = activeCrewMember;
  return (
    <section className="crew-pg">
      <h1>
        <span>02</span> <span>Meet your crew</span>
      </h1>

      <picture>
        <source type="image/webp" srcSet={images.webp} />
        <img src={images.png} alt={`Pictore of ${name}, a crew member`} />
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
    </section>
  );
};

export default Crew;
