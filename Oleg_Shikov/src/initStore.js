import {createStore, applyMiddleware} from "redux";
import initReducer from "./reducers"
import reduxLogger from "redux-logger";

export function initStore() {
    return createStore(initReducer, applyMiddleware(reduxLogger));
}