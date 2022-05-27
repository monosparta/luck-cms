import { combineReducers } from "redux";
import userReducer from "../redux/userSlice";
import luckReducer from "../redux/luckSlice";

const rootReducer = combineReducers({
  userReducer,
  luckReducer,
});

export default rootReducer;
