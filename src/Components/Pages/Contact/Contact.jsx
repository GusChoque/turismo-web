import Map from "../../Utils/Map/Map";
import emailjs from "@emailjs/browser";
import { VITE_MAIL_USER_ID, VITE_MAIL_SERVICE_ID, VITE_MAIL_TEMPLATE_ID } from "../../../../env";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VITE_MAIL_SERVICE_ID, VITE_MAIL_TEMPLATE_ID, e.target, VITE_MAIL_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const { t } = useTranslation();

  return (
    <section className="py-10 px-8 bg-local contact">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
        {t("contact.title")}
        </h1>
        <div className="flex flex-col sm:flex-row w-full gap-4">
          <div className="sm:block sm:w-1/2 mt-4 sm:mt-0 shadow-2xl rounded-lg">
            <Map />
          </div>
          <div className="w-full sm:w-1/2">
            <form className=" p-6 rounded-lg shadow-2xl border-2 border-gray-400" onSubmit={sendEmail}>
              <h2 className="text-2xl font-semibold mb-4">{t("contact.form.title")}</h2>
              <div className="mb-4">
                <label
                  htmlFor="user_name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  {t("contact.form.name")} *
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder={t("contact.form.name")}
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="user_email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  {t("contact.form.email")} *
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder={t("contact.form.email")}
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="user_phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  {t("contact.form.phone")}
                </label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  placeholder={t("contact.form.phone")}
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                  minLength="9"
                  maxLength="20"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  {t("contact.form.message")} *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder={t("contact.form.message")}
                  name="message"
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>
              <input type="submit" value={t("contact.form.btnSend")} className="text-lg font-bold text-white bg-[#345E92] hover:bg-[#4A85CD] duration-300 rounded-lg p-3 w-1/4 self-center cursor-pointer" />
              <small className="block pt-2">* {t("contact.form.required")}</small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
