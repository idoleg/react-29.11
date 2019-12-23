import {createStore} from "redux";
import initReducer from './reducers/index'

export function initStore() {
    return createStore(initReducer);
}