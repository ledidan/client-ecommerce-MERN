import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
const HeroCarousel = () => {
  const { products } = useSelector((state) => state.productList);

  useEffect(() => {}, []);
  return (
    <Container
      maxW="container.xl"
      marginTop={5}
      className="hero-section bg-with-black carousel slide carousel-fade"
      id="carouselExampleFade"
      data-bs-ride="carousel"
    >
      <Box className="hero-title" w={[300, 400, 700]}>
        <Text
          color="whiteAlpha.600"
          fontWeight={100}
          fontSize={{ base: "18px", md: "20px", lg: "30px" }}
          className="mb-4"
        >
          Big Sale
        </Text>
        <Heading
          as="h3"
          size="2xl"
          fontSize={{ base: "30px", md: "40px", lg: "70px" }}
          fontWeight={200}
        >
          Summer Sale
        </Heading>
        <Heading
          as="h1"
          size="4xl"
          fontSize={{ base: "50px", md: "70px", lg: "90px" }}
          color="white"
          className="mt-4"
          textTransform="uppercase"
        >
          Air Jordan 1
        </Heading>
      </Box>
      <Button
        leftIcon={<FiShoppingCart />}
        className="hero-button"
        colorScheme="red"
      >
        <Link href="/shop" className="shopNow">
          Mua sắm ngay
        </Link>
      </Button>
      <Box className="carousel-inner hero-banner-image">
        <HStack className="carousel-item" maxW="700px">
          <Image src="/images/air2.png" className="d-block " alt="..." />
        </HStack>
        <HStack className="carousel-item active" maxW="700px">
          <Image src="/images/nike.png" className="d-block " alt="..." />
        </HStack>
      </Box>
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          color="black"
        />

        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button> */}
    </Container>
  );
};

export default HeroCarousel;
