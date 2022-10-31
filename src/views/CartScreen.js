import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/CartAction";
import { Container, Select } from "@chakra-ui/react";

const CartScreen = ({ match, location, history }) => {
  // keep window screen always top
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const productId = match.params.id;
  // Finding URL contain " = "
  const qty = location.qty;
  // Update Cart
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Calculate total product prices
  const total = cartItems.reduce((a, b) => a + b.qty * b.price, 0).toFixed(2);

  // Checkout handler
  const checkOutHandler = (e) => {
    e.preventDefault();
    history.push(`/login?redirect=shipping`);
  };

  // Remove product Handler
  const removeCartHandler = (id) => {
    // TODO
    dispatch(removeFromCart(id));
  };

  // address side-effect when cart added
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      {/* Cart */}
      <Container className="container" h="100vh">
        {cartItems.length === 0 ? (
          <div className=" alert alert-dark text-center mt-3">
            Bạn chưa thêm sản phẩm nào !
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "15px",
              }}
            >
              Trở lại cửa hàng
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-success text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cart item */}
            {cartItems.map((item) => (
              <>
                <div className="cart-iterm row" key={item.product}>
                  <div
                    className="remove-button d-flex justify-content-center align-items-center"
                    onClick={() => removeCartHandler(item.product)}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="cart-image col-md-3">
                    <Link to={`/products/${item.product}`}>
                      <img src={item.image} alt={item.name} />
                    </Link>
                  </div>
                  <div className="cart-text col-md-5 mt-3 d-flex align-items-center">
                    <Link to={`/products/${item.product}`}>
                      <h4>{item.name}</h4>
                    </Link>
                  </div>
                  <div className="cart-qty col-md-2 col-sm-5 mt-md-3 d-flex flex-column justify-content-center">
                    <h6>QUANTITY</h6>
                    <Select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                    <h6>Price</h6>
                    <h4>${item.price}</h4>
                  </div>
                </div>
              </>
            ))}
            {/* End of cart iterms */}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6 ">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Checkout</button>
                </div>
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default CartScreen;
