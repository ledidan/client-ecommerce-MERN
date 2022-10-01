import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/place-order" component={PlaceOrderScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
