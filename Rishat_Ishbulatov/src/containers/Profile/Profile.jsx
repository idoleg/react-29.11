import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar, Typography, AppBar, Button } from "@material-ui/core";
import { loadProfile, resetState } from "../../actions/apiActions";
import PropTypes from "prop-types";

export class Profile extends Component {
    static propTypes = {
        email: PropTypes.string,
        loadProfile: PropTypes.func.isRequired,
        resetState: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.loadProfile();
    }
    render() {
        const { email } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="subtitle1">{email}</Typography>
                    <Button color="inherit" onClick={this.props.resetState}>
                        Reset State
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    email: profileReducer.profile.email
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadProfile, resetState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
