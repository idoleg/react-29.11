import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List } from "@material-ui/core";
import { Chat } from "../../components/Chat/Chat";
import { ChatForm } from "../../components/ChatForm/ChatForm";
import { addChat, deleteChat } from "../../actions/chatActions";
import { loadState } from "../../actions/apiActions";
import InstallPopup from "../../components/InstallPopup/InstallPopup";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        chatID: PropTypes.string,
        loadState: PropTypes.func.isRequired,
        chats: PropTypes.object,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        deleteChat: PropTypes.func.isRequired,
        isChatsLoading: PropTypes.bool
    };
    componentDidMount() {
        this.props.loadState();
    }
    handleNavigate = link => {
        this.props.push(link);
    };
    handleDelete = id => {
        this.props.deleteChat(id);
    };
    render() {
        const { chatID, chats, isChatsLoading } = this.props;
        const list = Object.keys(chats);
        return (
            <div className="chat-container">
                <List className="chat-list">
                    {!isChatsLoading &&
                        list.map(id => (
                            <Chat
                                id={id}
                                key={id}
                                chatID={chatID}
                                onDelete={this.handleDelete}
                                onNavigate={this.handleNavigate}
                                title={chats[id].title}
                                notice={chats[id].notice}
                            />
                        ))}
                </List>
                <InstallPopup />
                <ChatForm onSubmit={this.props.addChat} />
            </div>
        );
    }
}
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    isChatsLoading: chatReducer.isChatsLoading
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addChat, push, deleteChat, loadState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
