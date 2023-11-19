import Map
 from "../../Utils/Map";
const Contact = () => {
  return (
    <section className="py-10 px-8 bg-local contact">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Contact
        </h1>
        <div className="flex flex-col sm:flex-row w-full">
        <div className="sm:block sm:w-1/2 mt-4 sm:mt-0 p-4">
          <Map />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact us here</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-Mail
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="E-Mail"
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows="5"
                  placeholder="Comment"
                  className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-black"
                />
              </div>
              <button className="bg-red-500 text-white rounded-lg p-3 w-1/4 self-center hover:bg-red-600 hover:text-white">
                Send
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
