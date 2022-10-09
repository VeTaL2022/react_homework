import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    carReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});