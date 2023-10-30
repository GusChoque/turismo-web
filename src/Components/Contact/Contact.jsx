const Contact = () => {
  return (
    <section className="h-[75vh] py-4 px-60 bg-local home">
      <article className="flex flex-row font-semibold">
        <h1 className="p-10 w-1/2 text-5xl font-bold">Contact</h1>
        {/* <p className="p-5 text-base capitalize w-1/2 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptatum perferendis? Labore sed animi ad soluta quasi
            necessitatibus corrupti illum blanditiis, dolor et quam? Nemo rem
            magni qui! Unde, expedita?
          </p> */}
        <form action="" method="" className="w-1/2 flex flex-col">
          <fieldset className="flex flex-col">
            <legend className="pt-0 p-5 mb-2 text-base text-center font-medium">
              Contact us here
            </legend>
            <div className="p-3">
              <label htmlFor="name" className="p-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="border-2 border-black p-2 rounded-lg w-2/3 ml-6"
              />
            </div>
            <div className="p-3 flex">
              <label htmlFor="email" className="p-2">
                E-Mail
              </label>
              <input
                type="text"
                id="email"
                placeholder="E-Mail"
                className="border-2 border-black p-2 rounded-lg w-2/3 ml-6"
              />
            </div>
            <div className="p-3 flex">
              <label htmlFor="comment" className="p-2">
                Comment
              </label>
              <textarea
                id="comment"
                rows="5"
                placeholder="Comment"
                className="border-2 border-black p-2 rounded-lg w-2/3"
              />
            </div>
          </fieldset>
          <button className="rounded-lg border-2 border-black p-3 w-1/6 self-center shadow-lg hover:border-red-500 hover:text-red-500">
            Send
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
