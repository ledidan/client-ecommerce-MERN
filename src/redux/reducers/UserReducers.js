import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
  USER_DETAILS_UPDATE_RESET,
} from "../constants/UserContants";

const stateDefault = {
  user: {},
  userInfo: [],
};

// USER LOGIN
export const userLoginReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// USER DETAILS UPDATE
export const userRegisterReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_DETAILS_UPDATE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};

// USER REGISTER
export const userDetailUpdateReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case USER_DETAILS_UPDATE_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_DETAILS_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
