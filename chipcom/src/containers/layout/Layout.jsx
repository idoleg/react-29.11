import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import ChatList from '../chatlist/ChatList';
import MessageField from '../message-field/MessageField';
import Profile from '../profile/Profile';
import { sendMessage } from '../../actions/messageActions';
import './layout.css';

class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    sendMessage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    chatId: 1,
  };

  state = {
    messages: {
      1: { text: "Привет!", sender: 'bot', created: new Date(2019, 12, 17, 20, 11) },
      2: { text: "Здравствуйте!", sender: 'bot', created: new Date(2019, 12, 18, 21, 0) },
    },
    isProfile: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    const date = Date.now();

    if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
        setTimeout(() => this.sendMessage('Не приставай ко мне, я робот!', 'bot', date), 1000);
    }
  }

  sendMessage = ( message, sender, date ) => {
    const { messages } = this.state;
    const { chatId } = this.props;

    const messageId = Object.keys(messages).length + 1;
      this.setState({
        messages: { ...messages, [messageId]: { text: message, sender: sender, created: date }},
      });
      this.props.sendMessage(messageId, message, sender, chatId, date);
  };

  addChat = (title) => {
    const { chats } = this.state;

    const chatId = Object.keys(chats).length + 1;
    this.setState({ chats: { ...chats, [chatId]: {title: title, messageList: []} } });
  }

  closeProfile = () => {
    this.setState( {'isProfile': !this.state.isProfile} );
  }

  render() {
    // const title = this.state.chats[this.props.chatId].title;

    const title = '' + this.props.chatId;
    return (
      <div className="chat">
        <Header chatTitle={ title } onProfileClick={ this.closeProfile } />
          <div className="layout-canvas">
          <div className="layout-left-side">
            <ChatList />
          </div>
          <div className="layout-right-side">
            { this.state.isProfile || <Profile onCloseProfileClick={ this.closeProfile } /> }
            { !this.state.isProfile || <MessageField chatId={ this.props.chatId } messages={ this.state.messages } sendMessage= { this.sendMessage } /> }
          </div>
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
