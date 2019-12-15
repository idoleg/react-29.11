import React, {Component} from "react";
import {Messenger} from "./Messenger/Messenger";
import {BrowserRouter, Switch, Route } from "react-router-dom";
// import {Counter} from "./Counter";

// www.site.ru/chats/1  www.site.ru/about - BrowserRouter
// www.site.ru/#chats/1  www.site.ru/#about - HashRouter


export class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Messenger} />
                    <Route exact path="/chats/:id" component={Messenger}/>
                    {/*<Route exact path="/counter" render={() => <Counter init={4} onSaveCount={}}/>*/}
                </Switch>
            </BrowserRouter>

        );
    }
}

