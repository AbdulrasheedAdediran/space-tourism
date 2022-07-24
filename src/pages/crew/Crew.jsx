import { useState } from "react";
import data from "../../../data.json";

const Crew = () => {
  const crew = data.crew;
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("moonBtn");
  const activeCrewMember = crew[index];
  const { name, images, role, bio } = activeCrewMember;
  return (
    <section>
      <h2>
        <span>02</span> <span>Meet your crew</span>
      </h2>

      <div>
        <img src={images.webp} alt="" />
      </div>

      <nav>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </nav>
    </section>
  );
};

export default Crew;
