import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";

import { destinationLoader } from "../data/destinationsLoader";

const StartPage = () => {
  // Für Testzwecke
  const [destinationsList, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await destinationLoader();
      setDestinations(data);
    };
    fetchData();
  }, []);

  if (!destinationsList) return <p> Keine Daten vorhanden! </p>;
  const singleDest = [...destinationsList].filter(
    (p) => p.id == 15 || p.id == 7 || p.id == 3
  );
  console.log("singleDest: ");
  console.log(singleDest);

  return (
    <div className="grid">
      {singleDest?.map((destination) => (
        <DestinationCard destination={destination} key={destination.id} />
      ))}
    </div>
  );
};

export default StartPage;
