import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import("./ChatForm.css");

export class ChatForm extends Component {
    state = {
        chatname: '',
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleClick = (event) => {
        this.props.onCreateChat({ name: this.state.chatname, messages: []});
        this.setState({
            chatname: ''
        })
    };

    render() {
        const { chatname } = this.state;

        return (
            <div className="chatForm">
                <TextField
                    name="chatname"
                    value={chatname}
                    className="nameInput"
                    placeholder="Новый чат"
                    fullWidth={ true }
                    onChange={this.handleInputChange}
                    style={ { fontSize: '22px' } }
                    variant="outlined"
                />
                <Button
                    className="submitBtn"
                    variant="contained"
                    color="primary"
                    fullWidth={ true }
                    onClick={() => this.handleClick()}
                    endIcon={<CreateIcon />}
                >
                    Create
                </Button>
            </div>
        );
    }
}