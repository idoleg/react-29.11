import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  state = {
    // valueInput: '',
    valueText: '',
  };

  static propTypes = {
    onSaveMessage: PropTypes.func.isRequired,
  };

  // handleChangeInput = this.handleChangeInput.bind(this);
  handleChangeText = this.handleChangeText.bind(this);
  handleClick = this.handleClick.bind(this);

  // handleChangeInput(event) {
  //   this.setState({valueInput: event.target.value});
  // }

  handleChangeText(event) {
    this.setState({valueText: event.target.value});
  }

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
        // this.setState({messages: [ ...this.state.messages, {text: message, sender: 'me'} ] });
        this.sendMessage(message);
    }
  }

  handleClick(event) {
    // this.props.onSaveMessage( this.state.valueInput, this.state.valueText );
    this.props.onSaveMessage( 'me', this.state.valueText );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>
          Сообщение:
          <textarea value={this.state.valueText} onChange={this.handleChangeText} />
        </label>
        <input type="button" onClick={ this.handleClick } onKeyUp={ (event) => this.handleKeyUp(event, this.state.valueText) } value="Отправить" />
      </div>
    )
  }
}
      {/* <form onSubmit={ this.handleSubmit } onKeyUp={ (event) => this.handleKeyUp(event, this.state.valueText) }> */}
      {/* </form> */}
// Имя:
// <br/>
// <input type="text" value={this.state.valueInput} onChange={this.handleChangeInput} />
// <br/>
