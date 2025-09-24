//    Display a search bar with criteria such as origin, destination, dates, etc.
//    When the Search button is clicked, navigate to the Destinations page.

const SearchBar = () => {
  return (
    <div className="bg-red-300 rounded-b-2xl">
      ToDo: criteria such as origin, destination, dates, etc.
      <form action="" className="flex bg-white  border-b-green-400">
        <input type="text" placeholder="Origin" />
        <input type="text" placeholder="Destination" />
        <input type="date" placeholder="TT.MM.JJJJ" />
        <input type="date" placeholder="TT.MM.JJJJ" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default SearchBar;
