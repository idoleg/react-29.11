import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from 'material-ui';
import SendIcon from '@material-ui/icons/Send';

export class SendBox extends Component {
    constructor(props) {
        super(props);
        this.messageSender = React.createRef();
        this.messageTextarea = React.createRef();
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { //Enter code
            this.props.sendMessage(this.messageSender.current.input.value, this.messageTextarea.current.input.value);
            this.messageTextarea.current.value = '';
        }
    };

    handleClick = (event) => {
        this.props.sendMessage(this.messageSender.current.input.value, this.messageTextarea.current.input.value);
        this.messageTextarea.current.value = '';
    };

    componentDidMount() {
        this.messageSender.current.focus();
    }

    render() {
        return (
            <div className="sendBox">
                <TextField
                    name="name"
                    className="nameInput"
                    fullWidth={ true }
                    hintText="Введите имя"
                    ref={this.messageSender}
                    style={ { fontSize: '22px' } }
                    variant="outlined"
                />
                <TextField
                    name="message"
                    className="messageTextarea"
                    fullWidth={ true }
                    multiline
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    rows="4"
                    ref={this.messageTextarea}
                    onKeyUp={() => this.handleKeyUp(event)}
                />
                <Button
                    className="submitBtn"
                    variant="contained"
                    color="primary"
                    fullWidth={ true }
                    onClick={() => this.handleClick(event)}
                    endIcon={<SendIcon />}
                >
                    Send
                </Button>
            </div>
        );
    }
}