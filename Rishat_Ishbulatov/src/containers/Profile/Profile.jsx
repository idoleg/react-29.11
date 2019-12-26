import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar, Typography, AppBar, Button } from "@material-ui/core";
import { loadProfile, resetState } from "../../actions/profileActions";
import PropTypes from "prop-types";

export class Profile extends Component {
    static propTypes = {
        name: PropTypes.string,
        content: PropTypes.string,
        loadProfile: PropTypes.func.isRequired,
        resetState: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.loadProfile();
    }
    render() {
        const { name, content } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="subtitle1">
                        {name} {content}
                    </Typography>
                    <Button color="inherit" onClick={this.props.resetState}>
                        Reset
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    name: profileReducer.profile.name,
    content: profileReducer.profile.content
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadProfile, resetState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
