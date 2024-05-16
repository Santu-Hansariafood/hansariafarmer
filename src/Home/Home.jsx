import React from "react";
import Carousel from "../component/Carousel/Carousel";
import About from "../component/About/About";
import Teams from "../component/Teams/Teams";
import Location from "../component/Location/Location";
import Contact from "../component/Contact/Contact";
import Brands from "../component/Brands/Brands";
import Groth from "../component/Groth/Groth";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Teams />
      <Groth />
      <Brands />
      <Location />
      <Contact />
    </>
  );
};

export default Home;
