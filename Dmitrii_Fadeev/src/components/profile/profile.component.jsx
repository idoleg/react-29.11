import React from 'react';
import {Header} from '../header/header.component';
import './profile.style.css';

export class Profile extends React.Component {

    render() {
        return (
            <div className='profile'>
                <Header />
                <div className='profile-contents'>
                    <p>
                        Username: Gopher
                    </p>
                    <p>
                        Email: gopher@mail.com
                    </p>
                    <p>
                        Registered at: 12.12.19
                    </p>
                    <p>
                        Last logon: now
                    </p>
                </div>
            </div>
        )
    }
}