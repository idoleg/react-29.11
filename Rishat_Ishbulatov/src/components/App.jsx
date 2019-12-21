import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Messenger } from "./Messanger/Messanger";

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Messenger} />
                    <Route exact path="/chats/:id" component={Messenger} />
                    <Route
                        exact
                        path="/profile"
                        render={() => <div>Profile</div>}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
