import React, {Component} from "react";
import {Message, messageType} from "../Message/Message";
import PropTypes from "prop-types";
import("./MessageField.css");

export class MessageField extends Component {

    static propTypes = {
        messageList: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        ),
    };

    render() {
        return (
            <div className={"message-list"}>
                {this.props.messageList.map(
                    // item => <Message name={item.name} content={item.content} key={item.id}/>
                    (item, index) => <Message {...item} key={index}/>
                )}
            </div>
        );
    }
}