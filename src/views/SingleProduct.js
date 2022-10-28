import React, { useEffect, useState } from "react";
import Rating from "../components/homeComponents/Rating";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  listProductDetails,
  productCreateReviewAction,
} from "../redux/actions/ProductAction";
import Loading from "./../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../redux/constants/ProductConstants";
import moment from "moment";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import { addToCart } from "../redux/actions/CartAction";
const SingleProduct = ({ match }) => {
  // Set up Hooks State
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const toast = useToast();
  // GET PRODUCT ID
  const productId = match.params.id;
  const dispatch = useDispatch();

  // CALL REDUCER
  const productDetails = useSelector((state) => state.productDetails);
  const userLogin = useSelector((state) => state.userLogin);
  const productCreateReview = useSelector((state) => state.productCreateReview);
  const { loading, error, product } = productDetails;
  const { userInfo } = userLogin;
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productCreateReview;

  // ComponentDidMount, async/await
  useEffect(() => {
    if (successCreateReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  // Handle Add Cart Button
  const AddToCartHandle = (e) => {
    e.preventDefault();
    dispatch(addToCart(productId, qty));
    toast({
      title: `Thêm ${qty} sản phẩm thành công.`,
      description: `Bạn đã thêm ${product.name} vào giỏ hàng`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  // Handle Submit Review
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      productCreateReviewAction(productId, {
        rating,
        comment,
      })
    );
  };
  return (
    <>
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <Image src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <Heading as="h2" size="20px" className="product-name">
                      {product.name}
                    </Heading>
                  </div>
                  <Text fontSize="16px">{product.description}</Text>

                  <Stack className="product-count col-lg-10">
                    <Flex className="flex-box d-flex justify-content-between align-items-center">
                      <Heading as="h6">Giá</Heading>
                      <Text fontSize="18px">${product.price}</Text>
                    </Flex>
                    <Flex className="flex-box d-flex justify-content-between align-items-center">
                      <Heading as="h6">Tình trạng</Heading>
                      {product.countInStock > 0 ? (
                        <Text color="green.600">Còn hàng</Text>
                      ) : (
                        <Text color="tomato" textTransform="uppercase">
                          Tạm hết hàng
                        </Text>
                      )}
                    </Flex>
                    <Flex className="flex-box d-flex justify-content-between align-items-center">
                      <Heading as="h6">Đánh giá</Heading>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </Flex>
                    {product.countInStock > 0 ? (
                      <>
                        <Flex className="flex-box d-flex justify-content-between align-items-center">
                          <Heading as="h6">Số lượng</Heading>
                          <Box>
                            <Select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Select>
                          </Box>
                        </Flex>

                        <button
                          onClick={AddToCartHandle}
                          className="round-black-btn"
                        >
                          Thêm giỏ hàng
                        </button>
                      </>
                    ) : null}
                    <Stack className="col-lg-12">
                      <Accordion allowToggle>
                        <AccordionItem>
                          <Heading as="h3" size="18px">
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Thông tin sản phẩm
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </Heading>
                          <AccordionPanel pb={4}>
                            {product.description}
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <Heading as="h3" size="18px">
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Chính sách shipping và đổi trả
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </Heading>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Stack>
                  </Stack>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              {userInfo ? (
                <Tabs isFitted variant="enclosed">
                  <TabList mb="1em">
                    <Tab>
                      <Heading as="h3" size="md">
                        Đánh giá sản phẩm
                      </Heading>
                    </Tab>
                    <Tab>
                      <Heading as="h3" size="md">
                        Mô tả sản phẩm
                      </Heading>
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <div className="row">
                        <div className="col-md-6">
                          <Heading as="h6" size="md" className="mb-3">
                            ĐÁNH GIÁ
                          </Heading>
                          {product.reviews.length === 0 && (
                            <Message variant={"alert-secondary mt-3"}>
                              Không có đánh giá
                            </Message>
                          )}
                          {product.reviews.map((review) => (
                            <Box
                              className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded-0"
                              key={review._id}
                            >
                              <Text fontSize="lg" fontWeight="bold">
                                {review.name}
                              </Text>
                              <Rating value={review.rating} />
                              <Text fontSize="14px" fontWeight="light">
                                {moment(review.createdAt).calendar()}
                              </Text>
                              <Text
                                fontSize="16px"
                                className="alert alert-info mt-3"
                              >
                                {review.comment}
                              </Text>
                            </Box>
                          ))}
                        </div>
                        <form className="col-md-6" onSubmit={submitHandler}>
                          <Heading as="h6" size="md" textTransform="uppercase">
                            Viết đánh giá sản phẩm
                          </Heading>
                          <div className="my-4">
                            {loadingCreateReview && <Loading />}
                            {errorCreateReview && (
                              <Message variant="alert-danger">
                                {errorCreateReview}
                              </Message>
                            )}
                          </div>
                          <div className="my-4">
                            <strong>Xếp hạng</strong>
                            <select
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                              className="col-12 bg-light p-3 mt-2 border-0 rounded-0"
                            >
                              <option value="">Select...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fair</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Very Good</option>
                              <option value="5">5 - Excellent</option>
                            </select>
                          </div>
                          <div className="my  -4">
                            <strong>Bình luận</strong>
                            <textarea
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              row="3"
                              className="col-12 bg-light p-3 mt-2 border-0 rounded-0"
                            ></textarea>
                          </div>
                          <div className="my-3">
                            <button
                              disabled={loadingCreateReview}
                              className="col-12 bg-dark border-0 p-3 rounded-0 text-white"
                            >
                              Gửi
                            </button>
                          </div>
                        </form>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <p>two!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              ) : (
                <div className="my-3">
                  <Message variant={"alert-warning"}>
                    Xin vui lòng{" "}
                    <Link to="/login">
                      <strong>Đăng nhập </strong>
                    </Link>
                    để viết đánh giá{" "}
                  </Message>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
