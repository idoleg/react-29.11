import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import {initStore} from '../utils/store';
import {Provider} from "react-redux";
import MessengerContainer  from "../containers/MessengerContainer"
import ProfileContainer from '../containers/ProfileContainer';

const store = initStore();

export class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={ MessengerContainer } />
                        <Route exact path="/chat/:chatId" component={ MessengerContainer }/>
                        <Route exact path='/profile/' render={ () =>
                            <ProfileContainer /> } />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}