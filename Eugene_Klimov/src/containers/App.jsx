import React, {Component} from 'react';
import {Router} from './Router/Router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import initStore from '../utils/store';

export class App extends Component {
  render() {
    return (
      <Provider store={initStore}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
    );
  }
}
