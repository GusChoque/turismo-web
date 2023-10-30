import { Link } from "react-router-dom";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";

function Footer() {
  return (
    <footer className="w-full py-4 px-60 grid grid-cols-3 footer">
      <div className="p-5 flex flex-col">
        <h2 className="pb-3 font-bold">Company Name</h2>
        <p className="w-11/12 p-2 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          voluptates et, id aliquam officia sunt quasi temporibus maxime
          incidunt asperiores excepturi non minus deleniti esse, accusantium
          nostrum quidem veniam fuga?
        </p>
      </div>
      <div className="p-5">
        <Link>Contacto</Link>
        <ul className="p-2 text-justify">
          <li>387 - 321321654</li>
          <li>387 - 321321654</li>
          <li>387 - 321321654</li>
        </ul>
      </div>

      <div className="p-5 flex flex-col">
        <span className="p-2">Redes</span>
        <div className="inline-flex gap-3 p-2">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Facebook" />
          <img src={Twitter} alt="Facebook" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
