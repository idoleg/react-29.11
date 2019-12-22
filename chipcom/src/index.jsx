import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './containers/router/Router';
import initStore from './utils/store';
import './styles/styles.css';

ReactDOM.render(
  <Provider store={ initStore() }>
    <BrowserRouter>
      <MuiThemeProvider>
        <Router />
      </MuiThemeProvider>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
