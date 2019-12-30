import React, { Component } from "react";
import { Close } from "@material-ui/icons";
import "./popup.sass";

class InstallPopup extends Component {
    state = {
        isShown: false
    };
    componentDidMount() {
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone/.test(userAgent);
        };
        const isInStandaloneMode = () => {
            "standalone" in window.navigator && window.navigator.standalone;
        };
        if (isIos() && !isInStandaloneMode()) {
            this.handleShow();
        }
    }
    handleShow = () => {
        this.setState({ isShown: true });
    };

    handleHide = () => {
        this.setState({ isShown: false });
    };

    render() {
        return (
            <div style={{ display: this.state.isShown ? "block" : "none" }}>
                <div className="speech-bubble">
                    <Close
                        className="close-install-message-icon"
                        onClick={this.handleHide}
                    />
                    <div style={{ paddingRight: "15px" }}>
                        Install this app on your iphone and then push share and
                        home
                    </div>
                </div>
            </div>
        );
    }
}

export default InstallPopup;
