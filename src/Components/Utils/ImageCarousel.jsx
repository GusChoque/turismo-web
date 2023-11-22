import { useState, useEffect } from "react";
// import { Transition } from '@headlessui/react';
import image1 from "../../assets/images/image14.jpg";
import image2 from "../../assets/images/image16.jpg";
import image3 from "../../assets/images/image13.jpg";
import image4 from "../../assets/images/image11.jpg";


// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ children }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, image3, image4];
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
    <div className="items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
      }}
    >
      {children}
      </div>
  );
};

export default ImageCarousel;

