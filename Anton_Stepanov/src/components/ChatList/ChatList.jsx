import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import List from "@material-ui/core/List"
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import("./ChatList.css");

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export class ChatList extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        chats: PropTypes.object.isRequired,
    };

    render() {
        const chats = this.props.chats;
        const chatsList = [];
        for (let id in chats) {
            chatsList.push({
                key: id,
                link: "/chat/" + id + "/",
            });
        }
        
        return (
            <div className="items-list">
                <List>
                    {
                        chatsList.map((item) => (
                            <ListItem button>
                                <Link to={item.link}>
                                    <ListItemIcon>
                                        <SendIcon />
                                        <ListItemText primary={chats[item.key].name} />
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        )
    }
}