import React, {Component} from 'react';
import {Messenger} from '../Messenger/Messenger';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import PropTypes from 'prop-types';
import {formatDate} from '../utils';
import './Layout.sass';

export class Layout extends Component {
  state = {
    chats: {
      1: {title: 'Урок №1', messageList: [1, 2]},
      2: {title: 'Урок №2', messageList: [3, 4]},
    },
    messages: {
      1: {
        author: 'Клим',
        content: 'Привет!',
        date: formatDate(),
      },
      2: {
        author: 'Клим',
        content: 'Вы в чатике \"Урок №1\"',
        date: formatDate(),
      },
      3: {
        author: 'Клим',
        content: 'Привет!',
        date: formatDate(),
      },
      4: {
        author: 'Клим',
        content: 'Вы в чатике \"Урок №2\"',
        date: formatDate(),
      },
    },
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  addNewMessage = (chatId, message) => {
    this.setState((prevState) => {
      const {chats, messages} = prevState;
      const messageId = Object.keys(messages).length + 1;
      return {
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messageList: [...chats[chatId]['messageList'], messageId],
          },
        },
        messages: {
          ...messages,
          [messageId]: {
            author: message.author,
            content: message.content,
            date: message.date,
          },
        },
      };
    });
  };

  addNewChat = (title) => {
    this.setState((prevState) => {
      const {chats, messages} = prevState;
      for (const chat of Object.entries(chats)) {
        if (chat[1].title === title || title === '') {
          alert('Недопустимое имя чата!');
          return null;
        }
      }
      const chatId = Object.keys(chats).length + 1;
      const messageId = Object.keys(messages).length + 1;
      return {
        chats: {...chats, [chatId]: {title: title, messageList: [messageId]}},
        messages: {
          ...messages,
          [messageId]: {
            author: 'Клим',
            content: `Привет! Вы в чатике \"${title}\"`,
            date: formatDate(),
          },
        },
      };
    });
  };

  render() {
    const {chats, messages} = this.state;
    let {id} = this.props.match.params;
    if (id === undefined || id > Object.keys(chats).length) {
      id = '1';
    }

    const chatMessages = chats[id].messageList.map((messageId) => (
      messages[messageId]
    ));

    return (
      <div className='layout'>
        <Header chatId={id} chatName={chats[id].title}/>
        <div className='chat-mess'>
          <ChatList chatId={id} chats={chats}
                    addNewChat={this.addNewChat}/>
          <Messenger chatId={id} chatName={chats[id].title}
                     messages={chatMessages}
                     addNewMessage={this.addNewMessage}/>
        </div>
      </div>
    );
  }
}
