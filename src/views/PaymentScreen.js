import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const PaymentScreen = () => {
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="container d-flex-justify-content-center align-items center login">
        <form
          action=""
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input type="radio" value="Paypal" className="form-check-input" />
              <label className="form-check-label">PayPal Or Credit Card</label>
            </div>
          </div>
          <button type="submit">
            <Link to="/placeorder" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
