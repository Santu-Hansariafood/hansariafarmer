import React, { useState, useEffect } from 'react';
import { FaRegStar } from "react-icons/fa";

const feedbacks = [
  { feedback: "Great service and support!", name: "Farmer John", rating: 5, state:'West Bengal' },
  { feedback: "Helped increase my yield significantly.", name: "Farmer Jane", rating: 4, state:'Biher' },
  { feedback: "Highly recommend to other farmers.", name: "Farmer Bob", rating: 5, state:'Uttar Pradesh' },
  { feedback: "Efficient and reliable.", name: "Farmer Alice", rating: 5, state:'Assam' },
  { feedback: "Made farming much easier.", name: "Farmer Tom", rating: 5, state:'Assam' },
  { feedback: "Fantastic experience.", name: "Farmer Emma", rating: 5, state:'Channi' },
  { feedback: "Great value for money.", name: "Farmer Luke", rating: 1 , state:'Mahastra'},
  { feedback: "Exceptional quality.", name: "Farmer Mia", rating: 5, state:'West Bengal' },
  { feedback: "The best in the market.", name: "Farmer Noah", rating: 5, state:'West Bengal' },
  { feedback: "Outstanding service.", name: "Farmer Olivia", rating: 5 , state:'West Bengal'}
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Valuable Feedback from Farmer's</h2>
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="min-w-full p-6 text-center bg-white rounded-lg shadow-lg flex flex-col items-center"
          >
            <p className="text-xl font-semibold mb-4">{item.feedback}</p>
            <div className="flex mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <FaRegStar key={i} className="w-6 h-6 text-yellow-500" />
              ))}
            </div>
            <p className="text-lg font-medium text-gray-700">{item.name} - <span className='italic'>{item.state}</span></p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
