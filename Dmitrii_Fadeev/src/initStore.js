import {createStore, applyMiddleware} from 'redux';
import initReducer from './reducers';
import reduxLogger from 'redux-logger';
import {botMiddleware} from './middlewares/botMiddleware'
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

export function initStore() {
    return createStore(initReducer(history), applyMiddleware(botMiddleware, reduxLogger));
}