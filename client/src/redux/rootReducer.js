import { combineReducers } from "redux";
import { mapReducer } from "./reducers/mapReducer";
import { appReducer } from "./reducers/appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    map: mapReducer,
});
