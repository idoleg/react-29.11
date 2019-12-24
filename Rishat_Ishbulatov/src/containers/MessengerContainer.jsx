import React, { Component } from "react";
import { Messenger } from "../components/Messanger/Messanger";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addChat, loadChats, sendMessage } from "../actions/chatActions";
import { loadProfile } from "../actions/profileActions";
import PropTypes from "prop-types";

class MessengerContainer extends Component {
    static propTypes = {
        chats: PropTypes.object,
        addChat: PropTypes.func,
        chatID: PropTypes.string,
        loadChats: PropTypes.func,
        loadProfile: PropTypes.func,
        sendMessage: PropTypes.func
    };

    componentDidMount() {
        this.props.loadChats();
        this.props.loadProfile();
    }

    render() {
        return <Messenger {...this.props} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        chatID: id,
        chats: state.chat.chats,
        messages:
            state.chat.chats[id] &&
            state.chat.chats[id]["messageIDs"].map(
                id => state.chat.messages[id]
            ),
        profile: state.profile.profile
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { addChat, loadChats, sendMessage, loadProfile },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
