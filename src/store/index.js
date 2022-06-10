import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/userSlice";
import lockReducer from "../redux/lockSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    lock: lockReducer,
  },
});

export default store;
