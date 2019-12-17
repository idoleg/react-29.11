import React, { Component } from 'react';
import {Messenger} from "../components/Messenger/Messenger"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { loadMessages, sendMessage } from "../actions/messageActions"

class MessengerContainer extends Component {

    componentDidMount() {
        this.props.loadMessages();
    }

    handleSendMessage = (message) => {
        this.props.sendMessage(this.props.chatId, message)
    }

    render() {
        return <Messenger messages={this.props.messages} onSendMessage={this.handleSendMessage} />
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;

    return {
        chats: state.messages.chats,
        messages:  state.messages.chats[id] &&  state.messages.chats[id].messages,
        chatId: id
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({loadMessages, sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);