import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './header.css';

class Header extends React.Component {

  static propTypes = {
    chatTitle: PropTypes.string.isRequired,
    onProfileClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    chatId: 1,
  };
 
  render() {
    return (
      <div className="header">
        <div className="header-left-side">
          <span className='header-left-side'>{ this.props.chatTitle }</span>
        </div>
        <div className="header-right-side">
          <Button variant="contained" className='header-right-side' onClick={ this.props.onProfileClick }>Профиль</Button>
        </div>
      </div>
    );
  }
}

export default Header;