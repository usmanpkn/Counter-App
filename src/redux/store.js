import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";




export const store = configureStore({
//reducer as a predifined key which an object that can hold more than one reducer as key value pairs
    reducer:{
        counter:counterSlice
    }
})