import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {botName} from '../../utils/constants';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import './Message.sass';
import {bindActionCreators} from 'redux';
import {deleteMessage} from '../../actions/messageActions';
import {connect} from 'react-redux';

const messageType = {
  author: PropTypes.string,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number,
  chatId: PropTypes.string,
  deleteMessage: PropTypes.func,
};

export class Message extends Component {
  static propTypes = messageType;

  handleDeleteMessage = () => {
    confirm('Действительно удалить сообщение?') ?
      this.props.deleteMessage(this.props.chatId, this.props.id) : null;
  };

  render() {
    const {author, content, date} = this.props;
    return (
      <div className={author === botName ? 'bot-item' : 'user-item'}>
        <div className='user-name-trash'>
          <span className='user-name'>{author || 'Anonymous'}</span>
          <DeleteOutlinedIcon className='delete-icon' viewBox='0 0 36 36'
                              onClick={this.handleDeleteMessage}
          />
        </div>
        <span className='user-date'>{date}</span>
        <span className='user-content'>{content}</span>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({deleteMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Message);
