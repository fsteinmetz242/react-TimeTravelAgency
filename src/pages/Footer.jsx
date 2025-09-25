//Footer: with relevant links to other pages
const Footer = () => {
  return (
    <footer>
      <div id="footerLinkContainer" className="flex justify-evenly">
        <div id="container1" className="flex flex-col">
          <ul className="flex flex-col gap-2 ">
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li className="">
              <a href="/destinations">Destinations</a>
            </li>
          </ul>
        </div>
        <div id="container2" className="flex flex-col gap-2">
          <a href="#" className="mb-5">
            COMPANY
          </a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div id="container2" className="flex flex-col gap-2">
          <a href="#" className="">
            LEGAL
          </a>
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
        </div>
      </div>
      <div>(c) Bald, TimeTravelAgency</div>
    </footer>
  );
};
export default Footer;
