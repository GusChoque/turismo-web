import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";
function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-700 opacity-90 bg-local relative text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
        <div className="p-5 flex flex-col">
          <h2 className="pb-3 text-2xl font-bold text-white">Company Name</h2>
          <p className="text-base text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            voluptates et, id aliquam
          </p>
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-bold text-white">Contact</h2>
          <ul className="text-base text-gray-300">
            <li>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                387 - 321321654
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                387 - 321321654
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/send?phone=112341231"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                387 - 321321654
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Social Media</h2>
          <div className="inline-flex gap-3 items-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="p-1"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="p-1"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-1"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
