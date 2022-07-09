import data from "../../../data.json";
const Destination = () => {
  const destinations = data.destinations;
  const [
    {
      name,
      images: { png, webp },
      description,
      distance,
      travel,
    },
  ] = destinations;

  return <></>;
};

export default Destination;
