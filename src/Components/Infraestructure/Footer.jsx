import { Link } from "react-router-dom";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";
function Footer() {
  return (
    <footer className="w-full py-4 px-60 grid grid-cols-3 bg-gray-700 footer text-white">
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
          <li>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
              387 - 321321654
            </a>
          </li>
          <li>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
              387 - 321321654
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/send?phone=112341231" target="_blank" rel="noreferrer">
              387 - 321321654
            </a>
          </li>
        </ul>
      </div>

      <div className="p-5 flex flex-col">
        <span className="p-2">Redes</span>
        <div className="inline-flex gap-3 p-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
