import {applyMiddleware, createStore} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import initReducers from '../reducers';
import middlewares from '../middlewares';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2
  from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'ReactMessenger',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['chatReducer', 'messageReducer', 'profileReducer'],
};

export const history = createBrowserHistory();

function initStore() {
  const initialStore = {};

  const store = createStore(
    persistReducer(persistConfig, initReducers(history)),
    initialStore,
    applyMiddleware(routerMiddleware(history), ...middlewares),
  );

  const persistor = persistStore(store);
  return {store, persistor};
}

export default initStore();
