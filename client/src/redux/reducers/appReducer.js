import {
    SHOW_LOADER,
    HIDE_LOADER,
    CREATE_REGION,
    CHANGE_REGION,
    DELETE_REGION,
} from "../types";

const initialState = {
    loading: false,
    createResponse: null,
    changeResponse: null,
    deleteResponse: null,
    regToEdit: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REGION:
            return { ...state, createResponse: action.payload };
        case CHANGE_REGION:
            return { ...state, changeResponse: action.payload };
        case SHOW_LOADER:
            return { ...state, loading: true };
        case DELETE_REGION:
            return { ...state, deleteResponse: action.payload };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};
