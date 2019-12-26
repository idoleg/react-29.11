import React, { Component } from "react";
import Header from "../Header/Header";
import ChatList from "../ChatList/ChatList";
import MessageList from "../MessageList/MessageList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import("./Layout.sass");

export class Layout extends Component {
    static propTypes = {
        chatID: PropTypes.string
    };
    render() {
        const { chatID } = this.props;
        return (
            <div className="layout">
                <Header chatID={chatID} />
                <ChatList />
                {chatID && <MessageList chatID={chatID} />}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        chatID: id
    };
};
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
