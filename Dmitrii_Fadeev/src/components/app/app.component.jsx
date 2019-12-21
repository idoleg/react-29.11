import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import {Layout} from '../layout/layout.component';
import {Profile} from '../profile/profile.component';

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/chat/:chatId' component={Layout}/>
                    <Route path='/profile/' component={Profile}/>
                    <Route path='/' component={Layout}/>
                </Switch>
            </BrowserRouter>
        )
    }
}