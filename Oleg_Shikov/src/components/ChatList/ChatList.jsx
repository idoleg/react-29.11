import React, { Component } from "react"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "react-router-dom";

export class ChatList extends Component {

    render() {
        return (
            <List>
                <Link to="/chats/1"><ListItemText primary="It's chat 1" /></Link>
                <Link to="/chats/2"><ListItemText primary="It's chat 2" /></Link>
            </List>
        )
    }
}