import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice/index.js';
import userReducer from '../slice/userSlice/index.js';

const reduxStore = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer
    },
    devTools:true
});

export default reduxStore;