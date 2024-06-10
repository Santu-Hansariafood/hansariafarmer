import React from "react";

const brands = [
  "SKYLARK HATCHERRIES PRIVATE LIMITED.",
  "MAHARASHTRA FEEDS PRIVATE LIMITED.",
  "PREMIUM CHICK FEEDS PVT. LTD.",
  "JAPFA COMFEED INDIA PVT. LTD.",
  "SUGUN FOODS PRIVATE LIMITED.",
  "SNEHA FARMS PRIVATE LIMITED.",
  "ABIS EXPORTS INDIA PVT. LTD.",
  "SHALIMARPELLET FEEDS LTD.",
  "NUTRIKRAFT INIDA PVT. LTD.",
  "VENK'S (INDIA) LIMITED.",
  "ANMOL FEEDS PVT. LTD.",
  "GODREJ AGROVET LTD.",
  "SONAVETS PVT. LTD.",
];

const BrandsList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-center">Our Top Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="brand-item bg-gray-500 p-6 rounded-md text-center transition duration-500 ease-in-out transform hover:bg-gray-700 hover:shadow-xl hover:-translate-y-2 hover:scale-105"
          >
            <p className="transition-transform text-white duration-500 ease-in-out transform hover:translate-y-1 hover:italic">
              {brand}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
