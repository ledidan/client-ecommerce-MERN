import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import Pagination from "./pagination";
import { listProduct } from "../../redux/actions/ProductAction";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { MdAddShoppingCart } from "react-icons/md";
import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const ShopSection = (props) => {
  const { keyword, pageNumber } = props;
  const dispatch = useDispatch();
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pageNumber));
    setAnimateCard([{ X: 100, opacity: 1 }]);
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Container maxW="max-content">
        <Stack className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shop container row">
                <Center mb={45} mt={20}>
                  <Heading as="h2" size="2xl" textTransform="uppercase">
                    sneakers bán chạy nhất
                  </Heading>
                </Center>

                {loading ? (
                  <div className="mb-3">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 1.02] }}
                        transition={{ duration: 0.25 }}
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <Image src={product.image} alt={product.name} />
                            </div>
                          </Link>
                          <div className="shopText">
                            <Text fontSize="xl" isTruncated>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </Text>
                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <Flex align="center">
                              <Heading as="h4" size="sm">
                                ${product.price}
                              </Heading>
                              <Spacer />
                              <Button
                                colorScheme="black"
                                leftIcon={<MdAddShoppingCart />}
                                variant="outline"
                                className="shop-button"
                                p="4"
                              >
                                Add to cart
                              </Button>
                            </Flex>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  page={page}
                  pages={pages}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default ShopSection;
