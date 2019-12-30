import React, { Component } from "react";
import "./PushToggle.sass";

export default class PushToggle extends Component {
    render() {
        return (
            <div className="push">
                <img
                    className="push__image"
                    src="/images/push-off.png"
                    alt="Push Notification"
                />
            </div>
        );
    }
}
