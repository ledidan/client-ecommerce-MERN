import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
const PlaceOrder = () => {
  return (
    <section className="order-id-wrapper">
      <Container maxW="container.xxl">
        <Box
          className="row justify-content-center align-items-center"
          h={100}
          bg="gray.50"
        >
          <div className="col-md-10">
            <div className="order-id-content">
              <h4 className="order-id">Order ID: 1234567890</h4>
              <ul className="order-meta">
                <li>
                  <a className="product" href="#0">
                    4 Product
                  </a>
                </li>
                <li>
                  <Text fontSize="14px" className="track-order">
                    Track Order
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </Box>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-7">
                <div className="order-product mt-3">
                  <div className="order-title">
                    <Heading as="h5" size="md" className="title">
                      Thông tin sản phẩm
                    </Heading>
                  </div>
                  <div className="order-product-table table-responsive">
                    <Table className="table">
                      <Tbody>
                        <Tr>
                          <Td className="product">
                            <div className="order-product-item d-flex">
                              <div className="product-thumb">
                                <img
                                  src="assets/images/product-cart/product-1.png"
                                  alt="product"
                                />
                              </div>
                              <div className="product-content media-body">
                                <Heading as="h5" size="md" className="title">
                                  <a href="#0">Hollow Port</a>
                                </Heading>
                                <ul>
                                  <li>
                                    <Text fontSize="14px">Brown</Text>
                                  </li>
                                  <li>
                                    <Text fontSize="14px">XL</Text>
                                  </li>
                                  <li>
                                    <Text fontSize="14px">1 X 36.00</Text>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Td>
                          <Td className="price">
                            <Text fontSize="14px" className="product-price">
                              $36.00
                            </Text>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </div>
                  <div className="order-product-total">
                    <div className="sub-total">
                      <Text className="value">Tiền hàng:</Text>
                      <Text className="price">$144.00</Text>
                    </div>
                    <div className="sub-total">
                      <Text className="value">Phí ship (+):</Text>
                      <Text className="price">$10.50</Text>
                    </div>
                    <div className="sub-total">
                      <Text className="value">Giảm giá (-):</Text>
                      <Text className="price">$10.00</Text>
                    </div>
                  </div>
                  <div className="payable-total">
                    <Text className="value">Tổng tiền:</Text>
                    <Text className="price">$10.00</Text>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="single-order-details mt-3">
                  <div className="order-title ">
                    <Heading as="h5" size="md" className="title">
                      Thông tin đơn hàng
                    </Heading>
                  </div>
                  <Stack className="order-details-content">
                    <Flex
                      className="single-details-item d-flex flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs" className="title">
                          Order ID:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">2352962A</Text>
                      </div>
                    </Flex>
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs" className="title">
                          Date &amp; Time:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">02/23/2020, 5:00PM</Text>
                      </div>
                    </Flex>
                  </Stack>
                </div>
                <div className="single-order-details mt-2">
                  <div className="order-title mt-4">
                    <Heading as="h5" size="md" className="title">
                      Thông tin cá nhân
                    </Heading>
                  </div>
                  <div className="order-details-content">
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs">
                          Tên:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">Jhone Doe</Text>
                      </div>
                    </Flex>
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs">
                          Email:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">doejhon@email.com</Text>
                      </div>
                    </Flex>
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs">
                          Điện thoại:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">+123 456 789 0234</Text>
                      </div>
                    </Flex>
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs">
                          Địa chỉ:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">8901 Marmora Road, Glasgow</Text>
                      </div>
                    </Flex>
                  </div>
                </div>
                <Stack className="single-order-details mt-2">
                  <div className="order-title">
                    <Heading as="h5" size="md" className="title">
                      Địa chỉ người nhận
                    </Heading>
                  </div>
                  <div className="order-details-content">
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <Box className="details-title">
                        <Heading as="h6" size="xs" className="title">
                          Tên người nhận:
                        </Heading>
                      </Box>
                      <Box className="details-content">
                        <Text fontSize="md">Jhone Doe</Text>
                      </Box>
                    </Flex>
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h5" size="xs" className="title">
                          Email:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">doejhon@email.com</Text>
                      </div>
                    </Flex>
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs" className="title">
                          Điện thoại:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">+123 456 789 0234</Text>
                      </div>
                    </Flex>
                    <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs" className="title">
                          Địa chỉ:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">
                          Marmora Road, Glasgow, D04 89GR.
                        </Text>
                      </div>
                    </Flex>
                  </div>
                </Stack>
              </div>
              <div className="col-md-12">
                <div className="order-policy mt-3">
                  <div className="order-title mb-3">
                    <Heading as="h5" size="md" className="title">
                      Chính sách huỷ đơn hàng
                    </Heading>
                  </div>
                  <div className="policy-content">
                    <Text fontSize="17px" color="purple.500" fontWeight={600}>
                      1. Người mua chỉ có thể hủy đơn khi:
                    </Text>
                    <ul className="p-4">
                      <li>
                        <Text fontSize="15">
                          Đơn hàng đang ở trạng thái Chờ xác nhận (Người bán
                          chưa xác nhận đơn)
                        </Text>
                      </li>
                      <li>
                        <Text fontSize="15">
                          Khi đơn hàng ở trạng thái Chờ lấy hàng (Người bán đang
                          đóng gói và chuẩn bị giao cho đơn vị vận chuyển), yêu
                          cầu sẽ cần được Người bán phản hồi:
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <HStack className="col-md-12">
                <Flex className="order-btn pt-2" gap={10}>
                  <Link to="#0">
                    <Text
                      fontSize="18px"
                      textTransform="uppercase"
                      className="main-btn primary-btn-text"
                    >
                      Mua Tiếp
                    </Text>
                  </Link>
                  <Link to="#0">
                    <Text
                      fontSize="18px"
                      textTransform="uppercase"
                      className="main-btn error-btn-text"
                    >
                      huỷ đơn hàng
                    </Text>
                  </Link>
                </Flex>
              </HStack>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlaceOrder;
