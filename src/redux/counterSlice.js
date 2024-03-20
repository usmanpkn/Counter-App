import { createSlice } from "@reduxjs/toolkit";




const counterSlice =createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //reducers -are created inside reducers key
    reducers:{
        //function to increment value
        increment:(state,action)=>{
            
            state.value+=action.payload
        },
        //function to decrement value
        decrement:(state,action)=>{
            state.value-=action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value =0
        }
    }
})
// action are used by components to access the state 
export const {increment,decrement,reset}= counterSlice.actions
//reduce is required for store to change the value of state
export default counterSlice.reducer
