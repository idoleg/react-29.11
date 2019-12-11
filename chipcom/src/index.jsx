import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Container extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <MessageField />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root'),
);