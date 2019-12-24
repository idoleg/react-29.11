import React, { Component } from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import("./Header.sass");

export class Header extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        profile: PropTypes.object
    };
    static defaultProps = {
        id: ""
    };
    render() {
        return (
            <Toolbar className="header">
                <Link to={"/profile"}>
                    <Typography variant="h6">
                        Chat {this.props.id}{" "}
                        {this.props.profile && this.props.profile.name}
                    </Typography>
                </Link>
            </Toolbar>
        );
    }
}
