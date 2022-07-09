import data from "../../../data.json";
const crews = data.crew;
const {
  name,
  images: { png, webp },
  role,
  bio,
} = crews;

const Crew = () => {
  return <div>Crew</div>;
};

export default Crew;
