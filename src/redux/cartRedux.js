import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        count: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.count += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.count -= 1;
            state.products = state.products.filter((product) => product._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity;
        },
        getCart: (state, action) => {
            state.count = action.payload.products.length;
            state.products = action.payload.products;
            state.total = action.payload.amount;
        },
        resetCart: (state) => {
            state.products = [];
            state.count = 0;
            state.total = 0;
        }
    }
});

export const { addProduct, removeProduct, getCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
