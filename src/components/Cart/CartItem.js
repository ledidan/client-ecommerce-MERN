import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CartItem = () => {
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
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col"></th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={120}>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Flex className="itemside">
                          <div className="aside mx-3">
                            <img src="/images/1.png" className="img-sm" />
                          </div>
                          <Box className="info">
                            <a href="#" className="title text-dark">
                              Some name of item goes here nice
                            </a>
                            <p className="text-muted small">Brand: Gucci</p>
                          </Box>
                        </Flex>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div className="price-wrap">
                          <Text className="price">$1156</Text>
                          <small className="text-muted"> $315 each </small>
                        </div>
                      </td>
                      <td className="text-right">
                        <a href className="btn btn-light">
                          Xoá
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                  <Flex className="dlist-align" justify="space-between">
                    <dt>Tiền hàng:</dt>
                    <dd className="text-right">USD 568</dd>
                  </Flex>
                  <Flex className="dlist-align" justify="space-between">
                    <dt>Giảm giá:</dt>
                    <dd className="text-right">USD 658</dd>
                  </Flex>
                  <Flex className="dlist-align" justify="space-between">
                    <dt>Tổng tiền:</dt>
                    <dd className="text-right  h5">
                      <strong>$1,650</strong>
                    </dd>
                  </Flex>
                  <hr />
                  <Flex align="center" justify="center" className="mb-3">
                    <Image
                      src="/images/misc/payments.png"
                      h={10}
                      className="my-2"
                    />
                  </Flex>

                  <Link to="#" className="btn btn-dark ">
                    Thanh toán ngay <i className="fa fa-chevron-right" />
                  </Link>
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
