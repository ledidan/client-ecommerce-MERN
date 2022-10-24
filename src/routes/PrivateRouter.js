import React from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("userInfo");

        if (token) {
          return (
            <>
              <Header />
              <Component {...props} />
              <Footer />
            </>
          );
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
};

export default PrivateRouter;
