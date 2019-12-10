import React, {Component} from "react";
import {MessageField} from "./MessageField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <MessageField />
            </MuiThemeProvider>
        );
    }
}