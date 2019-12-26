import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import("./Header.sass");

export class Header extends Component {
    static propTypes = {
        chatID: PropTypes.string,
        chats: PropTypes.object,
        push: PropTypes.func.isRequired
    };
    handleNavigate = link => {
        this.props.push(link);
    };
    render() {
        const { chatID, chats } = this.props;
        const title =
            chatID && chats[chatID]
                ? capitalizeFirstLetter(chats[chatID].title)
                : "Chat";
        return (
            <Toolbar className="header">
                <Typography
                    onClick={() => this.handleNavigate("/profile")}
                    variant="h6"
                >
                    {title}
                </Typography>
            </Toolbar>
        );
    }
}

const mapStateToProps = ({ chatReducer }) => {
    return {
        chats: chatReducer.chats
    };
};
const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
