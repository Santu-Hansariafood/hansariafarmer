import React, { useState, useEffect } from "react";
import Carasole1 from "../../Image/Carasole/HF01.webp";
import Carasole2 from "../../Image/Carasole/HF02.webp";
import Carasole3 from "../../Image/Carasole/HF03.webp";
import Carasole4 from "../../Image/Carasole/HF04.webp";
import Carasole5 from "../../Image/Carasole/HF05.webp";
import Carasole6 from "../../Image/Carasole/HF06.webp";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    { image: Carasole1, title: "Title 1", description: "Description 1" },
    { image: Carasole2, title: "Title 2", description: "Description 2" },
    { image: Carasole3, title: "Title 3", description: "Description 3" },
    { image: Carasole4, title: "Title 4", description: "Description 4" },
    { image: Carasole5, title: "Title 5", description: "Description 5" },
    { image: Carasole6, title: "Title 6", description: "Description 6" },
  ];

  return (
    <div className="relative h-screen overflow-hidden mt-10">
      <div
        className="absolute w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-white"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h2 className="text-xl mb-2 text-white text-center">“{slide.title}”</h2>
              <p className="text-lg text-white text-right">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
