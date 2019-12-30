import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar, Typography, CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import PushToggle from "../../components/PushToggle/PushToggle";
import("./Header.sass");

export class Header extends Component {
    static propTypes = {
        chatID: PropTypes.string,
        chats: PropTypes.object,
        isChatsLoading: PropTypes.bool,
        push: PropTypes.func.isRequired
    };
    handleNavigate = link => {
        this.props.push(link);
    };
    render() {
        const { chatID, chats, isChatsLoading } = this.props;
        const title = chatID && chats[chatID] ? chats[chatID].title : "chat";
        return (
            <Toolbar className="header">
                <PushToggle />
                <Typography
                    onClick={() => this.handleNavigate("/profile")}
                    variant="h6"
                >
                    {`${title} `}
                    {isChatsLoading && <CircularProgress size={14} />}
                </Typography>
            </Toolbar>
        );
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    isChatsLoading: chatReducer.isChatsLoading
});
const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
