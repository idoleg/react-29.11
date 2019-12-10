import React from "react";
import ReactDOM  from "react-dom";
import {App} from "./components/App";


// const element = React.createElement(
//     "h1",
//     {className: "hello"},
//     "Привет, students!"
// );

// const elementWithJSX = (
//     <h1 className="test">
//         Привет, привет!
//         <strong style={{'color': 'red'}}>TEST</strong>
//     </h1>
// );



// ReactDOM.render(<MessageList messages={messages}/>, document.getElementById("root"));
ReactDOM.render(<App/>, document.getElementById("root"));
