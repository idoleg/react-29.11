import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { ChatForm } from "../../components/ChatForm/ChatForm";
import { addChat, deleteChats } from "../../actions/chatActions";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        deleteChats: PropTypes.func.isRequired
    };
    handleNavigate = link => {
        this.props.push(link);
    };
    render() {
        const { chats } = this.props;
        const list = Object.keys(chats);

        return (
            <div className="chat-container">
                {list == [] && "Чатов нет"}
                <List className="chat-list">
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
    chats: chatReducer.chats
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addChat, push, deleteChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
