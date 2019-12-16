import React, { Component } from "react";
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import("./ChatList.css");

export class ChatList extends Component {
    render() {
        return (
            <div className="items-list">
                <List>
                    <ListItemText primary="Chat 1" />
                    <ListItemText primary="Chat 2" />
                    <ListItemText primary="Chat 3" />
                    <ListItemText primary="Chat 4" />
                    <ListItemText primary="Chat 5" />
                </List>
            </div>
        )
    }
}