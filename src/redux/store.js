import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postReducer
});

export const setupStore = () => configureStore({
    reducer:rootReducer
});