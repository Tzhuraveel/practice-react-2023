import {combineReducers} from "redux";
import {weatherReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    weather: weatherReducer
});

const setupStore =  () => configureStore({
    reducer: rootReducer
});


export {
    setupStore
}