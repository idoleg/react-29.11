import React from 'react';
import PropTypes from 'prop-types';
// import { TextField, FloatingActionButton } from 'material-ui';
import { TextField } from 'material-ui';
import Fab from '@material-ui/core/Fab';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../message/Message';
import './message-field.css';

class MessageField extends React. Component {

  state = {
    input: '',
  };

  static propTypes = {
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
  };

  handleSendMessage = ( message, sender ) => {
    if (this.state.input.length > 0 || sender === 'bot') {
      this.props.sendMessage(message, sender);
    }
    if (sender === 'me') {
      this.setState({ input: '' })
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      this.handleSendMessage(this.state.input, 'me');
    }
  }
  
  render () {
    const { chatId, messages, chats } = this.props;

    const messageElements = chats[chatId].messageList.map((messageId) => (
      <Message
        key = { messageId }
        text = { messages[messageId].text }
        sender= { messages[messageId].sender }
      /> ));

    return <div>
      <div key='messageElements' className='message-field'>
        { messageElements }
      </div>
      <div key="textInput" style={ { width: '100%', display: 'flex' } }>
        <TextField
          name="input"
          fullWidth={ true }
          hintText="Введите сообщение"
          style={ { fontSize: '20px' } }
          onChange={ this.handleChange }
          value={ this.state.input }
          onKeyUp={ this.handleKeyUp }
        />
        <Fab color='primary' onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
          <SendIcon />
        </Fab>
      </div>
    </div>
  }
}

export default MessageField;