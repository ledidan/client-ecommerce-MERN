import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/UserAction";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaRegUserCircle,
} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      {/* Top Header */}
      <Box
        w="100%"
        borderBottomWidth={4}
        borderRadius="2px"
        borderColor="gray.300"
        className="Announcement"
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
              <Link to="https://www.facebook.com/ledidan">
                <FaFacebook />
              </Link>
              <Link to="https://instagram.com/blackdouble.d">
                <FaInstagram />
              </Link>
              <Link to="">
                <FaLinkedin />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* Header */}
      <Flex className="header">
        <Container maxW="container.xl" className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-4 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-8 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <ul className="nav nav-pills">
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle name-button text-dark"
                            data-bs-toggle="dropdown"
                          >
                            <i className="fas fa-user"></i>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="/profile">
                                Tài khoản
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                                onClick={logoutHandler}
                              >
                                Thoát
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <ul className="nav nav-pills">
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link text-dark"
                            data-bs-toggle="dropdown"
                          >
                            <FaRegUserCircle size="18px" />
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="/login">
                                Đăng nhập
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/register">
                                Đăng ký
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link to={`/wishlist`} className="nav-link">
                            <AiOutlineHeart size="18px" color="black" />
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/cart"
                            className="cart-mobile-icon nav-link"
                          >
                            {/* <i className="fas fa-shopping-bag"></i> */}
                            <HiOutlineShoppingBag size={20} color="black" />
                            <span className="badge">{cartItems.length}</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="col-12 d-flex align-items-center display-none">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control search"
                      placeholder="Tìm kiếm..."
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <Container className="pc-header" maxW="container.xl">
            <div className="row">
              <div className="col-md-2 col-6 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Tìm kiếm..."
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <Flex
                align="center"
                justify="end"
                className="col-md-4 Login-Register"
              >
                {userInfo ? (
                  <div className="btn-group">
                    <ul className="nav nav-pills">
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle name-button text-dark"
                          data-bs-toggle="dropdown"
                        >
                          Chào,{" "}
                          {userInfo.isAdmin
                            ? `Admin ${userInfo.name}`
                            : `${userInfo.name}`}
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/profile">
                              Tài khoản
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={logoutHandler}
                            >
                              Thoát
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Flex marginRight={8}>
                    <Link to="/login" className="mx-4">
                      <Text fontSize={15}>Đăng nhập</Text>
                    </Link>

                    <Link to="/register">
                      <Text fontSize={15}>Đăng ký</Text>
                    </Link>
                  </Flex>
                )}

                <Link to="/cart">
                  <HiOutlineShoppingBag size="25px" />
                  {/* <i className="fas fa-shopping-bag"></i> */}
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </Flex>
            </div>
          </Container>
        </Container>
      </Flex>
    </div>
  );
};

export default Header;
