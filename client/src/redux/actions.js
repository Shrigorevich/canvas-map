import {
    FETCH_REGIONS,
    SHOW_LOADER,
    HIDE_LOADER,
    CREATE_REGION,
    CHANGE_REGION,
    DELETE_REGION,
    USER_LOADING,
    USER_LOADED,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR,
    GET_ERRORS,
    CLEAR_ERRORS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
} from "./types";
import axios from "axios";

export function login(data) {
    return async (dispatch) => {
        return axios
            .post("/api/auth", data)
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch(
                    returnErrors(
                        err.response.data,
                        err.response.status,
                        "LOGIN_FAIL"
                    )
                );
                dispatch({
                    type: LOGIN_FAIL,
                });
            });
    };
}

export function register({ nickname, email, password }) {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ nickname, email, password });

        axios
            .post("/api/users", body, config)
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch(
                    returnErrors(
                        err.response.data,
                        err.response.status,
                        "REGISTER_FAIL"
                    )
                );
                dispatch({
                    type: REGISTER_FAIL,
                });
            });
    };
}

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING });

    axios
        .get("/api/auth/user", tokenConfig(getState))
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

//logout user
export function logout() {
    return {
        type: LOGOUT_SUCCESS,
    };
}

// Return errors
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id },
    };
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
    //Get token from localStorage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };

    //If token, add headers
    if (token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
};

export function fetchRegions() {
    return async (dispatch) => {
        try {
            console.log("fetch regions");
            const response = await fetch("/regions/get-regions", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.log("Not ok: ", response);
            }

            const json = await response.json();
            console.log(json);

            dispatch({
                type: FETCH_REGIONS,
                payload: json,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function createRegion(regionData) {
    return async (dispatch) => {
        try {
            console.log("Create regions");
            const response = await fetch("/regions/create-region", {
                method: "POST",
                body: JSON.stringify({
                    regionData,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.log("Not ok: ", response);
            }

            const json = await response.json();
            console.log(json);

            dispatch({
                type: CREATE_REGION,
                payload: json,
            });
            dispatch(fetchRegions());
        } catch (error) {
            console.log(error);
        }
    };
}

export function changeRegion(regionData) {
    return async (dispatch) => {
        try {
            console.log("Change region");
            const response = await fetch("/regions/change-region", {
                method: "POST",
                body: JSON.stringify({
                    regionData,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.log("Not ok: ", response);
            }

            const json = await response.json();
            console.log(json);

            dispatch({
                type: CHANGE_REGION,
                payload: json,
            });
            dispatch(fetchRegions());
        } catch (error) {
            console.log(error);
        }
    };
}

export function deleteRegion(regionNumber) {
    return async (dispatch) => {
        try {
            console.log("Delete region");
            const response = await fetch("/regions/delete-region", {
                method: "POST",
                body: JSON.stringify({
                    regionNumber,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.log("Not ok: ", response);
            }

            const json = await response.json();
            console.log(json);

            dispatch({
                type: DELETE_REGION,
                payload: json,
            });
            dispatch(fetchRegions());
        } catch (error) {
            console.log(error);
        }
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}
