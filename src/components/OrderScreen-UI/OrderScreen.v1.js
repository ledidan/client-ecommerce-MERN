import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderAction,
  getOrder,
  payOrder,
} from "../../redux/actions/OrderAction";
import Loading from "../../components/LoadingError/Loading";
import Message from "../../components/LoadingError/Error";
import moment from "moment";
import axios from "axios";
import { ORDER_PAY_RESET } from "../../redux/constants/OrderConstants";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import URL from "../../URL";
const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  const history = useHistory();
  const toast = useToast();
  const [sdkReady, setSdkReady] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const orderDelete = useSelector((state) => state.orderDelete);
  const { success: successDelete } = orderDelete;
  const { loading: loadingPay, success: successPay } = orderPay;

  //* Address loading event to catching itemsPrice when clicked continue in cart!! Very Important
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((a, b) => a + b.qty * b.price, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(`${URL}/api/config/paypal`);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrder(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
    if (successDelete) {
      history.push("/cart");
      toast({
        title: "Xo?? ????n h??ng th??nh c??ng",
        description: `B???n ???? xo?? ????n h??ng ID: ${order._id} th??nh c??ng !!`,
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [dispatch, orderId, successPay, order, successDelete, history, toast]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteOrderAction(order._id));
  };
  return (
    <section className="order-id-wrapper mt-5">
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Xo?? ????n h??ng ?
            </AlertDialogHeader>

            <AlertDialogBody>
              B???n c?? ch???c ch???n mu???n xo?? ????n h??ng ? H??nh ?????ng n??y s??? kh??ng th???
              ho??n l???i ???????c!!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Tr??? l???i
              </Button>
              <Button
                colorScheme="red"
                onClick={(onClose, deleteHandler)}
                ml={3}
              >
                Xo??
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Container maxW="container.xxl">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <Box
              className="row justify-content-center align-items-center"
              h={150}
              bg="gray.50"
            >
              <div className="col-md-10">
                <div className="order-id-content">
                  <Heading as="h4" size="md" className="order-id">
                    OrderID: {order._id}
                  </Heading>
                  <ul className="order-meta">
                    <li>
                      <Text className="product" color="blackAlpha.500">
                        {order.orderItems.length}
                        {""}
                        {""} Product
                      </Text>
                    </li>
                    <li>
                      <Link to={`/order/${order._id}`}>
                        <Text fontSize="14px" className="track-order">
                          Track Order
                        </Text>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Box>
            <Box className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-7">
                    <div className="order-product mt-3">
                      <div className="order-title">
                        <Heading as="h5" size="md" className="title">
                          Th??ng tin s???n ph???m
                        </Heading>
                      </div>
                      <div className="order-product-table table-responsive">
                        <Table className="table">
                          <Tbody>
                            {order.orderItems.map((item, index) => (
                              <Tr key={index}>
                                <Td className="product">
                                  <div className="order-product-item d-flex">
                                    <div className="product-thumb">
                                      <img
                                        src={`${item.image}`}
                                        alt={`${item.name}`}
                                      />
                                    </div>
                                    <div className="product-content media-body">
                                      <Heading
                                        as="h5"
                                        size="md"
                                        className="title"
                                      >
                                        <a href="#0">{item.name}</a>
                                      </Heading>
                                      <ul>
                                        {/* <li>
                                          <Text fontSize="14px">
                                            Brand: {item.category.name}
                                          </Text>
                                        </li> */}
                                        <li>
                                          <Text fontSize="14px">
                                            {item.qty} X {item.price}
                                          </Text>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </Td>
                                <Td className="price">
                                  <Text
                                    fontSize="14px"
                                    className="product-price"
                                  >
                                    ${item.price * item.qty}
                                  </Text>
                                </Td>
                              </Tr>
                            ))}
                          </Tbody>
                        </Table>
                      </div>
                      <div className="order-product-total">
                        <div className="sub-total">
                          <Text className="value">Ti???n h??ng:</Text>
                          <Text className="price">${order.itemsPrice}</Text>
                        </div>
                        <div className="sub-total">
                          <Text className="value">Ph?? ship (+):</Text>
                          <Text className="price">${order.shippingPrice}</Text>
                        </div>
                        <div className="sub-total">
                          <Text className="value">Ph?? thu??? (+):</Text>
                          <Text className="price">${order.taxPrice}</Text>
                        </div>
                      </div>
                      <div className="payable-total">
                        <Text className="value">T???ng ti???n:</Text>
                        <Text className="price">${order.totalPrice}</Text>
                      </div>
                      <Flex justify="end" align="center">
                        {order.isPaid ? (
                          <Tag
                            ml="1"
                            size="lg"
                            colorScheme="green"
                            variant="solid"
                          >
                            <Text className="text-sm-start">
                              ???? thanh to??n {moment(order.paidAt).calendar()}
                            </Text>
                          </Tag>
                        ) : (
                          <Tag
                            ml="1"
                            size="lg"
                            colorScheme="red"
                            variant="solid"
                            className=""
                          >
                            <Text>Ch??a thanh to??n</Text>
                          </Tag>
                        )}
                      </Flex>
                      <Flex className="card-body border-top mt-3">
                        {!order.isPaid && (
                          <div className="col-12">
                            {loadingPay && <Loading />}
                            {!sdkReady ? (
                              <Loading />
                            ) : (
                              <PayPalButton
                                amount={order.totalPrice}
                                onSuccess={successPaymentHandler}
                              />
                            )}
                          </div>
                        )}
                      </Flex>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="single-order-details mt-3">
                      <div className="order-title ">
                        <Heading as="h5" size="md" className="title">
                          Th??ng tin ????n h??ng
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
                            <Text fontSize="md">{order._id}</Text>
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
                            <Text fontSize="md">
                              {moment(order.orderItems.createdAt).format("LLL")}
                            </Text>
                          </div>
                        </Flex>
                      </Stack>
                    </div>
                    <Stack className="single-order-details mt-2">
                      <div className="order-title mt-4">
                        <Heading as="h5" size="md" className="title">
                          Th??ng tin c?? nh??n
                        </Heading>
                      </div>
                      <Stack className="order-details-content">
                        <Flex
                          className="single-details-item flex-wrap"
                          align="center"
                        >
                          <div className="details-title">
                            <Heading as="h6" size="xs">
                              T??n:
                            </Heading>
                          </div>
                          <div className="details-content">
                            <Text fontSize="md">{order.user.name}</Text>
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
                            <Text fontSize="md">{order.user.email}</Text>
                          </div>
                        </Flex>
                        {/* <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs">
                          ??i???n tho???i:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">+123 456 789 0234</Text>
                      </div>
                    </Flex> */}
                        <Flex
                          className="single-details-item flex-wrap"
                          align="center"
                        >
                          <div className="details-title">
                            <Heading as="h6" size="xs">
                              ?????a ch???:
                            </Heading>
                          </div>
                          <div className="details-content">
                            <Text fontSize="md">
                              {order.shippingAddress.address} st,{" "}
                              {order.shippingAddress.city}, POX:{" "}
                              {order.shippingAddress.postalCode}
                            </Text>
                          </div>
                        </Flex>
                      </Stack>
                    </Stack>
                    <Stack className="single-order-details mt-4">
                      <Box className="order-title">
                        <Heading as="h5" size="md" className="title">
                          ?????a ch??? ng?????i nh???n
                        </Heading>
                      </Box>

                      <Stack className="order-details-content">
                        <Flex
                          className="single-details-item flex-wrap"
                          align="center"
                        >
                          <Box className="details-title">
                            <Heading as="h6" size="xs" className="title">
                              T??n ng?????i nh???n:
                            </Heading>
                          </Box>
                          <Box className="details-content">
                            <Text fontSize="md">{order.user.name}</Text>
                          </Box>
                        </Flex>
                        <Flex
                          className="single-details-item flex-wrap"
                          align="center"
                        >
                          <Box className="details-title">
                            <Heading as="h5" size="xs" className="title">
                              Email:
                            </Heading>
                          </Box>
                          <Box className="details-content">
                            <Text fontSize="md">{order.user.email}</Text>
                          </Box>
                        </Flex>
                        {/* <Flex
                      className="single-details-item flex-wrap"
                      align="center"
                    >
                      <div className="details-title">
                        <Heading as="h6" size="xs" className="title">
                          ??i???n tho???i:
                        </Heading>
                      </div>
                      <div className="details-content">
                        <Text fontSize="md">+123 456 789 0234</Text>
                      </div>
                    </Flex> */}
                        <Flex
                          className="single-details-item flex-wrap"
                          align="center"
                        >
                          <div className="details-title">
                            <Heading as="h6" size="xs" className="title">
                              ?????a ch???:
                            </Heading>
                          </div>
                          <div className="details-content">
                            <Text fontSize="md">
                              {order.shippingAddress.address} st,{" "}
                              {order.shippingAddress.city}, POX:{" "}
                              {order.shippingAddress.postalCode}
                            </Text>
                          </div>
                        </Flex>
                        {order.isDelivered ? (
                          <Tag
                            ml="1"
                            size="lg"
                            colorScheme="green"
                            variant="solid"
                          >
                            <Text className="text-center text-sm-start">
                              ??ang v???n chuy???n{" "}
                              {moment(order.deliveredAt).calendar()}
                            </Text>
                          </Tag>
                        ) : (
                          <Tag
                            ml="1"
                            size="lg"
                            colorScheme="red"
                            variant="solid"
                          >
                            <Text className="text-center text-sm-start">
                              Ch??a v???n chuy???n
                            </Text>
                          </Tag>
                        )}
                      </Stack>
                    </Stack>
                  </div>
                  <div className="col-md-12">
                    <div className="order-policy mt-3">
                      <div className="order-title mb-3">
                        <Heading as="h5" size="md" className="title">
                          Ch??nh s??ch hu??? ????n h??ng
                        </Heading>
                      </div>
                      <div className="policy-content">
                        <Text
                          fontSize="17px"
                          color="purple.500"
                          fontWeight={600}
                        >
                          1. Ng?????i mua ch??? c?? th??? h???y ????n khi:
                        </Text>
                        <ul className="p-4">
                          <li>
                            <Text fontSize="15">
                              ????n h??ng ??ang ??? tr???ng th??i Ch??? x??c nh???n (Ng?????i b??n
                              ch??a x??c nh???n ????n)
                            </Text>
                          </li>
                          <li>
                            <Text fontSize="15">
                              Khi ????n h??ng ??? tr???ng th??i Ch??? l???y h??ng (Ng?????i b??n
                              ??ang ????ng g??i v?? chu???n b??? giao cho ????n v??? v???n
                              chuy???n), y??u c???u s??? c???n ???????c Ng?????i b??n ph???n h???i:
                            </Text>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Stack className="col-md-12 border-top mb-4 mt-4">
                    <Flex className="order-btn pt-3" gap={5}>
                      {!order.isPaid && (
                        <Button
                          onClick={onOpen}
                          variant="ghost"
                          colorScheme="red"
                        >
                          <Text
                            fontSize="18px"
                            textTransform="uppercase"
                            className="main-btn error-btn-text"
                          >
                            hu??? ????n h??ng
                          </Text>
                        </Button>
                      )}
                      <Button
                        className="btn"
                        variant="ghost"
                        colorScheme="telegram"
                      >
                        <a href="/shop">
                          <i className="fa fa-chevron-left p-2" />
                          Ti???p t???c mua h??ng
                        </a>
                      </Button>
                    </Flex>
                  </Stack>
                </div>
              </div>
            </Box>
          </>
        )}
      </Container>
    </section>
  );
};

export default OrderScreen;
