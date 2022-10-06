import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./reducers/ProductReducers";
import { cartReducer } from "./reducers/CartReducers";
import {
  userDetailUpdateReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/UserReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userDetailUpdateReducer,
});

// SAVE CartItem
const cartItemsFromLocalStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

// SAVE USER Login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
