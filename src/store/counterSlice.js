import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:'displayDetailsFromStore',
    initialState:{
        userName : 'user',
        sideBar : ['Header','Footer','Menu','Content'],
        address : 'Thiagarajar College, Madurai',
    },
    reducers:{
        nameUpdate: (state,action) => {
            state.userName = action.payload;
        },
    },
})

export const {nameUpdate} = counterSlice.actions;
export default counterSlice.reducer;