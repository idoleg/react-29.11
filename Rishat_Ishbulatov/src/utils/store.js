import { createStore, applyMiddleware, compose } from "redux";
import initReducers from "../reducers";
import middlewares from "../middlewares";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { persistReducer, persistStore } from "redux-persist";
// import reduxLogger from "redux-logger";

const persistConfig = {
    key: "messenger",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["chatReducer", "messageReducer", "profileReducer"]
};

export const history = createBrowserHistory();

function initStore() {
    const innitialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        innitialStore,
        compose(applyMiddleware(routerMiddleware(history), ...middlewares))
    );
    const persistor = persistStore(store);
    return { store, persistor };
}

export default initStore;
/* window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : () => {}; */
