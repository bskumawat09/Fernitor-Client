import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure, logoutSuccess } from "./userRedux";

export const login = async (dispatch, userCredentials) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/login", userCredentials);
        console.log("LoginResponse", response.data);
        dispatch(loginSuccess(response.data.user));
    } catch (err) {
        console.log("AuthError", err.message);
        dispatch(loginFailure());
    }
}

export const logout = async (dispatch) => {
    try {
        const response = await publicRequest.get("/auth/logout");
        console.log("LogoutResponse", response.data);
        dispatch(logoutSuccess());
    } catch (err) {
        console.log("AuthError", err.message);
    }
}

export const register = async (dispatch, userCredentials) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/register", userCredentials);
        console.log("RegisterResponse", response.data);
        dispatch(loginSuccess(response.data.user));
    } catch (err) {
        console.log("AuthError", err.message);
        dispatch(loginFailure());
    }
}

// TODO: Get Cart
// TODO: Add To Cart
// TODO: Update Cart
