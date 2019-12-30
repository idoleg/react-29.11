import React, { Component } from "react";
import { Message } from "../../components/Message/Message";
import { MessageForm } from "../../components/MessageForm/MessageForm";
import { sendMessage, deleteMessage } from "../../actions/messageActions";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import("./MessageList.sass");

export class MessageList extends Component {
    static propTypes = {
        chatID: PropTypes.string,
        chats: PropTypes.object,
        messages: PropTypes.object,
        sendMessage: PropTypes.func,
        deleteMessage: PropTypes.func,
        isChatsLoading: PropTypes.bool
    };
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "message-list"
        });
    }
    handleSendMessage = message => {
        this.props.sendMessage(this.props.chatID, message);
    };
    handleDeleteMessage = id => {
        this.props.deleteMessage(this.props.chatID, id);
    };
    render() {
        const { chatID, chats, messages, isChatsLoading } = this.props;
        return (
            <div className="message-container">
                <div className="message-list" id="message-list">
                    {chats[chatID] &&
                        !isChatsLoading &&
                        chats[chatID].messageIDs.map(id => (
                            <Message
                                key={id}
                                id={id}
                                {...messages[id]}
                                onDelete={this.handleDeleteMessage}
                            />
                        ))}
                </div>
                <MessageForm onSubmit={this.handleSendMessage} />
            </div>
        );
    }
}
const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isChatsLoading: chatReducer.isChatsLoading
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ sendMessage, deleteMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
