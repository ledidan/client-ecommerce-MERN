import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import SingleProduct from "./views/SingleProduct";
import Login from "./views/Login";
import Register from "./views/Register";
import CartScreen from "./views/CartScreen";
import ShippingScreen from "./views/ShippingScreen";
import ProfileScreen from "./views/ProfileScreen";
import PaymentScreen from "./views/PaymentScreen";
import PlaceOrderScreen from "./views/PlaceOrderScreen";
import OrderScreen from "./views/OrderScreen";
import NotFound from "./views/NotFound";
import PrivateRouter from "./routes/PrivateRouter";
import { ChakraProvider } from "@chakra-ui/react";
// Chakra Font CSS

import "@fontsource/montserrat/500.css";
import "@fontsource/cabin/500.css";
import theme from "./utils/ChakraUI/theme";
import HomeRouter from "./routes/HomeRouter";
import ShopScreen from "./views/ShopScreen";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <HomeRouter path="/" component={HomeScreen} exact />
          <HomeRouter path="/search/:keyword" component={HomeScreen} exact />
          <HomeRouter path="/page/:pageNumber" component={HomeScreen} exact />
          <HomeRouter
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <HomeRouter path="/products/:id" component={SingleProduct} />
          <HomeRouter path="/login" component={Login} />
          <HomeRouter path="/register" component={Register} />
          <HomeRouter path="/cart/:id?" component={CartScreen} />
          <PrivateRouter path="/profile" component={ProfileScreen} />
          <PrivateRouter path="/shipping" component={ShippingScreen} />
          <PrivateRouter path="/payment" component={PaymentScreen} />
          <PrivateRouter path="/place-order" component={PlaceOrderScreen} />
          <PrivateRouter path="/order/:id" component={OrderScreen} />
          <HomeRouter path="/shop" component={ShopScreen} />
          <HomeRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
