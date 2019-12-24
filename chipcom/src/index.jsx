import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './containers/router/Router';
import initStore, { history } from './utils/store';
import './styles/styles.css';

ReactDOM.render(
  <Provider store={ initStore() }>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <Router />
      </MuiThemeProvider>
    </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
