import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';

class ChatList extends React.Component {

  static propTypes = {
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      this.handleAddChat();
    }
  };

  handleAddChat = () => {
    if (this.state.input.length > 0) {
      this.props.addChat(this.state.input);
      this.setState({ input: '' });
    }
  }
  render() {
    const { chats } = this.props;
    const chatElements = Object.keys(chats).map(chatId => (
      <Link key= { chatId } to={ `/chat/${ chatId }` }>
          <ListItem primaryText={ chats[chatId].title } leftIcon={ <ContentSend />} />
        </Link>));

    return (
      <List>
        { chatElements }
        <ListItem
          key='New chat'
          leftIcon={ <AddIcon /> }
          onClick={this.handleAddChat }
          style={ { height: '60px' } }
          children={ <TextField
            key='textField'
            fullWidth
            name='input'
            hintText='Новый чат'
            onChange={ this.handleChange }
            value={ this.state.input }
            onKeyUp={ this.handleKeyUp }
          />}
        />
      </List>
    );
  }
}

export default ChatList;