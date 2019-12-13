import React, {Component} from "react";
import {Counter} from "./Counter";
import {Messenger} from "./Messenger/Messenger"
import {BrowserRouter, Switch, Route } from "react-router-dom"

// www.site.ru/chats/1  www.site.ru/about - BrowserRouter
// www.site.ru/#chats/1  www.site.ru/#about - HashRouter

export class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Messenger}/>
                    <Route exact path="/counter" component={Counter}/>
                    <Route exact path="/chats/:id" component={Messenger}/>

                </Switch>
            </BrowserRouter>
        );
    }
}