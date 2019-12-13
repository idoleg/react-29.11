import React, { Component } from "react";
import { Fab, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import PropTypes from "prop-types";
import("./MessengerForm.css");

export class MessengerForm extends Component {
    state = {
        author: "",
        content: ""
    };
    static propTypes = {
        onSendMessage: PropTypes.func.isRequired
    };
    handleSend = () => {
        this.props.onSendMessage({
            name: this.state.author,
            content: this.state.content
        });
        this.setState({
            author: "",
            content: ""
        });
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleKeyDown = event => {
        if (event.keyCode === 13 && event.ctrlKey) {
            this.handleSend();
        }
    };
    render() {
        const { author, content } = this.state;
        return (
            <div className="messengerform">
                <TextField
                    id="standard-basic"
                    label="Author"
                    name="author"
                    value={author}
                    onChange={this.handleChange}
                />
                <TextField
                    id="standard-basic"
                    label="Message"
                    name="content"
                    value={content}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    autoFocus
                />
                <Fab onClick={this.handleSend} size="small" color="primary">
                    <Send fontSize="small" />
                </Fab>
            </div>
        );
    }
}
