import React, { Component } from "react";
import { Fab, TextField } from "@material-ui/core";
import { ChatBubble } from "@material-ui/icons";
import PropTypes from "prop-types";
import("./ChatForm.sass");

export class ChatForm extends Component {
    state = {
        title: ""
    };
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };
    handleSend = () => {
        this.props.onSubmit(this.state.title);
        this.setState({
            title: ""
        });
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const { title } = this.state;

        return (
            <div className="chat-form">
                <TextField
                    label="Add New Chat"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                />
                <Fab onClick={this.handleSend} size="small" color="primary">
                    <ChatBubble fontSize="small" />
                </Fab>
            </div>
        );
    }
}
