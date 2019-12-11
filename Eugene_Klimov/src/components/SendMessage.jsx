import React from 'react';
import PropTypes from 'prop-types';

export const SendMessage = (props) => {
  return (
    <div className='new-message'>
      <label>Ваше имя:
        <input className='author-input' required
               name='name'
               value={props.name}
               onChange={(event) => props.change(event)}/>
      </label>
      <label>Сообщение:
        <textarea className='message-area' cols='50' rows='5' required
                  name='content'
                  value={props.content}
                  onChange={(event) => props.change(event)}/>
      </label>
    </div>
  );
};

SendMessage.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
