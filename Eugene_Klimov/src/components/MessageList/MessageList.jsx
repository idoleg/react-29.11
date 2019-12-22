import React, {Component} from 'react';
import {Message, messageType} from '../Message/Message';
import PropTypes from 'prop-types';
import {animateScroll} from 'react-scroll';
import './MessageList.sass';

export class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape(messageType),
    ),
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
    return (
      <div className='message-list' id='message-list'>
        {this.props.messages.map((item, index) =>
          <Message {...item} key={index}/>,
        )}
      </div>
    );
  }
}
