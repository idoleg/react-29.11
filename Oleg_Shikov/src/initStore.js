import {createStore, applyMiddleware} from "redux";
import initReducer from "./reducers"
import reduxLogger from "redux-logger";
import {botMiddleware} from "./middlewares/botMiddleware";
import {createBrowserHistory} from "history";
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

export function initStore() {
   
    return createStore(initReducer(history), applyMiddleware(routerMiddleware(history), botMiddleware, reduxLogger));
}

//