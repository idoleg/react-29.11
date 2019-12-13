import React from 'react';
import './chatlist.style.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class ChatList extends React.Component {
    state = {
        chatlist: [
            "1",
            "2",
            "3",
            "4"
        ]
    }
    render() {
        return (
            <List className="chatlist">
                {this.state.chatlist.map(item =>
                    <ListItem button>{item}</ListItem>
                )}
            </List>
        )
    }
}