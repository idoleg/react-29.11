import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Profile from '../profile/Profile';

class Roter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={ true } path='/' component={ Layout } />
        <Route
          exact={ true } path='/chat/:chatId/'
          render={ obj => <Layout chatId={ Number(obj.match.params.chatId) } /> }
        />
      </Switch>
    )
  }
}

export default Roter;