import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {deleteChat} from '../../actions/chatActions';
import {connect} from 'react-redux';
import './ChatLink.sass';

class ChatLink extends Component {
  static propTypes = {
    id: PropTypes.string,
    chatId: PropTypes.string,
    title: PropTypes.string,
    push: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
  };

  handleDeleteChat = () => {
    confirm('Действительно удалить чат?') ?
      this.props.deleteChat(this.props.id) : null;
  };

  render() {
    const {id, title, chatId} = this.props;
    const link = '/chat/' + id;
    const selected = (chatId === '' + id);
    return (
      <ListItem button key={id} selected={selected}
                onClick={() => this.props.push(link)}
      >
        <ListItemIcon><SendIcon/></ListItemIcon>
        <ListItemText primary={title} className='chat-link'/>
        <DeleteOutlinedIcon className='delete-icon' viewBox='0 0 36 36'
                            onClick={this.handleDeleteChat}
        />
      </ListItem>
    );
  }
}

const mapStateToProps = ({chatReducer}) => ({
  chats: chatReducer.chats,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({push, deleteChat}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(ChatLink);
