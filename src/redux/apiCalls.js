import { publicRequest } from "../requestMethods";
import { addProduct, getCart, removeProduct, resetCart } from "./cartRedux";
import { loginStart, loginSuccess, loginFailure, logoutSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/login", { user });
        // console.log("LoginRes", response.data);
        dispatch(loginSuccess(response.data.user));
        getUserCart(dispatch, response.data.user._id);
    }
    catch (err) {
        console.log("AuthError", err.message);
        dispatch(loginFailure());
    }
}

export const logout = async (dispatch) => {
    try {
        await publicRequest.get("/auth/logout");
        // console.log("LogoutRes", response.data);
        dispatch(logoutSuccess());
        dispatch(resetCart());
    }
    catch (err) {
        console.log("AuthError", err.message);
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/register", { user });
        // console.log("RegisterRes", response.data);
        dispatch(loginSuccess(response.data.user));
        dispatch(resetCart());
    }
    catch (err) {
        console.log("AuthError", err.message);
        dispatch(loginFailure());
    }
}

export const addToCart = async (dispatch, item, uid) => {
    try {
        await publicRequest.put(`/users/${uid}/cart`, { item });
        // console.log("AddRes", response.data);
        const { product, quantity } = item;
        dispatch(addProduct({ ...product, quantity }));
    }
    catch (err) {
        console.log(err.message);
    }
}

export const removeFromCart = async (dispatch, uid, product) => {
    try {
        await publicRequest.delete(`/users/${uid}/cart/${product._id}`);
        // console.log("RemoveRes", response.data);
        dispatch(removeProduct(product));
    }
    catch (err) {
        console.log(err.message);
    }
}

export const getUserCart = async (dispatch, uid) => {
    try {
        const response = await publicRequest.get(`/users/${uid}/cart`);
        console.log("CartRes", response.data);
        dispatch(getCart(response.data.cart));
    } catch (err) {
        console.log(err.message);
    }
}
