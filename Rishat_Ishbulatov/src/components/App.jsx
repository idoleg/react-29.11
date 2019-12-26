import React, { Component } from "react";
import { Router } from "../containers/Router/Router";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import initStore, { history } from "../utils/store";
import { ConnectedRouter } from "connected-react-router";

const { store, persistor } = initStore();

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <Router />
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        );
    }
}
