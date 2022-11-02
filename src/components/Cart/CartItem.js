import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/CartAction";

const CartItem = (props) => {
  const { cartItems, total, dispatch, history } = props;

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
  return (
    <>
      <section className="section-pagetop bg my-4 p-5">
        <div className="container">
          <Heading as="h2" size="lg" className="title-page">
            Shopping cart
          </Heading>
        </div>
      </section>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <Stack className="card">
                <Table
                  className="table table-borderless table-shopping-cart"
                  size="lg"
                  marginTop="15px"
                >
                  <Thead className="text-muted">
                    <Tr className="small text-uppercase">
                      <Th scope="col">Sản phẩm</Th>
                      <Th scope="col" width={140}>
                        Số lượng
                      </Th>
                      <Th scope="col" width={100} textAlign="center">
                        Giá
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cartItems.map((item) => (
                      <Tr key={item._id}>
                        <Td>
                          <Flex className="itemside">
                            <Link
                              className="aside mx-3"
                              to={`/products/${item.product}`}
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="img-sm"
                              />
                            </Link>
                            <Box className="info">
                              <Link to={`/products/${item.product}`}>
                                <Text size="lg" className="title text-dark">
                                  {item.name}
                                </Text>
                              </Link>
                              <Text size="sm" className="text-muted small">
                                Brand: {item.category.name}
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
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
                        </Td>
                        <Td textAlign="center">
                          <Box className="price-wrap">
                            <Text size="lg" className="price">
                              ${item.price}
                            </Text>
                            {/* <small className="text-muted"> $315 each </small> */}
                          </Box>
                        </Td>
                        <Td textAlign="center">
                          <Button
                            colorScheme="blackAlpha"
                            className="btn btn-light"
                            onClick={() => removeCartHandler(item.product)}
                          >
                            Xoá
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Flex className="card-body border-top">
                  <Link className="ml-2 btn btn-light">
                    <i className="fa fa-chevron-left p-2" />
                    Trở lại cửa hàng
                  </Link>
                </Flex>
              </Stack>{" "}
              {/* card.// */}
              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck" /> Miễn phí giao
                  hàng từ 1 - 3 ngày
                </p>
              </div>
            </main>
            <aside className="col-md-3">
              <Stack className="card">
                <VStack className="card-body" align="stretch" spacing={4}>
                  {/* <Flex className="dlist-align" justify="space-between">
                    <dt>Tiền hàng:</dt>
                    <dd className="text-right"></dd>
                  </Flex>
                   */}
                  <Flex className="dlist-align" justify="space-between">
                    <dt>Giảm giá:</dt>
                    <dd className="text-right">$0</dd>
                  </Flex>
                  <Flex className="dlist-align" justify="space-between">
                    <dt>Tổng tiền:</dt>
                    <dd className="text-right  h5">
                      <strong>${total}</strong>
                    </dd>
                  </Flex>
                  <hr />
                  <Flex align="center" justify="center" className="mb-3">
                    <Image
                      src="/images/misc/payment-paypal.png"
                      h={10}
                      className="my-2"
                    />
                  </Flex>
                  {total > 0 && (
                    <Link
                      to="#"
                      className="btn btn-dark"
                      onClick={checkOutHandler}
                    >
                      Thanh toán ngay <i className="fa fa-chevron-right" />
                    </Link>
                  )}
                </VStack>
              </Stack>
            </aside>
          </div>
        </div>
      </section>
      <section className="section-name bg padding-y">
        <div className="container">
          <h6>Payment and refund policy</h6>
        </div>
      </section>
    </>
  );
};

export default CartItem;
