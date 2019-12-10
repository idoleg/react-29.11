import React, { Component } from 'react';
import { Message } from "./Message";

export class MessagesBoard extends Component {
    render() {
        return (
            <div className="messenger-board">
                {this.props.messagesList.map(
                    item => <Message name={item.name} content={item.content} key={item.id} />
                )}
            </div>
        )
    }
}