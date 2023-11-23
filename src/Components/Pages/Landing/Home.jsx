import ImageCarousel from "../../Utils/ImageCarousel";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <ImageCarousel>
      <section className="max-w-screen-xl mx-auto h-[80vh] sm:h-[70vh] py-4 bg-local text-white relative home">
        <div className="flex flex-col text-center items-center justify-center h-full">
          <h1 className="py-10 text-5xl font-bold ">{t("home.title")}</h1>
          <p className="p-5 text-lg capitalize sm:w-2/3 font-medium text-white">
            {t("home.description")}
          </p>
        </div>
      </section>
    </ImageCarousel>
  );
}

export default Home;
