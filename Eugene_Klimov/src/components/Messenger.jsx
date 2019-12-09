import React, {Component} from 'react';
import {MessagesList} from './MessagesList';
import {SendButton} from './SendButton';
import {SendMessage} from './SendMessage';

export class Messenger extends Component {
  state = {
    messages: [
      {id: 0, name: 'Клим', content: 'Всем привет!'},
      {id: 1, name: 'Клим', content: 'Как дела?'},
    ],
    name: 'Unknown',
    content: 'Hello',
  };

  handleNewMessage = () => {
    const name = this.state.name;
    const content = this.state.content;
    if (name === '' || content === '') {
      alert('Заполните все поля!');
      return false;
    }
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([{
          id: prevState.messages.length,
          name: name,
          content: content,
        }]),
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidUpdate() {
    const messages = this.state.messages;
    const len = messages.length;
    if (len % 2 === 1) {
      setTimeout(() => this.setState({
        messages: [...messages,
          {
            id: len,
            name: 'Клим',
            content: messages[len - 1].name + ', не понял',
          }],
      }), 1000);
    }
  }

  render() {
    return (
      <div className='messenger'>
        <MessagesList messages={this.state.messages}/>
        <SendMessage name={this.state.name}
                     content={this.state.content}
                     change={this.handleChange}/>
        <SendButton click={this.handleNewMessage}/>
      </div>
    );
  }
}
