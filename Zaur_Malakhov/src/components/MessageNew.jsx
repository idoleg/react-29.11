import React, {Component} from "react";
import {Message} from "./Message";
import PropTypes from "prop-types";

export class MessageNew extends Component {

    state = {
        name: "",
    }

    static propTypes = {
        onSaveMessage: PropTypes.func.isRequired,
    }

    handleButtonClick = (event) => {
        const inputName = this.inputName.value;
        const inputContent = this.inputContent.value;

        const newMessage = {
            name: inputName,
            content: inputContent
        };

        this.props.onSaveMessage(newMessage);
    };

    render() {
        return (
            <div>
                <input  type="text" ref={ref => this.inputName = ref}></input>
                <textarea ref={ref => this.inputContent = ref}></textarea>
                <button onClick={this.handleButtonClick}>Add message</button>
            </div>

        );
    }

}