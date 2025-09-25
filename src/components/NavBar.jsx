// Navigation bar: with relevant links to other pages
const NavBar = () => {
  return (
    <nav className="bg-orange-400">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Travel Agency</a>
        <div className="flex justify-start">
          <ul className="px-1 gap-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>About</li>
            <li>
              <a href="/destinations">Destinations</a>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
