import { combineReducers } from "redux";
import authentication from "../components/Auth/authReducer";

const rootReducer = combineReducers({ authentication });

export default rootReducer;
