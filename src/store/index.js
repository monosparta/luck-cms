import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/userSlice";
import luckReducer from "../redux/luckSlice";
import userInfoSlice from "../redux/infoSlice";

const store = configureStore({
  reducer: {
    // reducer: rootReducer,
    user: userReducer,
    Luck: luckReducer,
    userInfo: userInfoSlice,
  },
});

export default store;
