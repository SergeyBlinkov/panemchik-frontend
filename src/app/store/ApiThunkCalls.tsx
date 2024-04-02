import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import AuthService from '../../shared/api/AuthService';
import ProductService from '../../shared/api/ProductService';

export const getProductList = createAsyncThunk(
    'products/getAll',
    async (arg, thunkAPI) => {
        try {
            const response = await ProductService.getProductList();
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return (
                    err.response &&
                    err.response.data &&
                    thunkAPI.rejectWithValue(err.response.data.toString())
                );
            } else {
                return thunkAPI.rejectWithValue('Нет связи с сервером');
            }
        }
    },
);

export const userAuthCheck = createAsyncThunk(
    'user/auth',
    async (arg, thunkAPI) => {
        try {
            const response = await AuthService.access();
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return (
                    err.response &&
                    err.response.data &&
                    thunkAPI.rejectWithValue(err.response.data.toString())
                );
            } else {
                throw thunkAPI.rejectWithValue('Нет связи с сервером');
            }
        }
    },
);

export const createNewUser = createAsyncThunk(
    'user/registration',
    async (arg: { email: string; password: string }, thunkAPI) => {
        try {
            const { email, password } = arg;
            const response = await AuthService.registration(email, password);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return (
                    err.response &&
                    err.response.data &&
                    thunkAPI.rejectWithValue(err.response.data.toString())
                );
            } else {
                throw thunkAPI.rejectWithValue('Нет связи с сервером');
            }
        }
    },
);

type LoginType = {
    email: string;
    password: string;
};

export const loginUserThunk = createAsyncThunk(
    'user/login',
    async (arg: LoginType, thunkAPI) => {
        try {
            const { email, password } = arg;
            const response = await AuthService.login(email, password);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return (
                    err.response &&
                    err.response.data &&
                    thunkAPI.rejectWithValue(err.response.data.toString())
                );
            } else {
                throw thunkAPI.rejectWithValue('Нет связи с сервером');
            }
        }
    },
);
