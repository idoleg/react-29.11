import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import {Profile} from '../profile/profile.component';
import {initStore} from '../../initStore';
import {Provider} from 'react-redux';
import LayoutContainer from "../../containers/layout/layout.container";

const store = initStore();

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/chat/:chatId' component={LayoutContainer}/>
                        <Route path='/profile/' component={Profile}/>
                        <Route path='/' component={LayoutContainer}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}