import React, {Component} from 'react';
import {Router} from './Router/Router';
import {BrowserRouter} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    );
  }
}
