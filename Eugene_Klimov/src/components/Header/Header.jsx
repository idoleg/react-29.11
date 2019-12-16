import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.sass';
import {Link} from 'react-router-dom';

export class Header extends Component {
  static propTypes = {
    chatName: PropTypes.string,
    chatId: PropTypes.string,
  };

  render() {
    const {chatId} = this.props;
    return (
      <div className='header'>
        <h2>Наш супер-пупер чатик )</h2>
        <Link className='profile-link' to={'/profile/' + chatId}>
          {this.props.chatName}
        </Link>
      </div>
    );
  }
}
