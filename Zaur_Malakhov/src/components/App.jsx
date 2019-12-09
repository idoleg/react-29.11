import React, {Component} from "react";
import {Counter} from "./Counter";
import {Messenger} from "./Messenger";

export class App extends Component {
    state = {
        isHidden: true,
        counterValue: 0
    }

    handleCounter = (count) => {
        this.setState({counterValue: count});
    }

    render() {
        const {isHidden, counterValue} = this.state;
        return (
            //<div>
            //    {!isHidden && <Counter init={counterValue} onSaveCount={this.handleCounter}/>}
            //    <button onClick={() => this.setState({isHidden: !isHidden})}>Show</button>
            //</div>

            <Messenger/>

        );
    }
}

