import React, { Component } from "react";
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

export class ChatList extends Component {

    render() {
        return (
            <List component="nav" aria-label="main mailbox folders">
                <Link to="/chats/1/">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 1" />
                    </ListItem>
                </Link>
                <Link to="/chats/2/">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 2" />
                    </ListItem>
                </Link>
                <Link to="/chats/3/">
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 3" />
                    </ListItem>
                </Link>
            </List>
        );
    }
}