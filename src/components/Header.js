import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import MobileHeader from "./Layout/MobileHeader";
import DesktopHeader from "./Layout/DesktopHeader";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div>
      {/* Top Header */}
      <Box
        w="100%"
        borderBottomWidth={4}
        borderRadius="2px"
        className="Announcement"
        borderColor="gray.300"
        bg="blackAlpha.300"
      >
        <Container maxW="container.xl">
          <Flex className="row" align="center" justify="between">
            <Flex align="center" className="col-md-4 display-none">
              <Text marginRight="2" className="fw-bold">
                VN
              </Text>
              <Text>EN</Text>
            </Flex>
            <Flex align="center" justify="end" className="col-md-2">
              <Text fontSize="lg" className="fw-bold">
                Giảm Giá 40%
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="center"
              className="col-12 col-lg-6 justify-content-lg-end display-none"
            >
              <a href="https://www.facebook.com/ledidan">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/blackdouble.d">
                <FaInstagram />
              </a>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* Header */}
      <Flex className="header">
        <Container maxW="container.xl">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <MobileHeader
              cartItems={cartItems}
              userInfo={userInfo}
              keyword={keyword}
              dispatch={dispatch}
              setKeyword={setKeyword}
            />
          </div>

          {/* PC HEADER */}
          <Container class="navbar-expand-lg display-none" maxW="container.xl">
            <DesktopHeader
              cartItems={cartItems}
              userInfo={userInfo}
              keyword={keyword}
              dispatch={dispatch}
              setKeyword={setKeyword}
            />
          </Container>
        </Container>
      </Flex>
    </div>
  );
};

export default Header;
