import {createStore} from 'redux';
import initReducer from './reducers'

export function initStore() {
    return createStore(initReducer);
}