import React from 'react';
import {Message} from './Message';

export const MessagesList = (props) =>
  props.messages.map((item) =>
    <Message
      key={item.id}
      name={item.name}
      content={item.content}
    />);
