//Home page:
//    Display a search bar with criteria such as origin, destination, dates, etc.
//    When the Search button is clicked, navigate to the Destinations page.

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <div className="rounded-2xl bg-green-300">
      <p>Home:</p>
      <p>ToDo: Searchbar bei onClick navigieren nach Dest. Page</p>
      <NavBar />
      <SearchBar />
    </div>
  );
};
export default HomePage;
