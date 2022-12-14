import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import { ORDER_CREATE_RESET } from "../../redux/constants/OrderConstants";
import { createOrder } from "../../redux/actions/OrderAction";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  // Product Price
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((a, b) => a + b.qty * b.price, 0)
  );
  // Shipping Price
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  // Tax Price
  cart.taxPrice = addDecimals(Number(0.15 * cart.itemsPrice).toFixed(2));
  // Total Price
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);

  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [history, order, dispatch, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <Container className="container" maxW="container.xl">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <Box className="alert-success order-box">
                  <i class="fas fa-user"></i>
                </Box>
              </div>
              <div className="col-md-8 center">
                <Heading as="h5" size="md">
                  <Text fontWeight="bold" fontSize="18px">
                    Customer
                  </Text>
                </Heading>
                <Text fontSize="16px">{userInfo.name}</Text>
                <Text fontSize="16px">{userInfo.email}</Text>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <Box className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </Box>
              </div>
              <div className="col-md-8 center">
                <Heading as="h5" size="md">
                  <Text fontWeight="bold" fontSize="18px">
                    Order info
                  </Text>
                </Heading>
                <Text fontSize="16px">
                  Shipping: {cart.shippingAddress.country}
                </Text>
                <Text fontSize="16px">Pay method: {cart.paymentMethod}</Text>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <Box className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </Box>
              </div>
              <div className="col-md-8 center">
                <Heading as="h5" size="md">
                  <Text fontSize="18px" fontWeight="bold">
                    Deliver to
                  </Text>
                </Heading>
                <Text fontSize="16px">
                  Address: {cart.shippingAddress.address} st,{" "}
                  {cart.shippingAddress.city}, POX:{" "}
                  {cart.shippingAddress.postalCode}
                </Text>
              </div>
            </div>
          </div>
        </div>
        w
        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {cart.cartItems.length === 0 ? (
              <Message variant="alert-info mt-5">Your cart is empty</Message>
            ) : (
              <>
                {cart.cartItems.map((item, index) => {
                  return (
                    <div className="order-product row" key={index}>
                      <div className="col-md-3 col-6">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="col-md-5 col-6 d-flex align-items-center">
                        <Link to={`/products/${item.product}`}>
                          <h6>{item.name}</h6>
                          <small>{item.category.name}</small>
                        </Link>
                      </div>
                      <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                        <h4>QUANTITY</h4>
                        <h6>{item.qty}</h6>
                      </div>
                      <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                        <h4>SUBTOTAL</h4>
                        <h6>${item.price}</h6>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>${cart.itemsPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>${cart.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>${cart.taxPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>${cart.totalPrice}</td>
                </tr>
              </tbody>
            </table>
            {cart.cartItems.length === 0 ? null : (
              <button type="submit" onClick={placeOrderHandler}>
                <Link to="/order" className="text-white">
                  PLACE ORDER
                </Link>
              </button>
            )}
            {error && (
              <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PlaceOrderScreen;
