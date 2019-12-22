import React, { Component } from "react";
import { Counter } from "./Counter";
import MessengerContainer from "../containers/MessengerContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { initStore, history } from "../initStore";
import { Provider } from "react-redux";
import {ConnectedRouter} from "connected-react-router";
// www.site.ru/chats/1  www.site.ru/about - BrowserRouter
// www.site.ru/#chats/1  www.site.ru/#about - HashRouter

const store = initStore();

export class App extends Component {

    render() {
        return (

            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={MessengerContainer} />
                        <Route exact path="/counter" component={Counter} />
                        <Route exact path="/chats/:id" component={MessengerContainer} />

                    </Switch>
                </ConnectedRouter>
            </Provider>

        );
    }
}

/*
const store1 = {param: "test", innerObj: {current: "Привет"}}
const store2 = JSON.parse(JSON.stringify(store1)); // Object.assign({}, store1); // {...store1}
store2.param = "HELLO";
store2.innerObj.current = "HELLO";


console.log(store1.innerObj.current) // test


let string1 = "test";
let string2 = string1;
string2 = "HELLO";

console.log(string1) // test
*/