import {combineReducers} from "redux";
import messageReducer from "./messageReducer";
import {connectRouter} from "connected-react-router";

export default function(history) {
    return combineReducers({
        router: connectRouter(history),
        messages: messageReducer
    });
}

