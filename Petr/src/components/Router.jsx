import React, { Component } from 'react';
import { Layout } from './Layout';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './Profile';

export class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Layout} />
                <Route exact path='/chats/:id/' component={Layout} />
                <Route exact path='/profile/' component={Profile} />
            </Switch>
        );
    }
}