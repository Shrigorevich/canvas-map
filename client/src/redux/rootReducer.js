import { combineReducers } from "redux";
import { mapReducer } from "./reducers/mapReducer";
import { appReducer } from "./reducers/appReducer";
import { skinReducer } from "./reducers/skinReducer";
import { authReducer } from "./reducers/authReducer";
import { errorReducer } from "./reducers/errorReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    map: mapReducer,
    skins: skinReducer,
    auth: authReducer,
    error: errorReducer,
});
