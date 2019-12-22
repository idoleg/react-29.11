import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.sass';
import {Link} from 'react-router-dom';

export class Header extends Component {
  static propTypes = {
    chatName: PropTypes.string,
    chatId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    profiles: PropTypes.object.isRequired,
  };

  render() {
    const {chatId, profiles} = this.props;
    const {title, description} = profiles[chatId];
    return (
      <div className='header'>
        <h2>Наш супер-пупер чатик )</h2>
        <Link className='profile-link' to={'/profile/' + chatId}>
          {title}: {description}
        </Link>
      </div>
    );
  }
}
