import React from 'react';
import Message from './Message';
import '../styles/styles.css'

export default class MessageField extends React.Component {

  render() {
    const messageElements = this.props.messages.map(message => 
      <Message key={ message.id } name={message.name.length === 0 ? "Anonymous" : message.name} text={ message.content } />);

    return (
      <div className='layout'>
        { messageElements }
      </div>
    );
  }
}