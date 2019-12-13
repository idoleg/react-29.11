import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessengerForm.sass';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

export class MessengerForm extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
  };

  state = {
    author: '',
    content: '',
  };

  contentRef = React.createRef();

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleNewMessage = () => {
    this.props.onSendMessage({
      name: this.state.author,
      content: this.state.content,
    });
    this.contentRef.current.focus();
    this.setState({content: ''});
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      this.handleNewMessage();
    }
  };

  render() {
    const {author, content} = this.state;
    return (
      <div className='new-message'>
        <Input placeholder='Имя автора'
               inputProps={{'aria-label': 'description'}}
               name='author'
               value={author}
               onChange={(event) => this.handleInputChange(event)}
        />
        <TextField id='outlined-basic' label='Сообщение' variant='outlined'
                   autoFocus margin='normal'
                   size='small'
                   inputRef={this.contentRef}
                   name='content'
                   value={content}
                   onChange={(event) => this.handleInputChange(event)}
                   onKeyDown={(event) => this.handleKeyDown(event)}
        />
        <Button variant='contained' color='primary'
                onClick={this.handleNewMessage}>
          Отправить
        </Button>
      </div>
    );
  }
}
