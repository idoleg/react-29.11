import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    List,
    ListItem,
    ListItemText,
    CircularProgress
} from "@material-ui/core";
import { ChatForm } from "../../components/ChatForm/ChatForm";
import { addChat, deleteChats } from "../../actions/chatActions";
import { loadState } from "../../actions/apiActions";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        isChatsLoading: PropTypes.bool,
        loadState: PropTypes.func.isRequired,
        chats: PropTypes.object,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        deleteChats: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.loadState();
    }
    handleNavigate = link => {
        this.props.push(link);
    };
    render() {
        const { chats, isChatsLoading } = this.props;
        const list = Object.keys(chats);

        return (
            <div className="chat-container">
                {list == [] && "Чатов нет"}
                <List className="chat-list">
                    {isChatsLoading && <CircularProgress />}
                    {list.map(id => (
                        <ListItem
                            button
                            key={id}
                            onClick={() => this.handleNavigate(`/chats/${id}`)}
                        >
                            <ListItemText
                                primary={
                                    chats[id].title +
                                    (chats[id].notice ? " new!" : "")
                                }
                            />
                        </ListItem>
                    ))}
                </List>
                <ChatForm
                    onSubmit={this.props.addChat}
                    onDelete={this.props.deleteChats}
                />
            </div>
        );
    }
}
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    isChatsLoading: chatReducer.isChatsLoading
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addChat, push, deleteChats, loadState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
