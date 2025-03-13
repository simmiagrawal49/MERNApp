import React from "react";
import { useSelector } from "react-redux";
import "./ShippingScreen.css";
import ShippingAddress from "./ShippingAddress/ShippingAddress";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="shipping-screen-wrapper">
      <h1>Shipping Details</h1>
      <div className="shipping-flex-container">
        <div className="shipping-flex-address">
          <ShippingAddress />
        </div>
        <div className="shipping-flex-order-summary">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
