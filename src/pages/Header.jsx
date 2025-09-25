//Home page:
//    Display a search bar with criteria such as origin, destination, dates, etc.
//    When the Search button is clicked, navigate to the Destinations page.

import DestinationsPage from "./DestinationsPage";
import { NavBar } from "../components";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};
export default Header;
