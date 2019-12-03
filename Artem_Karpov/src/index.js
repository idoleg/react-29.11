import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
    "h2",
    {class:"header2"},
    "Hello world 2!"
)

ReactDOM.render(element, document.getElementById('root'));