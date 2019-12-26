import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";

export default function(history) {
    return combineReducers({
        router: connectRouter(history),
        messageReducer,
        chatReducer,
        profileReducer
    });
}
