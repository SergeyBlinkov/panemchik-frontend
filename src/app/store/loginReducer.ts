import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    slide: 0,
};

const LoginStoreReducer = createSlice({
    name: 'loginStore',
    initialState,
    reducers: {
        setSlide: (state, action) => {
            state.slide = action.payload;
        },
    },
});

export const { setSlide } = LoginStoreReducer.actions;

export default LoginStoreReducer.reducer;
