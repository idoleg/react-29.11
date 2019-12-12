import React from 'react';
import ReactDOM from 'react-dom';
// import MessageField from './components/MessageField';
import Layot from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Container extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Layot />
        {/* <MessageField /> */}
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root'),
);