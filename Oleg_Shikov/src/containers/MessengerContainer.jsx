import React, { Component } from 'react';
import {Messenger} from "../components/Messenger/Messenger"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { loadMessages, sendMessage, addChat } from "../actions/messageActions"

class MessengerContainer extends Component {

    componentDidMount() {
        this.props.loadMessages();
    }

    handleSendMessage = (message) => {
        this.props.sendMessage(this.props.chatId, message)
    }

    render() {
        return <Messenger messages={this.props.messages} onSendMessage={this.handleSendMessage} chats={this.props.chats} addChat={this.props.addChat}/>
    }
}

const mapStateToProps = (state, props) => {
    const {id} = props.match.params;

    return {
        chats: state.messages.chats,
        messages:  state.messages.chats[id] &&  state.messages.chats[id].messages,
        chatId: id,
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({loadMessages, sendMessage, addChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);