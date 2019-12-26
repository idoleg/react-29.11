import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import {Profile} from '../profile/profile.component';
import {initStore, history} from '../../initStore';
import {Provider} from 'react-redux';
import LayoutContainer from "../../containers/layout/layout.container";
import {ConnectedRouter} from "connected-react-router";

const store = initStore();

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path='/chat/:chatId' component={LayoutContainer}/>
                        <Route path='/profile/' component={Profile}/>
                        <Route path='/' component={LayoutContainer}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}