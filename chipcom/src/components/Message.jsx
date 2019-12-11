import React from 'react';

export default class Message extends React.Component {
    
  render() {
    return (
      <div
        className="message"
        style={ { alignSelf: this.props.name === 'Robot' ?
          'flex-start, backgroundColor="red"' : 'flex-end' } }
      >
      <div>{this.props.text}</div>
        <div className="message-sender"><b>{this.props.name}: </b></div>
      </div>
    )
  }
}