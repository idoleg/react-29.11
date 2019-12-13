import React, {Component} from 'react';
import {Messenger} from '../Messenger/Messenger';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import './Layout.sass';

export class Layout extends Component {
  state = {
    chats: [],
  };

  updateChatListData = (chat) => {
    this.setState((prevState) => {
      return {
        chats: prevState.chats.concat([chat]),
      };
    });
  };

  render() {
    return (
      <div className='layout'>
        <Header/>
        <div className='chat-mess'>
          <ChatList chats={this.state.chats}/>
          <Messenger updateChatListData={this.updateChatListData}/>
        </div>
      </div>
    );
  }
}
