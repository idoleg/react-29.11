import React from 'react';
import './chatlist.style.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core/Button';

export class ChatList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { chats } = this.props;
        const list = [];
        for (let chat in chats) {
            list.push({
                num: chat,
                link: "/chat/"+chat
            });
        }
        return (
            <List className="chatlist">
                {list.map(item =>
                    <Link to={item.link} key={item.num}><ListItem button>{item.num}</ListItem></Link>
                )}
                <ListItem button onClick={this.props.createNewChat}>+</ListItem>
            </List>
        )
    }
}