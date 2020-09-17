import {
    FETCH_REGIONS,
    SHOW_LOADER,
    HIDE_LOADER,
    CREATE_REGION,
    CHANGE_REGION,
    DELETE_REGION,
    USER_LOGIN,
    USER_LOADING,
    USER_LOADED,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR,
    GET_ERRORS,
    CLEAR_ERRORS,
} from "./types";
import axios from "axios";

export function login(data) {
    return async (dispatch) => {
        return axios
            .post("http://localhost:5000/api/auth", data)
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("jwt", token);
                //setAuthorizationToken(token)
            });
    };
    //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //delete axios.defaults.headers.common['Authorization'];

    //dispatch(setCurrentUser(user));
    // add setAuthorizationToken(token) to index.js and store.dispatch(setCurrentUser)

    //!isEmpty(action.user)
}

export function fetchRegions() {
    return async (dispatch) => {
        try {
            console.log("fetch regions");
            const response = await fetch(
                "http://localhost:5000/regions/get-regions",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

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
            //http://localhost
            const response = await fetch(
                "http://localhost:5000/regions/create-region",
                {
                    method: "POST",
                    body: JSON.stringify({
                        regionData,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

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
            //http://localhost
            const response = await fetch(
                "http://localhost:5000/regions/change-region",
                {
                    method: "POST",
                    body: JSON.stringify({
                        regionData,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

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
            //http://localhost:5000
            const response = await fetch(
                "http://localhost:5000/regions/delete-region",
                {
                    method: "POST",
                    body: JSON.stringify({
                        regionNumber,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

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

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING });

    axios
        .get("http://localhost:5000/api/auth/user", tokenConfig(getState))
        .then((res) =>
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.date, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

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
