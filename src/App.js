import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ProductList from "./ProductList/ProductList";
import Address from "./Address/Address";
import Quality from "./Quality/Quality";
import Quantity from "./Quantity/Quantity";
import Details from "./Details/Details";
import ConfirmOrder from "./ConfirmOrder/ConfirmOrder";
import ThankYou from "./ThankYou/ThankYou";
import PreviousOrders from "./PreviousOrders/PreviousOrders";
import TodaysRate from "./TodaysRate/TodaysRate";
import DisplayBill from "./DisplayBill/DisplayBill";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/farmer-details/:id" element={<Details />} />
        <Route path="/previous-orders/:farmerId" element={<PreviousOrders />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/address-selection" element={<Address />} />
        <Route path="/quality-parameter" element={<Quality />} />
        <Route path="/quantity" element={<Quantity />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/thankyou/:orderId" element={<ThankYou />} />
        <Route path="/farmer-details/:id" element={<Details />} />
        <Route path="/today-rate" element={<TodaysRate />} />
        <Route path="/order-details/:id" element={<DisplayBill />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
