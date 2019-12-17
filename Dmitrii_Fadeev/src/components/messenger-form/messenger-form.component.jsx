import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './messenger-form.style.css'

export class  MessengerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            content: ""
        };
    }
    handleNewMessage = () => {
        this.props.onSendMessage(this.props.chatId, {name: this.state.name, content: this.state.content});
        this.setState({name: "", content: ""});
    };

    handleInputChange = (e) => {
        const name = e.target.value;
        const inputName = e.target.name;
        this.setState({[inputName]: name});
    };

    handleKeyDown = (e) => {
        if (e.keyCode === 13 && e.ctrlKey) {
            this.handleNewMessage();
        }
    }

    render () {
        const {name, content} = this.state;
        return (
            <div className='messenger-form'>
                <TextField className='input-author' id='standart-basic' label='Name' name="name" value={name} onChange={this.handleInputChange}></TextField>
                <TextField className='input-message' id='standart-basic' label='Message' name="content" value={content} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} autoFocus />
                <Button className='button-new-message' onClick={this.handleNewMessage} variant='contained' color='primary'>
                    New message
                </Button>
            </div>
        )
    }
}