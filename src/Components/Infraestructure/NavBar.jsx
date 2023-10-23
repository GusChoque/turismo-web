import { Link } from "react-router-dom";

function NavBar() {
  return (
    // <BrowserRouter>
      <nav className="w-full inline-flex justify-between p-6 barra">
        <h1 className="text-4xl font-normal leading-10 py-2 px-4">
          Turismo web
        </h1>
        <ul className="inline-flex text-center grow items-center">
          <li className="w-28 p-2">
            <Link to="/" className="text-base font-normal">
              Home
            </Link>
          </li>
          <li className="w-28 p-2">
            <Link to="/about" className="text-base font-normal">
              About us
            </Link>
          </li>
          <li className="w-28 p-2">
            <Link to="/contact" className="text-base font-normal">
              Contact
            </Link>
          </li>
        </ul>
        <div className="text-base font-bold p-4">Lang</div>
      </nav>    
    // </BrowserRouter>
  );
}

export default NavBar;
