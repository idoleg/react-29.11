import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component {
    state = {
        //count: this.props.init
    };
    static propTypes = {
        init: PropTypes.number.isRequired,
        onSaveCount: PropTypes.func.isRequired,
    }

    // constructor(props){
    //     super(props)
    //     this.handlePlusClick = this.handlePlusClick.bind(this)
    // }

    // handleButtonClick = (operation) => (event) => {
    //     // this.state.count++;
    //     // forceUpdate - не рекомендуется использовать
    //     // обновляет компонент полностью
    //     //this.forceUpdate();
    //
    //     // const {count} = this.state;
    //     // this.setState({count: count+1});
    //
    //     this.setState((prevState) => {
    //         return {
    //             count: prevState.count + operation
    //         }
    //     });
    //
    // };

    handleButtonClick = (event) => {
        const operation = +event.target.dataset.operation;
        this.props.onSaveCount(this.props.init + operation);
        /*this.setState((prevState) => {
            return {
                count: prevState.count + operation
            }
        });*/

    };

    //componentWillMount(){}
    componentDidMount(){
        console.log("Mounted");
        this.intervalTimer = setInterval(() => console.log("hello"), 2000);
    }
    // componentWillUpdate(){}
    componentDidUpdate(){
        console.log("Updated");
    }
    componentWillUnmount(){
        console.log("Will unmount");
        clearInterval(this.intervalTimer);
    }


    render() {
        //const {count} = this.state;
        return (
            <div>
                <button data-operation="-1" onClick={this.handleButtonClick}>-1</button>
                {this.props.init}
                {/*<button onClick={() => this.handlePlusClick()}>+1</button>*/}
                {/*<button onClick={this.handlePlusClick.bind(this)}>+1</button>*/}
                <button data-operation="+1" onClick={this.handleButtonClick}>+1</button>
            </div>
        );
    }
}