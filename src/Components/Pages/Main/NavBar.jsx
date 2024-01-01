import { Link } from "react-router-dom";
import LanguajeToggle from "../../Utils/LanguajeToggle";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2 bg-[#112D4E] barra">
      <div className="flex justify-between">
        <Link
          to="/turismo-web"
          className="hidden sm:block text-3xl lg:text-4xl font-semibold py-2 px-4 text-white"
        >
          TURISMO WEB
        </Link>
        <ul className="sm:ml-10 inline-flex text-center grow items-center gap-2">
          <li className="p-2">
            <Link to="/turismo-web" className="text-2xl text-gray-300 hover:text-white">
              {t("navBar.home")}
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/turismo-web/about"
              className="text-2xl text-gray-300 hover:text-white"
            >
              {t("navBar.about")}
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/turismo-web/contact"
              className="text-2xl text-gray-300 hover:text-white"
            >
              {t("navBar.contact")}
            </Link>
          </li>
        </ul>
        <LanguajeToggle />
      </div>
    </nav>
  );
}

export default NavBar;
