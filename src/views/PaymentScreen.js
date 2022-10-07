import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { savePaymentMethod } from "../redux/actions/CartAction";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [payment, setPaymentMethod] = useState("Paypal");

  if (!shippingAddress) {
    history.push("/shipping");
  }
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/place-order");
    dispatch(savePaymentMethod(payment));
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          action=""
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                type="radio"
                value={payment}
                className="form-check-input"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal Or Credit Card</label>
            </div>
          </div>
          <button type="submit">
            <Link to="/place-order" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
