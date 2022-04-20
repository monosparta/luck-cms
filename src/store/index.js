import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './store';
import userReducer from "../redux/userSlice";
import luckReducer from '../redux/luckSlice'

const store = configureStore({
    reducer: {
        // reducer: rootReducer,
        user: userReducer,
        Luck: luckReducer
    },
})

export default store;