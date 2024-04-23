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
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-40 lg:w-full md:w-full sm:w-full lg:h-full md:h-full sm:h-full">
      <GrFormPrevious
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 text-white text-5xl xs:text-3xl cursor-pointer"
        onClick={prevSlide}
      />
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full transition-opacity duration-1000"
        style={{ opacity: currentIndex === 0 ? 1 : 0 }} // Initially show only the first image
      />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <GrFormNext
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 text-white text-5xl xs:text-3xl cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default ImageSlider;
