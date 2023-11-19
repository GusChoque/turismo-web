import { useState, useEffect, useMemo } from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";

/* eslint-disable react/prop-types */
const Background = ({ children }) => {
  const images = useMemo(
    () => [image1, image2, image3, image4, image5, image6],
    []
  );
  const interval = 3000;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(imageRotationInterval);
    };
  }, [images, interval]);

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="h-screen p-4 home relative"> {/* Add "relative" class */}
      <div className="absolute inset-0 overflow-hidden"> {/* Add "absolute" and "inset-0" classes */}
        <div
          className="w-full h-screen transition-transform transform ease-in-out duration-1000"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          <div className="h-full">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Background;
