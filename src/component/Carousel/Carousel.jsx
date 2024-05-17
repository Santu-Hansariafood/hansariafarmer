import React, { useState, useEffect } from 'react';
import Carasole1 from "../../Image/Carasole/FARMER-12.webp"
import Carasole2 from "../../Image/Carasole/FARMER-13.webp"
import Carasole3 from "../../Image/Carasole/FARMER-14.webp"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Changed the modulus value to 3
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute w-full h-full flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="w-full h-full flex-shrink-0">
          <img src={Carasole1} alt="Slide 1" className="w-full h-full object-cover" />
          <p className="text-center text-white text-lg absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">Title 1</p>
        </div>
        <div className="w-full h-full flex-shrink-0">
          <img src={Carasole2} alt="Slide 2" className="w-full h-full object-cover" />
          <p className="text-center text-white text-lg absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">Title 2</p>
        </div>
        <div className="w-full h-full flex-shrink-0">
          <img src={Carasole3} alt="Slide 3" className="w-full h-full object-cover" />
          <p className="text-center text-white text-lg absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">Title 3</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
