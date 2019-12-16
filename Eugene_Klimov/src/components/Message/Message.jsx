import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Message.sass';

export const messageType = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export class Message extends Component {
  static propTypes = messageType;

  render() {
    const {author, content, date} = this.props;
    return (
      <div className={author === 'Клим' ? 'bot-item' : 'user-item'}>
        <span className='user-name'>{author || 'Anonymous'}</span>
        <span className='user-date'>{date}</span>
        <span className='user-content'>{content}</span>
      </div>
    );
  }
}
