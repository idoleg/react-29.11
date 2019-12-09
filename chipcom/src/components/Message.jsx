import React from 'react';

export default class Message extends React.Component {
    
    render() {
        return (
            <div>
                <b>{this.props.name}: </b>
                {this.props.text}
            </div>
        )
    }
}