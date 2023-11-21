import Map from "../../Utils/Map/Map";
import emailjs from "@emailjs/browser";
import { VITE_MAIL_USER_ID, VITE_MAIL_SERVICE_ID, VITE_MAIL_TEMPLATE_ID } from "../../../../env";

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

  return (
    <section className="py-10 px-8 bg-local contact">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact
        </h1>
        <div className="flex flex-col sm:flex-row w-full gap-4">
          <div className="sm:block sm:w-1/2 mt-4 sm:mt-0 shadow-2xl rounded-lg">
            <Map />
          </div>
          <div className="w-full sm:w-1/2">
            <form className=" p-6 rounded-lg shadow-2xl border-2 border-gray-400" onSubmit={sendEmail}>
              <h2 className="text-2xl font-semibold mb-4">Contact us here</h2>
              <div className="mb-4">
                <label
                  htmlFor="user_name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Name"
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="user_email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  E-Mail
                </label>
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  placeholder="E-Mail"
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Comment
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Comment"
                  name="message"
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>
              <input type="submit" value="Send" className="text-lg font-bold text-white bg-[#345E92] hover:bg-[#4A85CD] duration-300 rounded-lg p-3 w-1/4 self-center cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
