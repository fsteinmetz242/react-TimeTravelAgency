// Destinations page:
import { useEffect, useState } from "react";
import { destinationLoader } from "../data/destinationsLoader";
import DestinationCard from "../components/DestinationCard";

//    Hard-code a list of travel destination cards (e.g. country or city previews), use slugs as identifiers.
//    You may use Pexels or Unsplash for free stock photos.
//    Be sure to review the individual artist’s licence agreement before using their images.

const DestinationsPage = () => {
  // Für Testzwecke
  const [destinationsList, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await destinationLoader();
      setDestinations(data);
    };
    fetchData();
  }, []);

  if (!destinationsList) return <p> Loading ... </p>;

  return (
    <>
      <div className="grid">
        {destinationsList?.map((destination) => (
          <DestinationCard destination={destination} key={destination.id} />
        ))}
      </div>
    </>
  );
};

export default DestinationsPage;
