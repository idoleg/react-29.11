import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/styles.css';

class Container extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root'),
);