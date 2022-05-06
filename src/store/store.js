import { configureStore } from '@reduxjs/toolkit';
import layoutDesign from './counterSlice';

export default configureStore({
    reducer:{
        displayContents:layoutDesign,
    },
})