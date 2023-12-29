import { Link } from "react-router-dom";
import { Tours } from "../../../assets/another/Tours";
import image from "../../../assets/images/image19.jpg";
import { useTranslation } from "react-i18next";

const Travels = () => {
  const formatName = (name) => {
    return name ? name.toLowerCase().replace(/\s+/g, "-") : "";
  };

  const { t } = useTranslation();

  return (
    <section
      className="py-10 px-8 bg-local travels"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-4xl font-bold text-center pb-10">
        {t("travels.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
        {Tours.map((tourKey) => {
          const tour = t(`tours.${tourKey.key}`, {
            returnObjects: true,
          });
          const formattedName = formatName(tour.name);
          return (
            <article
              className="bg-white/80 rounded-lg flex flex-col shadow-black shadow-2xl overflow-clip gap-4 pt-8"
              key={formattedName}
            >
              <div className="px-8">
                <h2 className="text-2xl font-semibold pb-4">{tour.name}</h2>
                <p className="text-justify text-lg">{tour.description}</p>
                <p className="py-4">
                  {t("travels.duration")}: {tour.duration}
                </p>
              </div>
              <Link
                to={`/${formattedName}`}
                className="p-3 w-1/3 min-w-fit text-blac text-lg font-bold rounded-md text-white bg-[#345E92] hover:bg-[#4A85CD] duration-300 inline-block self-center text-center"
              >
                {t("travels.buttonArticle")}
              </Link>

              <img
                src={tourKey.image}
                alt={`${tour.name}`}
                className="mt-2 rounded-b-lg w-full flex justify-center items-center h-96 hover:scale-110 duration-500"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Travels;
