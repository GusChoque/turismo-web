import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tours } from "../../../assets/languajes/Tours";
import { useTranslation } from "react-i18next";

function Trip() {

  const { formattedName } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState({});

  const { t, ready } = useTranslation();

  useEffect(() => {
    if (!formattedName || !ready) {
      return;
    }
    const foundTour = Tours.find(
      (item) => formattedName === t(`tours.${item.key}.urlName`)
    );
  
    if (foundTour) {
      const tour = t(`tours.${foundTour.key}`, { returnObjects: true });
      setTour({ ...tour, image: foundTour.image });
    } else {
      navigate("/error");
    }
  }, [formattedName, navigate, t, ready]);

  const { name, description, duration, image } = tour;

  return (
    <section className="py-10 px-8 bg-local about-us">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
      {name && (
        <h1 className="text-4xl font-bold text-center mb-8">{name}</h1>
      )}
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full sm:w-1/2 pr-4">
          {description && (
            <p className="text-base capitalize">{description}</p>
          )}
        {duration && <p>{t("travels.duration")}: {duration}</p>}
        </div>
        {image && (
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <img
              src={image}
              alt={name}
              className="hidden sm:block w-full max-h-[440px] rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  </section>
  );
}

export default Trip;
