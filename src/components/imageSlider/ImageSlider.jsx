import React, { useState, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
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
    }, 2000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-40 lg:w-full md:w-full sm:w-full lg:h-full md:h-full sm:h-full">
  <GrFormPrevious
    className="absolute top-1/2 transform -translate-y-1/2 left-0 z-5 text-white text-5xl xs:text-3xl rounded-r-lg transition-transform duration-500 ease-in-out"
    onClick={prevSlide}
  />
  <img
    src={images[currentIndex]}
    alt={`Slide ${currentIndex}`}
    className="w-full h-full transition-all"
  />
  <GrFormNext
    className="absolute top-1/2 transform -translate-y-1/2 right-0 z-5 text-white text-5xl xs:text-3xl rounded-r-lg transition-transform duration-500 ease-in-out"
    onClick={nextSlide}
  />
</div>

  );
};

export default ImageSlider;
