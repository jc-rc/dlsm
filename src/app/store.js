import { configureStore } from "@reduxjs/toolkit";
import sTermReducer from "../features/sTermSlice"


export const store = configureStore({
    reducer:{
        sTerm: sTermReducer
    }
})