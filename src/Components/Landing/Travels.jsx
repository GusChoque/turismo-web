import { Recorridos } from "./Recorridos";

const Travels = () => {
  return (
    <section className="py-4 px-8 bg-local mb-6 travels">
      <h2 className="text-4xl font-bold text-center py-10">
        Get to Know Salta
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
        {Recorridos.map((recorrido) => (
          <article
            key={recorrido.name}
            className="bg-white border p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold pb-4">{recorrido.name}</h2>
            <p className="text-justify">
              {recorrido.description}
            </p>
            <p className="p-2">Duration: {recorrido.duration}</p>
            <div className="flex justify-center items-center h-96 my-2">
              <img
                src={recorrido.image}
                alt={`${recorrido.name}`}
                className="mt-6 rounded-lg object-cover max-h-96 shadow-md"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Travels;
