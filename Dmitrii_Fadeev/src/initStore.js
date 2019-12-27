import {createStore, applyMiddleware, compose} from 'redux';
import initReducers from './reducers';
import reduxLogger from 'redux-logger';
import {botMiddleware} from './middlewares/botMiddleware'
import {createBrowserHistory} from "history";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { routerMiddleware } from 'connected-react-router';

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
        persistReducer(persistConfig, initReducers(history)),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), botMiddleware, reduxLogger),
            ),
    );
    const persistor = persistStore(store);
    return { store, persistor };
}

export default initStore;