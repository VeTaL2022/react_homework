import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer
});

export const setupStore = () => configureStore({
    reducer:rootReducer
});