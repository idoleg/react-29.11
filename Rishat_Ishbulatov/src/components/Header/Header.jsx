import React, { Component } from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import("./Header.sass");

export class Header extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired
    };
    static defaultProps = {
        id: ""
    };
    render() {
        return (
            <Toolbar className="header">
                <Link to={"/profile"}>
                    <Typography variant="h6">Chat {this.props.id}</Typography>
                </Link>
            </Toolbar>
        );
    }
}
