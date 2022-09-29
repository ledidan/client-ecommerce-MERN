import React from "react";
import Header from "../components/Header";
const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="row order-detail">
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb sm-0">
          <div className="row">
            <div className="col-md-4 center">
              <div className="alert-success order-box">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
