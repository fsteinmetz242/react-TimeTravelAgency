import { useEffect, useState } from "react";
import { destinationLoader } from "../data/destinationsLoader";
import Header from "../pages/Header";
import DestinationsPage from "../pages/DestinationsPage";
import { Outlet } from "react-router";

export default function MainLayout() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await destinationLoader();
      setDestinations(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <Header />
      {/* Outlet rendert die Child-Routes an dieser Stelle */}
      {/* context prop übergibt Daten an alle Child-Components */}
      <Outlet context={destinations} />
      <footer>&copy; footerbla</footer>
    </div>
  );
}
