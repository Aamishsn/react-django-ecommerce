import { combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/productReducer";
import { singleProductReducer } from "./reducer/singleProductReducer";

const initialState = { product: {} };

const allreducers = combineReducers({
  productList: productReducer,
  singleProduct: singleProductReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: allreducers,
  initialState,
});

export default store;
