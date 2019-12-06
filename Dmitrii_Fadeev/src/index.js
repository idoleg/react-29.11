import React from "react";
import ReactDom from "react-dom";

var messages = [
    {id: 0, name: "Dima", content: "hello, geekbrains!"},
    {id: 1, name: "Eduardo", content: "hola, geekbrains!"},
    {id: 2, name: "Ion", content: "buna, geekbrains!"},
    {id: 3, name: "Anton", content: "привет, geekbrains!"},
];


const ButtonMessage = () => {
    return(
<
    button
    onClick = { () =>
    {
        let id = messages[messages.length - 1].id + 1;
        messages.push({id: id, name: "Anton", content: "привет, geekbrains!"});
        ReactDom.render(<Chat messages={messages} />, document.getElementById("root"));
    }
    }
>
    Message
    ! < /button>
)
}

const Message = (props) => <div><b>{props.name}</b>: {props.content}</div>;
const MessageList = function (props) {
    return (

            props.messages.map(
                item => <Message name={item.name} content={item.content} key={item.id}/>
            )

    )
}

const Chat = (props) =>
    <div className="chat">
        <MessageList messages={messages} />
        <ButtonMessage />
    </div>


ReactDom.render(<Chat messages={messages} />, document.getElementById("root"))