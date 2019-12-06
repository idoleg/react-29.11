import React from "react";
import ReactDOM from "react-dom";

const messages = [
    { id:"m0", name: "Vasya", data: "hello!?" },
    { id: "m1",  name: "Petya", data: "hello!?" },
    { id: "m2",  name: "Vasya", data: "what are you doing!?" },
    { id: "m3",  name: "Petya", data: "I'm ReactJSing... ;-)" },
]

const Message = (props) => <h2>{props.name}: {props.data}</h2>
const MessageList = (props) => props.items.map(item => <Message name={item.name} data={item.data} key={item.id}/>)

const targetRoot = document.getElementById('root');

ReactDOM.render(<MessageList items={messages} />, targetRoot);