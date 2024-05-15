import React from 'react';

const brands = [
  'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5',
  'Brand 6', 'Brand 7', 'Brand 8', 'Brand 9', 'Brand 10'
];

const BrandsList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Our Top Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item bg-gray-200 p-4 rounded-md text-center transition duration-300 ease-in-out transform hover:bg-gray-300">{brand}</div>
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
