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
        }
        // TODO: removeProduct
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
