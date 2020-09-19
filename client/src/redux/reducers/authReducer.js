import {
    USER_LOADED,
    USER_LOADING,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR,
} from "../types";

const initialState = {
    token: localStorage.getItem("jwt"),
    isAuth: null,
    isLoading: false,
    user: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("jwt", action.payload.token);
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                ...action.payload,
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
            localStorage.removeItem("jwt");
            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
                usLoading: false,
            };
        default:
            return state;
    }
};
