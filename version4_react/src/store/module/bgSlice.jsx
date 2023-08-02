import { createSlice } from "@reduxjs/toolkit";
import bgData from '../../assets/api/bg'
const initialState={
    bgData : bgData,
    currentBg : {},
}

export const bgSlice = createSlice({
    name:'bg',
    initialState,
    reducers:{
        setBg(state,action){
            let random = Math.floor((Math.random()*10))
            state.currentBg = state.bgData[random]
        },
        editBg(state,action){
            state.currentBg = action.payload
        }
    }

})

export const {setBg,editBg} = bgSlice.actions
export default bgSlice.reducer