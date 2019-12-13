import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ChatList.sass';
import PropTypes from 'prop-types';

export class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.array,
  };

  renderRows = (chats) => {
    const uniqChats = new Set([]);
    chats.forEach((chat) => {
        uniqChats.add(chat);
      },
    );

    const items = [];
    uniqChats.forEach((item, index) => {
        items.push(
          <ListItem button key={index}
                    onClick={(event) => this.handleChatClick(event)}
          >
            <ListItemText primary={item}/>
          </ListItem>,
        );
      },
    );
    return items;
  };

  handleChatClick = (event) => {
    alert('TODO: chat for ' + event.target.innerText);
  };

  render() {
    return (
      <div className='chat-list'>
        <List component="nav" aria-label="main mailbox folders">
          {this.renderRows(this.props.chats)}
        </List>
      </div>
    );
  }
}
