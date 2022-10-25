import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/UserAction";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { Flex, Text } from "@chakra-ui/react";
const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // Executing side-effect in process of user login
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, redirect, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Todo
    dispatch(login(email, password));
  };
  return (
    <>
      <Flex className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant={"alert-danger"}>{error}</Message>}
        {loading && <Loading></Loading>}

        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-dark">
            ĐĂNG NHẬP
          </button>
          <Text size="sm" fontSize="14px">
            Không phải là thành viên?
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              {" "}
              Tạo tài khoản
            </Link>
          </Text>
        </form>
      </Flex>
    </>
  );
};

export default Login;
