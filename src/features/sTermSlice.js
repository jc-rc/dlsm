import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
    tag:"",
    selected: {
        props: {
            name: "",
            definition: "",
            description: "",
        }
    }
}

export const sTermSlice = createSlice({
    name: "sTerm",
    initialState,
    reducers: {
        setSTerm: (state, action)=>{
            state.value = action.payload
        },
        setSTag: (state, action)=>{
            state.tag = action.payload
        },
        setSelected: (state, action)=>{
            state.selected = action.payload
        }
    }
})

export const {setSTerm, setSTag, setSelected} = sTermSlice.actions

export default sTermSlice.reducer