import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/UserAction";
const DesktopHeader = (props) => {
  const { userInfo, keyword, setKeyword, cartItems, dispatch } = props;
  const history = useHistory();
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
    <div className="row ">
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
      <Flex align="center" justify="end" className="col-md-4 Login-Register ">
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
              <Text fontSize="16px">Đăng nhập</Text>
            </Link>

            <Link to="/register" className="mx-3">
              <Text fontSize="16px">Đăng ký</Text>
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
  );
};

export default DesktopHeader;
