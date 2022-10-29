import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import { listProduct } from "../../redux/actions/ProductAction";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

const ShopSection = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

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
                      <Box
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
                            </Flex>
                          </div>
                        </div>
                      </Box>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default ShopSection;
