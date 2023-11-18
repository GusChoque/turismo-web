import { useState, useEffect } from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

function Home() {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex, images.length]);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "100% 100%",
      }}
    >
      <section
        className={`max-w-screen-xl mx-auto h-[80vh] sm:h-[65vh] py-4 bg-local home relative`}
      >
        <div className="flex flex-col text-center items-center justify-center h-full">
          <h1 className="py-10 text-5xl font-bold ">Explore Salta with us</h1>
          <p className="p-5 text-base capitalize sm:w-2/3 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptatum perferendis? Labore sed animi ad soluta quasi
            necessitatibus corrupti illum blanditiis, dolor et quam? Nemo rem
            magni qui! Unde, expedita?
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
