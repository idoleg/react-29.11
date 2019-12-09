import React, {Component} from "react";
import {Message} from "./Message";
import PropTypes from "prop-types";

export class MessageField extends Component {

    static propTypes = {
        messageList: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                <b>Чат</b>

                {this.props.messageList.map(
                    item => <Message name={item.name} content={item.content} key={item.id}/>
                )}

                <hr/>
            </div>

        )
    }

}