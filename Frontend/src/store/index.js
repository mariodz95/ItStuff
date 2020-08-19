import { combineReducers } from "redux";
import authentication from "../components/Auth/authReducer";
import products from "../components/Product/productReducer";

const rootReducer = combineReducers({ authentication, products });

export default rootReducer;
