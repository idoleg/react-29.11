import React, {Component} from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';
import {animateScroll} from 'react-scroll';
import './MessageList.sass';

export class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    chatId: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'message-list',
    });
  }

  render() {
    const {chatId, chats, messages} = this.props;
    const chatMessages = [];
    chats[chatId].messageList.forEach((item) =>
      chatMessages.push({
        author: messages[item].author,
        content: messages[item].content,
        date: messages[item].date,
        id: item,
      }),
    );

    return (
      <div className='message-list' id='message-list'>
        {chatMessages.map((item, index) =>
          <Message {...item} key={index} chatId={chatId}/>,
        )}
      </div>
    );
  }
}
