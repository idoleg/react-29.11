import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export class Header extends Component {

    render() {
        return (
            <div>
                Header
                <Link to="/profile/">
                    <ListItemText primary="Profile" />
                </Link>
            </div>
        );
    }
}