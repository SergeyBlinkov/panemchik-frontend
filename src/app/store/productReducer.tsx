import { createSlice } from '@reduxjs/toolkit';
import { getProductList } from './ApiThunkCalls';
import { ProductType } from '../../types/ProductType';

const productBar: ProductType = {
    loading: false,
    products: [],
    errs: false,
};

const productReducer = createSlice({
    name: 'productReducer',
    initialState: productBar,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.errs = false;
        });
        builder.addCase(getProductList.rejected, (state, action) => {
            const ap = action.payload;
            state.loading = false;
            state.errs = ap as string;
        });
    },
});

export default productReducer.reducer;
