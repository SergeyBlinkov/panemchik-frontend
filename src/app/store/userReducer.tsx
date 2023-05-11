import { createSlice } from '@reduxjs/toolkit';
import { createNewUser, loginUserThunk, userAuthCheck } from './ApiThunkCalls';

type user = {
    name?: string;
    email?: string;
    role?: string;
};
type userBarType = {
    loading: boolean;
    isLogged: boolean;
    user: user;
    errs: string | false;
};

const userBar: userBarType = {
    loading: false,
    isLogged: false,
    user: {},
    errs: false,
};

const userReducer = createSlice({
    name: 'userReducer',
    initialState: userBar,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userAuthCheck.rejected, (state, action) => {
            state.isLogged = false;
            state.loading = false;
            state.user = {};
            state.errs = action.payload as string;
        });
        builder.addCase(userAuthCheck.pending, (state) => {
            state.loading = true;
            state.isLogged = false;
            state.errs = false;
            state.user = {};
        });
        builder.addCase(userAuthCheck.fulfilled, (state, action) => {
            const user = action.payload;
            state.loading = false;
            state.isLogged = true;
            state.errs = false;
            state.user = user;
        });
        builder.addCase(createNewUser.fulfilled, (state, action) => {});
        builder.addCase(createNewUser.rejected, (state, action) => {
            state.loading = false;
            state.isLogged = false;
            state.errs = action.payload as string;
        });
        builder.addCase(createNewUser.pending, (state) => {
            state.loading = true;
            state.isLogged = false;
            state.user = {};
            state.errs = false;
        });
        builder.addCase(loginUserThunk.pending, (state) => {
            state.loading = true;
            state.isLogged = false;
            state.errs = false;
            state.user = {};
        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload;
            state.loading = false;
            state.isLogged = true;
            state.errs = false;
            state.user = user;
            localStorage.setItem('token', accessToken);
        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.isLogged = false;
            state.user = {};
            state.errs = action.payload as string;
        });
    },
});

export default userReducer.reducer;
