import React, { Component } from 'react';
import("./Profile.css");

export class Profile extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div className="profile">
                Profile { this.props.name }
            </div>
        )
    }
}