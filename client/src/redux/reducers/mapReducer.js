import { SHOW_LOADER, HIDE_LOADER, FETCH_REGIONS } from "../types";

const initialState = {
    regions: null,
};

export const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REGIONS:
            return { ...state, regions: action.payload };
        default:
            return state;
    }
};
