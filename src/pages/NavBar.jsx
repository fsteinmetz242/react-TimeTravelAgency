// Navigation bar: with relevant links to other pages
const NavBar = () => {
  return (
    <nav className="bg-orange-400">
      <div className="flex-none">
        <ul className="flex inline-flex px-1 gap-1">
          <li>Home</li>
          <li>About</li>
          <li>Destinations</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
