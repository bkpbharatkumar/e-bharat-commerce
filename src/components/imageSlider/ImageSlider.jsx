import React, { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next button click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous button click
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically slide to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-40 lg:w-full md:w-full sm:w-full lg:h-full md:h-full sm:h-full xs:w-full xs:h-full">
      <GrFormPrevious
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-5 text-white text-8xl xl pr-10 py-2 rounded-r-lg"
        onClick={prevSlide}
      />
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover"
      />
      <MdNavigateNext
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-5 text-white text-8xl xl pl-10 py-2 rounded-r-lg"
        onClick={nextSlide}
      />
    </div>
  );
};

export default ImageSlider;
