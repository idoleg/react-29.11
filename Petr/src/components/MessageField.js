import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {

    render() {
            return (
                this.props.messages.map(message => 
                    <Message key={ message.id } name={message.name.length === 0 ? "Unknown" : message.name} text={ message.content } />
            )
        );
    }
}