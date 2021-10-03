import { publicRequest, userRequest } from "../requestMethods";
import { addProduct, removeProduct } from "./cartRedux";
import { loginStart, loginSuccess, loginFailure, logoutSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/login", { user });
        // console.log("LoginRes", response.data);
        dispatch(loginSuccess(response.data.user));
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
    }
    catch (err) {
        console.log("AuthError", err.message);
        dispatch(loginFailure());
    }
}

export const addToCart = async (dispatch, item, uid) => {
    try {
        await userRequest.put(`/users/${uid}/cart`, { item });
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
        await userRequest.delete(`/users/${uid}/cart/${product._id}`);
        // console.log("RemoveRes", response.data);
        dispatch(removeProduct(product));
    }
    catch (err) {
        console.log(err.message);
    }
}
// TODO: Get Cart
