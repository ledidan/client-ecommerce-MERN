import React from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
const CartScreen = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      {/* Cart  */}
      <div className="container">
        {/* <div className="alert alert-info text-center mt-3">
          Your cart is empty
          <Link
            className="btn btn-success mx-5 px-5 py-3"
            to="/"
            style={{ fontSize: "12px" }}
          >
            SHOPPING NOW
          </Link>
        </div> */}
        <div className="alert alert-info text-center mt-3">
          Total Cart Products
          <Link className="text-success mx-2" to="/cart">
            (4)
          </Link>
        </div>
        <div className="cart-item row">
          <div className="remove-button d-flex justify-content-center align-items-center">
            <i className="fas fa-times"></i>
          </div>
          <div className="cart-image col-md-3">
            <img src="/images/2.png" alt="nike" />
          </div>
          <div className="cart-text col-md-5 d-flex align-items-center">
            <Link to="#">
              <h4>Nike Girls Shoe</h4>
            </Link>
          </div>
          <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex">
            <h6>QUANTITY</h6>
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-md-start">
            <h6>SUBTOTAL</h6>
            <h4>$465</h4>
          </div>
        </div>

        {/* End Of Cart Items */}
        <div className="total">
          <span className="sub">total:</span>
          <span className="total-price">$567</span>
        </div>
        <hr />
        <div className="cart-buttons d-flex align-items-center row">
          <Link to="/" className="col-md-6">
            <button>Continue to Shopping</button>
          </Link>
          <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <button>
              <Link to="/shipping" className="text-white">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
