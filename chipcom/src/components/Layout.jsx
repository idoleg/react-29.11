import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="chat">
          <ChatList />
          <MessageField />
        </div>
      </div>
    );
  }
}

export default Layout;