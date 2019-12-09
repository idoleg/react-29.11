import React from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div><b>{this.props.name}</b>: {this.props.content}</div>
        )
    }
}