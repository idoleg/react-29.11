import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import Profile from '../Profile/Profile';
import {Switch, Route} from 'react-router-dom';

export class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Layout}/>
        <Route exact path='/chat/:id' component={Layout}/>
        <Route exact path='/profile/:id' component={Profile}/>
      </Switch>
    );
  }
}
