import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ProductList from "./ProductList/ProductList";
import Adderss from "./Address/Address";
import Quality from "./Quality/Quality";
import Quantity from "./Quantity/Quantity";
import Details from "./Details/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/farmer-details/:id" element={<Details/>}/>
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/address-selection" element={<Adderss />} />
        <Route path="/quality-parameter" element={<Quality />} />
        <Route path="/quantity" element={<Quantity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
