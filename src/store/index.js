import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "../redux/adminSlice"
import userReducer from "../redux/userSlice";
import lockReducer from "../redux/lockSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    lock: lockReducer,
    admin: adminReducer,
  },
});

export default store;
