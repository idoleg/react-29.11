import React from 'react';
import Message from "../message/message.component.jsx";

export class MessageList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.messages.map(
                item => <Message name={item.name} content={item.content} key={item.id}/>
            )
        )
    }
}