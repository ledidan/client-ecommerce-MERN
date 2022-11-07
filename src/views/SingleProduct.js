import React, { useEffect, useState } from "react";
import Rating from "../components/homeComponents/Rating";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  listProduct,
  listProductDetails,
} from "../redux/actions/ProductAction";
import Loading from "./../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../redux/constants/ProductConstants";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { addToCart } from "../redux/actions/CartAction";
import Description from "../components/ProductDetail/Description";
import RatingDetail from "../components/ProductDetail/RatingDetail";
import PreferProduct from "../components/ProductDetail/PreferProduct";
const SingleProduct = ({ match }) => {
  window.scrollTo(0, 0);
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
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productDetails;
  const { products } = productList;
  const { userInfo } = userLogin;
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productCreateReview;

  // ComponentDidMount, async/await
  useEffect(() => {
    if (successCreateReview) {
      toast({
        title: `Gửi đánh giá thành công !`,
        description: `Bạn đã thêm thành công đánh giá cho sản phẩm ${product.name}`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProduct());
    dispatch(listProductDetails(productId));
    // eslint-disable-next-line
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
                    {/* Description */}
                    <Description product={product} />
                  </Stack>
                </div>
              </div>
            </div>

            {/* RATING */}
            <RatingDetail
              product={product}
              userInfo={userInfo}
              comment={comment}
              rating={rating}
              setRating={setRating}
              setComment={setComment}
              loadingCreateReview={loadingCreateReview}
              errorCreateReview={errorCreateReview}
              productId={productId}
            />
          </>
        )}
        <div className="maylike-products-wrapper">
          <Center>
            <Heading as="h4" size="md" textTransform="uppercase">
              Sản phẩm bạn có thể thích
            </Heading>
          </Center>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <PreferProduct key={item._id} productPrefer={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
