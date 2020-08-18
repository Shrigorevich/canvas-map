import { SHOW_LOADER, HIDE_LOADER, CREATE_REGION } from "../types";

const initialState = {
    loading: false,
    createResponse: null,
    regToEdit: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REGION:
            return { ...state, createResponse: action.payload };
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};
