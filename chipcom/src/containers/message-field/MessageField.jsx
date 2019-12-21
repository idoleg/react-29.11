import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import {animateScroll} from 'react-scroll';
import { TextField } from 'material-ui';
import Fab from '@material-ui/core/Fab';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../../components/Message';
import './message-field.css';

class MessageField extends React.Component {

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
      this.props.sendMessage(message, sender, Date.now());
    }
    if (sender === 'me') {
      this.setState({ input: '' })
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      this.handleSendMessage(this.state.input, 'me');
    }
  };
  
  // подсмотрел у Евгения Климова
  componentDidMount() {
    this.scrollToBottom('message-field');
  }

  componentDidUpdate() {
    this.scrollToBottom('message-field');
  }

  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'message-field',
    });
  }
  // окончание от Евгения

  render () {
    const { chatId, messages, chats } = this.props;

    const messageElements = chats[chatId].messageList.map((messageId) => (
      <Message
        key = { messageId }
        text = { messages[messageId].text }
        sender = { messages[messageId].sender }
        created = { messages[messageId].created }
      /> ));

    return <div>
      <div id='message-field' key='messageElements' className='message-field'>
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

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
