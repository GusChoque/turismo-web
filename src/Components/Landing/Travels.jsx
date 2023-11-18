import { Link } from "react-router-dom";
import { Recorridos } from "../../assets/locales/Recorridos";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const formatName = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

const Travels = () => {
  return (
    <section
      className="py-10 px-8 bg-local travels"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-4xl font-bold text-center pb-10">
        Get to Know Salta
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
        {Recorridos.map((recorrido) => {
          const formattedName = formatName(recorrido.name);
          return (
            <article
              className="bg-white rounded-lg flex flex-col shadow-black shadow-2xl overflow-clip gap-4 pt-8"
              key={formattedName}
            >
              <div className="px-8">
                <h2 className="text-2xl font-semibold pb-4">
                  {recorrido.name}
                </h2>
                <p className="text-justify text-lg">{recorrido.description}</p>
                <p className="py-4">Duration: {recorrido.duration}</p>
              </div>
                <Link
                  to={`/${formattedName}`}
                  className="p-1 text-blac text-lg font-bold rounded-md hover:text-white bg-orange-300 hover:bg-orange-500 duration-300 inline-block self-center"
                >
                  Mas info
                </Link>

              <img
                src={recorrido.image}
                alt={`${recorrido.name}`}
                className="rounded-b-lg w-full flex justify-center items-center h-96 hover:scale-110 duration-500"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Travels;
