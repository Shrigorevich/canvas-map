import { combineReducers } from "redux";
import { mapReducer } from "./reducers/mapReducer";
import { appReducer } from "./reducers/appReducer";
import { skinReducer } from "./reducers/skinReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    map: mapReducer,
    skins: skinReducer,
});
