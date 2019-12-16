import React, {Component} from 'react';
import {MessageList} from '../MessageList/MessageList';
import {MessengerForm} from '../MessengerForm/MessengerForm';
import './Messenger.sass';
import {formatDate} from '../utils';
import PropTypes from 'prop-types';

export class Messenger extends Component {
  state = {
    chatId: '1',
  };

  static propTypes = {
    messages: PropTypes.array.isRequired,
    addNewMessage: PropTypes.func.isRequired,
    chatId: PropTypes.string,
    chatName: PropTypes.string,
  };

  botTimers = [];

  sendNewMessage = (message) => {
    this.botTimers.forEach((timer) => clearTimeout(timer));
    this.botTimers = [];
    const {chatId} = this.props;
    this.props.addNewMessage(chatId, message);
  };

  componentDidUpdate() {
    const {chatId, chatName, messages} = this.props;
    const len = messages.length;
    if (len === 0) {
      return;
    }

    if (this.state.chatId !== chatId) {
      this.botTimers.forEach((timer) => clearTimeout(timer));
      this.botTimers = [];
    }
    this.setState((prevState) => {
      prevState.chatId = chatId;
    });

    const name = messages[len - 1].author;
    if (name !== 'Клим') {
      this.botTimers.push(
        setTimeout(() =>
          this.sendNewMessage({
            author: 'Клим',
            content: `${name}, не понял, здесь чат "${chatName}"`,
            date: formatDate(),
          }), 1000),
      );
    }
  }

  render() {
    const {messages} = this.props;
    return (
      <div className='messenger'>
        <MessageList messages={messages}/>
        <MessengerForm onSendMessage={this.sendNewMessage}/>
      </div>
    );
  }
}
