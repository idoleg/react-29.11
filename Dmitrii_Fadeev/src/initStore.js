import {createStore, applyMiddleware, compose} from 'redux';
import initReducer from './reducers';
import reduxLogger from 'redux-logger';
import {botMiddleware} from './middlewares/botMiddleware'
import {createBrowserHistory} from "history";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
    key: 'geekmeseenger',
    storage,
    storageReconciler: autoMergeLevel2,
    whitelist: ['messageReducer', 'chatReducer']
};

export const history = createBrowserHistory();

function initStore() {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        compose(
            applyMiddleware(botMiddleware, reduxLogger),
            ),
    );
    const persistor = persistStore(store);
    return { store, persistor };
}

export default initStore;