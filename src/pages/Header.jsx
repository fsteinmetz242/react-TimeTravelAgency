//Home page:
//    Display a search bar with criteria such as origin, destination, dates, etc.
//    When the Search button is clicked, navigate to the Destinations page.

import DestinationsPage from "./DestinationsPage";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <p>Home:</p>
      <p>ToDo: Searchbar bei onClick navigieren nach Dest. Page</p>
    </header>
  );
};
export default Header;
