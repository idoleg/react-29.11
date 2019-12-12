import React, {Component} from "react";
import PropTypes from "prop-types";
import ("./MessengerForm.css");

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class MessengerForm extends Component {

    state ={
        author: "avt",
        content: ""
    }

    textareaRef = React.createRef();

    componentDidMount(){
        this.textareaRef.current.focus();
        // console.log(this.textareaRef.current.value);
    }


    static propTypes = {
        onSendMessage: PropTypes.func.isRequired,
    }

    handleAddMessage = () => {

        console.log(this.textareaRef.current.value);
        this.props.onSendMessage({
            name: this.state.author,
            content: this.state.content
        });
        this.setState({
            content: ""
        });
        // const inputName = this.inputName.value;
        // const inputContent = this.inputContent.value;
        //
        // const newMessage = {
        //     name: inputName,
        //     content: inputContent
        // };
        //
        // this.props.onSaveMessage(newMessage);
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleKeyDown = (event) => {
        //if (event.keyCode === 13 && event.ctrlKey) {
        if (event.keyCode === 13) {
            this.handleAddMessage();
        }
        // console.log(event.keyCode);
    }

    render() {
        const {author, content} = this.state;
        return (
            <div className={"messenger-form"}>
                <TextField id="Author" label="Author" variant="outlined"
                    name={"author"}  type="text" value={author} onChange={this.handleInputChange}/>

                {/*<input name={"author"}  type="text" value={author} onChange={this.handleInputChange}></input>*/}
                {/*<textarea name={"content"} value={content} ref={this.textareaRef}></textarea>*/}
                {/*<textarea name={"content"} value={content} onChange={this.handleInputChange} ref={this.textareaRef} onKeyDown={this.handleKeyDown}></textarea>*/}
                <TextField id="Content" label="Content" variant="outlined"
                    name={"content"} value={content} onChange={this.handleInputChange}
                    ref={this.textareaRef} onKeyDown={this.handleKeyDown} autoFocus={true}/>

                <Button onClick={this.handleAddMessage} variant="contained" color="primary">Send message</Button>
            </div>

        );
    }

}

//onClick={this.handleButtonClick}