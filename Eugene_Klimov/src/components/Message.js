import React from 'react';
import PropTypes from 'prop-types';

export const Message = (props) =>
  <div className="user-item">
    <span className="user-name">{props.name}: </span>
    <span className="user-content">{props.content}</span>
  </div>;

Message.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
