import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import {animateScroll} from 'react-scroll';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import { addChat } from '../../actions/chatActions';
import './chatlist.css'

class ChatList extends React.Component {

  static propTypes = {
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
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

  handleNavigate = (link) => {
    this.props.push(link);
  }

  // подсмотрел у Евгения Климова
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'chat-list',
    });
  }
  // окончание от Евгения

  render() {

    const { chats } = this.props;
    const chatElements = Object.keys(chats).map(chatId => (
      <ListItem
        key = { chatId }
        primaryText={ chats[chatId].title }
        leftIcon={ <ContentSend />}
        onClick={ () => this.handleNavigate(`/chat/${chatId}`)}
         />));

    return (
      <div id='chat-list' className='chat-list'>
        <List>
          { chatElements }
          <ListItem
            key='New chat'
            leftIcon={ <AddIcon /> }
            onClick={this.handleAddChat }
            style={ { height: '60px' } 
          }>
            <TextField
              key='textField'
              fullWidth
              name='input'
              hintText='Новый чат'
              onChange={ this.handleChange }
              value={ this.state.input }
              onKeyUp={ this.handleKeyUp }
            />
          </ListItem>
        </List>
      </div>
    );
  }
}


const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);