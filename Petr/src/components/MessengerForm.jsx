import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class MessengerForm extends Component {
    state = {
        author: "Oleg",
        content: ""
    }

    //textareaRef = React.createRef();
    componentDidMount() {
        //this.textareaRef.current.focus();
        //console.log(this.textareaRef.current.value);
    }

    handleNewMassage = () => {
        this.props.onSendMessage({ name: this.state.author, content: this.state.content })
    }
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) {
            this.handleNewMassage();
        }

    }
    render() {
        const { author, content } = this.state;

        return (
            <div>
                <TextField id="standard-basic" label="Autor" name="author" value={author} onChange={this.handleInputChange} />
                <TextField id="standard-basic" label="Message" name="content" value={content} onChange={this.handleInputChange} autoFocus/>
                <Button onClick={this.handleNewMassage} variant="contained" color="primary">
                    Send message
                </Button>
            </div>
        );
    }
}

//