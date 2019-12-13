import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export class SendBox extends Component {
    state = {
        name: "",
        message: ""
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) { //Enter code
            this.props.onSendMessage({ name: this.state.name, message: this.state.message });
            this.setState({
                message: ''
            })
        }
    };

    handleClick = (event) => {
        this.props.onSendMessage({ name: this.state.name, message: this.state.message });
        this.setState({
            message: ''
        })
    };

    render() {
        const { name, message } = this.state;

        return (
            <div className="sendBox">
                <TextField
                    name="name"
                    value={name}
                    className="nameInput"
                    fullWidth={ true }
                    hintText="Введите имя"
                    onChange={this.handleInputChange}
                    style={ { fontSize: '22px' } }
                    variant="outlined"
                />
                <TextField
                    name="message"
                    value={message}
                    className="messageTextarea"
                    fullWidth={ true }
                    multiline
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    rows="4"
                    onChange={this.handleInputChange}
                    onKeyUp={() => this.handleKeyUp(event)}
                    autoFocus
                />
                <Button
                    className="submitBtn"
                    variant="contained"
                    color="primary"
                    fullWidth={ true }
                    onClick={() => this.handleClick()}
                    endIcon={<SendIcon />}
                >
                    Send
                </Button>
            </div>
        );
    }
}