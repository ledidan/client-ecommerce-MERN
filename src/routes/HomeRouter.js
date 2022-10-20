import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
          </>
        );
      }}
    />
  );
};

export default HomeRouter;
