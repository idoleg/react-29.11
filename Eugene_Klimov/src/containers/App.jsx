import React, {Component} from 'react';
import {Router} from './Router/Router';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import initStore, {history} from '../utils/store';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = initStore;

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Router/>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
