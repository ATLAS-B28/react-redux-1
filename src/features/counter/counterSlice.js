import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count:0
}
//create counter slice
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        //all the actions are defined here
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
           state.count=0
        },
        incrementByAmount : (state,action)=>{
            state.count += action.payload
            //the amount will be passed 
            //in via the payload into the function
        }
    }
})
export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer