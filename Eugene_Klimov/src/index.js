import React from "react";
import ReactDOM from "react-dom";
import "./style.sass"
import messages from "./messages"
import Messenger from "./Messenger";


ReactDOM.render(
    <Messenger messages={messages}/>,
    document.getElementById("root")
);