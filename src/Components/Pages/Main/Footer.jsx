import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-8 bg-[#112D4E] bg-local relative text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
        <div className="p-5 flex flex-col">
          <h2 className="pb-3 text-2xl font-bold text-white">
            {t("footer.name")}
          </h2>
          <p className="text-base text-gray-300">
            {t("footer.companyDescription")}
          </p>
        </div>
        <div className="p-5 text-right">
          <h2 className="text-2xl font-bold text-white">
            {t("footer.contact")}
          </h2>
          <ul className="text-base text-gray-300">
            <li>
              <a
                href="https://web.whatsapp.com/send?phone=3517011557&text=Hola%21%20este%20es%20un%20mensaje%20personalizado%0D%0AHello%21%20this%20is%20a%20personalised%20messaje"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:font-semibold"
              >
                387 - 321321651
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/send?phone=3517011557&text=Hola%21%20este%20es%20un%20mensaje%20personalizado%0D%0AHello%21%20this%20is%20a%20personalised%20messaje"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:font-semibold"
              >
                387 - 321321652
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/send?phone=3517011557&text=Hola%21%20este%20es%20un%20mensaje%20personalizado%0D%0AHello%21%20this%20is%20a%20personalised%20messaje"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:font-semibold"
              >
                387 - 321321653
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 flex flex-col">
          <h2 className="text-2xl font-bold text-white">{t("footer.media")}</h2>
          <div className="inline-flex gap-3 items-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="p-1 hover:scale-110 duration-300"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="p-1 hover:scale-110 duration-300"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-1 hover:scale-110 duration-300"
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
