import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 p-2 bg-[#112D4E] barra">
      {/* <div className="max-w-screen-xl mx-auto flex justify-between items-center"> */}
      <div className="flex justify-between">

      <Link to="/" className="hidden sm:block text-3xl lg:text-4xl font-semibold py-2 px-4 text-white">
        TURISMO WEB
      </Link>
      <ul className="sm:ml-10 inline-flex text-center grow items-center gap-2">
        <li className="p-2">
          <Link to="/" className="text-2xl text-gray-300 hover:text-white">
            Home
          </Link>
        </li>
        <li className="p-2">
          <Link to="/about" className="text-2xl text-gray-300 hover:text-white">
            About us
          </Link>
        </li>
        <li className="p-2">
          <Link
            to="/contact"
            className="text-2xl text-gray-300 hover:text-white"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="text-gray-300 p-4">Lang</div>
      </div>
    </nav>
  );
}

export default NavBar;
