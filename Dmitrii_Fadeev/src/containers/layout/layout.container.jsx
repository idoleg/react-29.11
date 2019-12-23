import React from 'react';
import {connect} from 'react-redux';
import {loadMessages} from '../../actions/messageActions';
import {bindActionCreators} from "redux";

class LayoutContainer extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.loadMessages();
    }

    render() {
        console.log(this.props.chats);
        return null;
    }
        //return <Layout />
};

const mapStateToProps = (state, ownProps) => {
    return {
        chats: state.messages.chats
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMessages: () => bindActionCreators({loadMessages}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);