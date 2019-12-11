import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  state = {
    valueInput: '',
    valueText: '',
  };

  static propTypes = {
    onSaveMessage: PropTypes.func.isRequired,
  };

  handleChangeInput = this.handleChangeInput.bind(this);
  handleChangeText = this.handleChangeText.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChangeInput(event) {
    this.setState({valueInput: event.target.value});
  }

  handleChangeText(event) {
    this.setState({valueText: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSaveMessage( this.state.valueInput, this.state.valueText );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <br/>
          <input type="text" value={this.state.valueInput} onChange={this.handleChangeInput} />
          <br/>
          Сообщение:
          <br/>
          <textarea value={this.state.valueText} onChange={this.handleChangeText} />
          <br/>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}