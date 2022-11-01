import { Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/UserAction";
const MobileHeader = (props) => {
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
                    className="nav-link text-dark"
                    data-bs-toggle="dropdown"
                  >
                    <FaRegUserCircle size="18px" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Thông tin
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={logoutHandler}
                        to="/register"
                      >
                        Thoát ra
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
                  <Link to="/cart" className="cart-mobile-icon nav-link">
                    {/* <i className="fas fa-shopping-bag"></i> */}
                    <HiOutlineShoppingBag size={20} color="black" />
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">
                    <Text fontSize={15} color="black">
                      Shop
                    </Text>
                  </Link>
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
                      <Link to="/shop" className="dropdown-item">
                        <Text>Cửa hàng</Text>
                      </Link>
                    </li>
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
                  <Link to="/cart" className="cart-mobile-icon nav-link">
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
  );
};

export default MobileHeader;