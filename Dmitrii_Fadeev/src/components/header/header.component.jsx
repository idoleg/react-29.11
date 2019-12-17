import React from 'react';
import './header.style.css'
import {Link} from "react-router-dom";

export class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Link to='/chat/'>
                    Chats
                </Link>
                <div>
                    React Chat
                </div>
                <Link to='/profile/'>Profile</Link>
            </div>
        )
    }
}