import image from "../../../assets/images/image05.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-8 bg-local about-us">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
          {t("about.title")}
        </h1>
        <div className="flex flex-col sm:flex-row w-full">
          <div className="w-full sm:w-1/2 pr-4">
            <p className="text-base capitalize">{t("about.description")}</p>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <img
              src={image}
              alt="About Us Image"
              className="w-full max-h-[440px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
