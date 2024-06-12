import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ProductList from "../pages/ProductList/ProductList";
import Address from "../pages/Address/Address";
import Quality from "../pages/Quality/Quality";
import Quantity from "../pages/Quantity/Quantity";
import Details from "../pages/Details/Details";
import ConfirmOrder from "../pages/ConfirmOrder/ConfirmOrder";
import ThankYou from "../pages/ThankYou/ThankYou";
import PreviousOrders from "../pages/PreviousOrders/PreviousOrders";
import TodaysRate from "../pages/TodaysRate/TodaysRate";
import DisplayBill from "../pages/DisplayBill/DisplayBill";
import Header from "../component/common/Header/Header";
import Footer from "../component/common/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/farmer-details/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/previous-orders/:farmerId"
          element={
            <ProtectedRoute>
              <PreviousOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-list"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/address-selection"
          element={
            <ProtectedRoute>
              <Address />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quality-parameter"
          element={
            <ProtectedRoute>
              <Quality />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quantity"
          element={
            <ProtectedRoute>
              <Quantity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirm-order"
          element={
            <ProtectedRoute>
              <ConfirmOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/thankyou/:orderId"
          element={
            <ProtectedRoute>
              <ThankYou />
            </ProtectedRoute>
          }
        />
        <Route
          path="/today-rate"
          element={
            <ProtectedRoute>
              <TodaysRate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-details/:id"
          element={
            <ProtectedRoute>
              <DisplayBill />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
