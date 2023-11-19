import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Recorridos } from "../../../assets/locales/Recorridos";
function Trip() {
  const formatName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const {formattedName} = useParams();
  const navigate = useNavigate();

  const [recorrido, setRecorrido] = useState({});
  
  useEffect(() => {
    if (!formattedName) {
      return;
    }
    const foundRecorrido = Recorridos.find(
      (item) => formattedName === formatName(item.name)
    );

    if (foundRecorrido) {
      setRecorrido(foundRecorrido);
    } else {
      console.error(`Recorrido with name "${formattedName}" not found.`);
      navigate("/error");
    }
  }, [formattedName, navigate]);

  const { name, description, duration, image } = recorrido;

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
          </div>
          {duration && <p>Duration: {duration}</p>}
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
