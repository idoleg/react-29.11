import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ChatForm.sass';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export class ChatForm extends Component {
  static propTypes = {
    onSendChat: PropTypes.func.isRequired,
    onSendProfile: PropTypes.func.isRequired,
  };

  state = {
    name: '',
  };

  contentRef = React.createRef();

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleNewChat = () => {
    const {name} = this.state;
    this.props.onSendChat(name);
    this.props.onSendProfile(name, 'Надо бы создать описание...');
    this.contentRef.current.focus();
    this.setState({name: ''});
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      this.handleNewChat();
    }
  };

  render() {
    const {name} = this.state;
    return (
      <div className='new-chat'>
        <Input placeholder='Имя чата'
               inputProps={{'aria-label': 'description'}}
               name='name'
               value={name}
               inputRef={this.contentRef}
               onChange={(event) => this.handleInputChange(event)}
               onKeyDown={(event) => this.handleKeyDown(event)}
        />
        <div className='separator'/>
        <Button variant='contained' color='primary'
                onClick={this.handleNewChat}>
          Создать
        </Button>
      </div>
    );
  }
}
