import travel1 from "../../assets/images/travel1.jpg";

const Travels = () => {
  return (
    <section className="py-4 px-8 bg-local mb-6 travels">
      <h2 className="text-4xl font-bold text-center py-10">
        Get to Know Salta
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
        {[1, 2, 3, 4, 5, 6].map((pueblo) => (
          <article
            key={pueblo}
            className="bg-white border p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold pb-4">Pueblo {pueblo}</h2>
            <p className="text-gray-700 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Mollitia, dicta suscipit expedita temporibus ad est aliquam libero
              reprehenderit ratione omnis vel inventore impedit sint possimus
              quos doloribus, cum neque recusandae.
            </p>
            <img
              src={travel1}
              alt={`Pueblo ${pueblo}`}
              className="mt-6 rounded-lg object-cover"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Travels;
