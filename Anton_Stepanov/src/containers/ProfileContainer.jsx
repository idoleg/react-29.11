import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Profile} from "../components/Profile/Profile"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { loadProfile, changeName } from "../actions/profileActions"

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.loadProfile();
    }

    handleChangeName = (name) => {
        this.props.changeName(name)
    }

    render() {
        return <Profile 
            name={this.props.profile.name}
        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({loadProfile, changeName}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);