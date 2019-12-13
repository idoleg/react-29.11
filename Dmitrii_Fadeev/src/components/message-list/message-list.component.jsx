import React from 'react';
import {Message, messageType} from '../message/message.component';
import PropTypes from  'prop-types';
import './message-list.style.css';

export class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        )
    };

    render() {
        return (
            <div className='message-list'>
                {this.props.messages.map(
                    item => <Message {...item} key={item.id}/>
                    )}
            </div>
        );
    }
}