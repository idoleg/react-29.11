import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import("./ChatList.css");

export class ChatList extends Component {
    render() {
        return (
            <List className="chatlist" component="nav">
                <ListItem button>
                    <ListItemText primary="chat-1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="chat-2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="chat-3" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="chat-4" />
                </ListItem>
            </List>
        );
    }
}
