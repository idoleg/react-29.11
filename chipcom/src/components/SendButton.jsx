import React from 'react';

export default class SendButton extends React.Component {
    render() {
        return (
            <button  onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}