import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component {
    state = {
        //count: this.props.init
    }
    static propTypes = {
        init: PropTypes.number.isRequired,
        onSaveCount: PropTypes.func.isRequired,
    }
    handleButtonClick = (event) => {
        const operation = +event.target.dataset.operation;
        this.props.onSaveCount(this.props.init + operation);
        /*this.setState((prevState) => {
            return {
                count: prevState.count + operation
            };
        });*/
    }
    //componentWillMount(){}
    componentDidMount() {
        console.log("Mounted!");
        this.intervalTimer = setInterval(() => console.log("Hello from Counter"), 2000);
    }
    //componentWillUpdate() {}
    componentDidUpdate(){
        console.log("Updated!");
    }
    componentWillUnmount(){
        console.log("Will unmount!");
        clearInterval(this.intervalTimer);
        
    }
    render() {
        //const { count } = this.state;
        return (
            <div>
                <button data-operation="-1" onClick={this.handleButtonClick}>-1</button>
                {this.props.init}
                <button data-operation="+1" onClick={this.handleButtonClick}>+1</button>
            </div>
        );
    }
}