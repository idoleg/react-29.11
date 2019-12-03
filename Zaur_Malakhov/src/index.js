import React from "react";
import ReactDOM  from "react-dom";

const element = React.createElement(
    "h1",
    {className: "hello"},
    "Привет, students!"
);

// const elementWithJSX = (
//     <h1 className="test">
//         Привет, привет!
//         <strong style={{'color': 'red'}}>TEST</strong>
//     </h1>
// );

const messages = [
    {id:0, name: "Oleg", content: "Привет!"},
    {id:1, name: "Ivan", content: "Как дела?"},
    {id:2, name: "Oleg", content: "нормально!"},
    {id:3, name: "Oleg", content: "как сам?"},
]

const Message = (props) => <div><b>{props.name}:</b> {props.content}</div>;
const MessageList = function(props){
    return props.messages.map(
        item => <Message name={item.name} content={item.content} key={item.id}/>
        )
}

ReactDOM.render(<MessageList messages={messages}/>, document.getElementById('root'));
