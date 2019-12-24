import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Layout} from "../components/Layout/Layout"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { createChat } from "../actions/chatActions"
import { loadMessenger, sendMessage } from "../actions/messageActions"

class MessengerContainer extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    chatId = this.props.chatId;

    componentDidMount() {
        this.props.loadMessenger();
    }

    handleSendMessage = (message) => {
        this.props.sendMessage(this.chatId, message)
    }

    handleCreateChat = (name) => {
        this.props.createChat(name)
    }

    render() {
        if (this.props.match.params.chatId !== undefined) {
            this.chatId = this.props.match.params.chatId;
        }

        return <Layout 
            chatId={this.chatId}
            chats={this.props.chats}
            messages={this.props.messages}
            profile={this.props.profile}
            onSendMessage={this.handleSendMessage}
            onCreateChat={this.handleCreateChat}
        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        chats: state.messenger.chats,
        messages: state.messenger.messages,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({loadMessenger, sendMessage, createChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);