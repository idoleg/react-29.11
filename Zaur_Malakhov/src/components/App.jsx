import React, {Component} from "react";
//import {Counter} from "./Counter";
import {Messenger} from "./Messenger/Messenger";

export class App extends Component {
    state = {
        isHidden: true,
        counterValue: 0
    }

    handleCounter = (count) => {
        this.setState({counterValue: count});
    }

    render() {
        return (
            <Messenger/>
        );
    }
}

